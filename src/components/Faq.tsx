"use client";

import { useState } from "react";

import { FAQS } from "@/data/faqs";

/** Rows visible on first paint. */
const INITIAL_COUNT = 5;
/** Rows each "Load More" press adds -- measured on the live site: 5 -> 12 -> 19 -> 26 -> 33. */
const PAGE_SIZE = 7;

/**
 * "Questions worth asking before you commit budget" — the FAQ accordion.
 *
 * Only one row is open at a time: opening a second closes the first, so a
 * single index is tracked rather than a set. Verified against the live site.
 * "Load More" reveals seven more each press and vanishes once all 34 are out;
 * there is no way back.
 *
 * WHY EVERY ROW AND ANSWER IS IN THE DOM: `StructuredData.tsx` publishes all 34
 * questions and answers as a `FAQPage` graph. This component used to slice the
 * list to five and mount an answer only while its row was open, so a crawler
 * fetching the page found 5 questions and 0 answers against 34 declared — the
 * markup described content that was not there, which is the one thing Google's
 * FAQ policy forbids and is grounds for discarding the whole node.
 *
 * So every row and every answer is rendered, and visibility is handled by the
 * `hidden` attribute rather than by conditional mounting. `hidden` keeps the
 * text in the served HTML while still hiding it from the viewport and from
 * assistive technology, and every press of "Load More" and every accordion
 * click behaves exactly as it did before.
 */
export default function Faq() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleItem(index: number) {
    setOpenIndex((previous) => (previous === index ? null : index));
  }

  return (
    <div
      id="faq"
      data-section-theme="light"
      className="w-full bg-white font-fira-sans"
      style={{
        borderTop: "1px solid rgba(8, 9, 10, 0.2)",
        borderBottom: "1px solid rgba(8, 9, 10, 0.2)",
      }}
    >
      <div
        className="w-[90%] md:w-auto mx-auto md:mx-[153px]"
        style={{
          borderLeft: "1px solid rgba(8, 9, 10, 0.2)",
          borderRight: "1px solid rgba(8, 9, 10, 0.2)",
        }}
      >
        <div className="px-4 md:pl-[60px] md:pr-[60px] py-16">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-[35%]">
              <p className="text-black uppercase tracking-[1.75px] mb-4">
                BEFORE YOU COMMIT
              </p>
              <h2 className="text-black text-[30px] md:text-[38px] font-medium">
                Questions worth asking before you commit budget
              </h2>
            </div>
            <div className="md:w-[65%] space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                const answerId = `faq-answer-${index}`;
                return (
                  <div
                    key={faq.question}
                    hidden={index >= visibleCount}
                    className="border border-[#08090A4D] bg-[#F5F5F5] rounded-[2px]"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      className="w-full flex justify-between items-center p-6 py-3 text-left"
                      onClick={() => toggleItem(index)}
                    >
                      <span>{faq.question}</span>
                      <span
                        aria-hidden="true"
                        className="text-2xl transition-transform"
                        style={{
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        +
                      </span>
                    </button>
                    <div
                      id={answerId}
                      hidden={!isOpen}
                      className="px-6 pb-6 pt-2 text-black/70"
                    >
                      {faq.answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {visibleCount < FAQS.length ? (
            <div className="flex justify-center mt-8">
              <button
                className="px-6 py-3 bg-black text-white rounded-[2px]"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              >
                Load More
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
