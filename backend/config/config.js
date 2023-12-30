const configs = require('./config.json')

module.exports = {
  development: configs.development,
  test: configs.test,
  production: configs.production,
};