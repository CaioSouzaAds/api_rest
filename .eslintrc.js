module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    'import/first': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    camelcase: 'off',
  },
};
