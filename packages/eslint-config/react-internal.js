const onlyWarn = require("eslint-plugin-only-warn");
const eslintConfigPrettier = require("eslint-config-prettier");
const globals = require("globals");
const js = require("@eslint/js");
const eslint = require("@eslint/js");

const tseslint = require("typescript-eslint");
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [
  {
    ignores: ["**/.*.js", "**/node_modules/", "**/dist/"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends("turbo"),
  {
    plugins: {
      "only-warn": onlyWarn,
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
