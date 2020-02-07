module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": "error",
    "class-method-use-this": "off",
    "no-param-reassign": "off", //required by sequelize
    camelcase: "off", //accept my_variable
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }] //accept unused variables
  }
};
