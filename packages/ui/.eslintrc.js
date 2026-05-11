module.exports = {
  extends: ["@xox/eslint-config/base"],
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
};
