const earLint = require('./index');

module.exports = Object.assign(earLint, {
  'env': {
    'es6': true,
    'node': true,
    'mocha': true
  },
  'extends': 'eslint:recommended'
})