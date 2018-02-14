'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _master = require('./../config/master');

var _master2 = _interopRequireDefault(_master);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var key = _master2.default.app.keys.models;

var signToken = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(info) {
    var expiresIn, token;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            expiresIn = '30d';
            _context.next = 4;
            return _jsonwebtoken2.default.sign({ info: info }, key, { expiresIn: expiresIn }).toString();

          case 4:
            token = _context.sent;
            return _context.abrupt('return', token);

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);
            throw new Error({ message: 'Houve um erro, tente novamente', error: _context.t0 });

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 8]]);
  }));

  return function signToken(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = signToken;