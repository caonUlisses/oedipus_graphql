'use strict';

require('dotenv/config');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _master = require('./config/master');

var _master2 = _interopRequireDefault(_master);

require('./db/mongose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = _master2.default.server.port;
var app = (0, _express2.default)();

app.listen(port, function () {
  console.log(_chalk2.default.green('Live at port ' + _chalk2.default.yellow(port)));
});