module.exports = {
  root: true,

  env: {
    node: true
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "vue/component-name-in-template-casing": [
      "warn",
      "PascalCase",
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ]
  },

  parserOptions: {
    parser: "@babel/eslint-parser"
  },

  extends: ["plugin:vue/recommended"]
};
