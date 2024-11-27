import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import imprt from "eslint-plugin-import";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all,
});

export default tseslint.config(
  ...compat.extends("turbo"),
  {
    ignores: [
      "build/",
      "**/*.js",
      "**/*.config.ts",
      "**/*.config.js",
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },

    plugins: {
      import: imprt,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/no-floating-promises": "warn",
      "import/no-cycle": "error",
      "no-unsafe-optional-chaining": "warn",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-expressions": [
        "warn",
        {
          allowShortCircuit: false,
          allowTernary: false,
        },
      ],
      eqeqeq: ["error"],
    },
  },
  eslintConfigPrettier
);
