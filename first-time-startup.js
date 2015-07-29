'use strict';
const urls = require('./appland-urls');
const co = require('co');
const applandRequest = require('./appland-request');

module.exports = co.wrap(function* (opts) {
  return yield applandRequest(urls.FirstTimeStartupReq, {
    FirstTimeStartupReq: require('./model/FirstTimeStartup')(opts)
  });
});
