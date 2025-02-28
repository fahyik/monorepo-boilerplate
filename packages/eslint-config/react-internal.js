const onlyWarn = require("eslint-plugin-only-warn");
const eslintConfigPrettier = require("eslint-config-prettier");
const globals = require("globals");
const eslint = require("@eslint/js");
const turbo = require("eslint-plugin-turbo");
const tseslint = require("typescript-eslint");

module.exports = [
  {
    ignores: ["**/.*.js", "**/node_modules/", "**/dist/"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  {
    plugins: {
      "only-warn": onlyWarn,
      turbo,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        React: true,
        JSX: true,
      },
    },

    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },

    rules: {
      "@typescript-eslint/no-unused-expressions": [
        "warn",
        {
          allowShortCircuit: false,
          allowTernary: false,
        },
      ],
    },
  },
  {
    files: ["**/*.js?(x)", "**/*.ts?(x)"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],

    rules: {
      "no-undef": "off",
    },
  },
  eslintConfigPrettier,
];
