'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _password = require('./../utils/password');

var _password2 = _interopRequireDefault(_password);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var ClientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    minlength: 11
  },
  cnpj: {
    type: String,
    minlength: 14
  },
  code: {
    type: String,
    minlength: 6,
    required: true
  },
  owns: [String]
});

ClientSchema.pre('save', function (next) {
  var client = this;

  (0, _password2.default)(client, 'code', next);
});

var client = _mongoose2.default.model('clients', ClientSchema);

exports.default = client;