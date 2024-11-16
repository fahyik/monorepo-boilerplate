const onlyWarn = require("eslint-plugin-only-warn");
const globals = require("globals");
const eslint = require("@eslint/js");
const eslintConfigPrettier = require("eslint-config-prettier");
const tseslint = require("typescript-eslint");

const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all,
});

module.exports = [
  {
    ignores: ["**/.*.js", "**/*.config.js", "**/node_modules/", "**/.next"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends(
    // require.resolve("@vercel/style-guide/eslint/next"), // not supported by eslint v9
    "turbo"
  ),
  {
    plugins: {
      "only-warn": onlyWarn,
    },

    languageOptions: {
      globals: {
        ...globals.node,
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
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
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
