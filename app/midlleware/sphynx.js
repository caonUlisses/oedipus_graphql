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

var sphynx = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var token, _ref2, user;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.headers.authentication;
            _context.prev = 1;

            if (!token) {
              req.next();
            }

            if (!token) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return _jsonwebtoken2.default.verify(token, key);

          case 6:
            _ref2 = _context.sent;
            user = _ref2.user;

            req.user = user;

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](1);

            console.log(_context.t0);

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 11]]);
  }));

  return function sphynx(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = sphynx;