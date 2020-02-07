module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "class-method-use-this": "off",
    "no-param-reassign": "off", //required by sequelize
    camelcase: "off", //accept my_variable
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }] //accept unused variables
  }
};
