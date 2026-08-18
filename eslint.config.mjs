import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // This is a pixel-for-pixel clone: the source markup is plain <img> with
      // exact sizing classes, and next/image's wrapper would change the layout.
      "@next/next/no-img-element": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendored third-party source, installed verbatim by `originkit add`. It is
    // not ours to restyle: editing it to satisfy our lint rules would be
    // rewriting someone else's component and would be lost on the next update.
    "src/components/originkit/**",
  ]),
]);

export default eslintConfig;
