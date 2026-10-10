import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

// Execute the actual event handlers without React rendering or external requests.
// Browser storage, analytics and the HTTP response are controlled test boundaries.
function functionSource(file, name) {
  const source = fs.readFileSync(file, "utf8");
  const tree = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  let match;
  function visit(node) {
    if (ts.isFunctionDeclaration(node) && node.name?.text === name) match = node;
    ts.forEachChild(node, visit);
  }
  visit(tree);
  assert.ok(match, `Missing ${name} in ${file}`);
  return ts.transpileModule(match.getText(tree), {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  }).outputText;
}

const formPath = "src/components/ContactForm.tsx";
const submitCode = functionSource(formPath, "validate") + functionSource(formPath, "handleSubmit");
const clickCode = functionSource("src/components/TrackedBlogLink.tsx", "recordIntent");
const values = {
  name: "Test visitor", email: "visitor@example.invalid", company: "", phone: "", country: "",
  service: "MVP Development", budget: "Not sure yet", timeline: "Still planning",
  details: "A bounded test enquiry that must never be sent.", consent: true, website: "",
};

function formHarness({ storage, analyticsThrows = false, responseOk = true, networkThrows = false, input = values, token = "test-token" } = {}) {
  const states = [], messages = [], events = [], requests = [], resets = [], valueChanges = [];
  const context = {
    Error, MIN_DETAIL_LENGTH: 20, values: input, EMPTY: {}, formId: "test-form",
    turnstileSiteKey: "test-site-key", turnstileToken: token,
    setErrors() {}, document: { getElementById: () => null },
    setStatus: (value) => states.push(value),
    setServerMessage: (value) => messages.push(value),
    setValues: (value) => valueChanges.push(value), setTurnstileToken() {},
    setTurnstileResetKey: (update) => resets.push(update(0)),
    COMPANY: { email: "test@example.invalid" },
    fetch: async (url, options) => {
      requests.push({ url, options });
      if (networkThrows) throw new Error("Network unavailable");
      return { ok: responseOk, status: responseOk ? 200 : 502, json: async () => responseOk ? { ok: true } : { error: "Notification not accepted" } };
    },
    track: (name, properties) => {
      events.push({ name, properties });
      if (analyticsThrows) throw new Error("Analytics unavailable");
    },
    window: storage ?? { sessionStorage: { getItem: () => "mvp-development-for-startups" } },
  };
  vm.createContext(context);
  vm.runInContext(submitCode, context);
  return { states, messages, events, requests, resets, valueChanges, submit: () => context.handleSubmit({ preventDefault() {} }) };
}

test("accepted enquiry retains success and originating article", async () => {
  const form = formHarness();
  await form.submit();
  assert.deepEqual(form.states, ["submitting", "success"]);
  assert.equal(form.requests.length, 1);
  assert.equal(form.requests[0].url, "/api/contact");
  assert.equal(form.requests[0].options.method, "POST");
  assert.deepEqual(JSON.parse(form.requests[0].options.body), { ...values, turnstileToken: "test-token" });
  assert.equal(form.events.length, 1);
  assert.equal(form.events[0].name, "Contact Enquiry Sent");
  assert.equal(form.events[0].properties.article, "mvp-development-for-startups");
  assert.equal(form.events[0].properties.service, "MVP Development");
  assert.equal(form.events[0].properties.budget, "Not sure yet");
});

for (const storage of [
  { get sessionStorage() { throw new Error("Storage forbidden"); } },
  { sessionStorage: { getItem() { throw new Error("Storage unavailable"); } } },
]) {
  test("accepted enquiry stays successful when storage is inaccessible", async () => {
    const form = formHarness({ storage });
    await form.submit();
    assert.deepEqual(form.states, ["submitting", "success"]);
    assert.equal(form.events.length, 1);
    assert.equal(form.events[0].name, "Contact Enquiry Sent");
    assert.equal(form.events[0].properties.article, "none");
    assert.equal(form.resets.length, 0);
  });
}

test("analytics failure cannot reclassify an accepted enquiry as failed", async () => {
  const form = formHarness({ analyticsThrows: true });
  await assert.doesNotReject(form.submit());
  assert.deepEqual(form.states, ["submitting", "success"]);
  assert.deepEqual(form.events.map((event) => event.name), ["Contact Enquiry Sent"]);
});

test("actual server rejection keeps its error even when failure tracking throws", async () => {
  const form = formHarness({ responseOk: false, analyticsThrows: true });
  await assert.doesNotReject(form.submit());
  assert.deepEqual(form.states, ["submitting", "error"]);
  assert.equal(form.messages.at(-1), "Notification not accepted");
  assert.equal(form.valueChanges.length, 0);
  assert.deepEqual(form.resets, [1]);
  assert.deepEqual(form.events.map((event) => event.name), ["Contact Enquiry Failed"]);
});

test("network failure remains an error without clearing the visitor's input", async () => {
  const form = formHarness({ networkThrows: true });
  await form.submit();
  assert.deepEqual(form.states, ["submitting", "error"]);
  assert.equal(form.messages.at(-1), "Network unavailable");
  assert.equal(form.valueChanges.length, 0);
});

test("invalid input and missing security verification never send an enquiry", async () => {
  for (const options of [{ input: { ...values, consent: false } }, { token: "" }]) {
    const form = formHarness(options);
    await form.submit();
    assert.equal(form.requests.length, 0);
    assert.equal(form.events.length, 0);
    assert.ok(!form.states.includes("success"));
  }
});

for (const failure of ["storage", "analytics", "none"]) {
  test(`blog CTA handler tolerates ${failure} failure and preserves event dimensions`, () => {
    const events = [], origins = [];
    const context = {
      postSlug: "mvp-development-for-startups", destination: "contact", serviceSlug: "mvp-development",
      window: { sessionStorage: { setItem: (key, value) => {
        if (failure === "storage") throw new Error("Storage forbidden");
        origins.push({ key, value });
      } } },
      track: (name, properties) => {
        events.push({ name, properties });
        if (failure === "analytics") throw new Error("Analytics unavailable");
      },
    };
    vm.createContext(context);
    vm.runInContext(clickCode, context);
    assert.doesNotThrow(() => context.recordIntent());
    assert.equal(events.length, 1);
    assert.equal(events[0].name, "Blog CTA Click");
    assert.equal(events[0].properties.article, "mvp-development-for-startups");
    assert.equal(events[0].properties.destination, "contact");
    assert.equal(events[0].properties.service, "mvp-development");
    if (failure !== "storage") assert.deepEqual(origins, [{ key: "apexstack_blog_origin", value: "mvp-development-for-startups" }]);
  });
}
