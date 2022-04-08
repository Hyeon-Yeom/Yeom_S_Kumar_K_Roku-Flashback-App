module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  // parser: [
  //   "babel-eslint",
  //   // "/usr/local/lib/node_modules/babel-eslint"
  // ],
  "parserOptions": {
    "requireConfigFile": false,
    // parser: 'babel-eslint'
    // "ecmaVersion": latest
  },
  // "babelOptions": { "configFile": "./.babelrc", },
  rules: {
    'vue/multi-word-component-names': 'off',
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}