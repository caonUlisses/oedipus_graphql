'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkClient = exports.checkUser = undefined;

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

var checkUser = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var token, user;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.headers['authentication'];
            _context.prev = 1;

            if (!token) {
              _context.next = 10;
              break;
            }

            _context.next = 5;
            return _jsonwebtoken2.default.verify(token, key);

          case 5:
            user = _context.sent;

            req.user = user;
            req.next();
            _context.next = 11;
            break;

          case 10:
            req.next();

          case 11:
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](1);

            req.next(_context.t0);

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 13]]);
  }));

  return function checkUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var checkClient = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var token, client;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = req.headers['client-authentication'];
            _context2.prev = 1;

            if (!token) {
              _context2.next = 10;
              break;
            }

            _context2.next = 5;
            return _jsonwebtoken2.default.verify(token, key);

          case 5:
            client = _context2.sent;

            req.client = client;
            req.next();
            _context2.next = 11;
            break;

          case 10:
            req.next();

          case 11:
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2['catch'](1);

            req.next(_context2.t0);

          case 16:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[1, 13]]);
  }));

  return function checkClient(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.checkUser = checkUser;
exports.checkClient = checkClient;