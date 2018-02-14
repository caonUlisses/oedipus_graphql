'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var HistorySchema = new Schema({
  actor: String,
  action: String,
  timestamp: String
});

var history = _mongoose2.default.model('history', HistorySchema);

exports.default = history;