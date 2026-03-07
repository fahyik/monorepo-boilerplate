import eslint from "@eslint/js";
import nextConfig from "eslint-config-next/core-web-vitals";
import eslintConfigPrettier from "eslint-config-prettier";
import turbo from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...nextConfig,
  {
    ignores: [
      "**/.*.js",
      "**/*.config.js",
      "**/*.config.ts",
      "**/node_modules/",
      "**/.next",
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    plugins: {
      turbo,
    },
    files: ["**/*.js?(x)", "**/*.ts?(x)"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
  eslintConfigPrettier
);
