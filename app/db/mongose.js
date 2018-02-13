'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _master = require('./../config/master');

var _master2 = _interopRequireDefault(_master);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _mongoose2.default.connect(_master2.default.server.db.uri + '/' + _master2.default.server.db.default_collection, function () {
  console.log(_chalk2.default.green('Connected to MongoDB'));
});