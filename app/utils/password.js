'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var preparePassword = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(actor, field, next) {
    var salt, hash;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (actor.isModified(field)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt('return', next());

          case 3:
            _context.next = 5;
            return _bcrypt2.default.genSalt(10);

          case 5:
            salt = _context.sent;
            _context.next = 8;
            return _bcrypt2.default.hash(actor.password, salt);

          case 8:
            hash = _context.sent;

            actor.password = hash;
            return _context.abrupt('return', next());

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](0);
            return _context.abrupt('return', next(_context.t0));

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 13]]);
  }));

  return function preparePassword(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = preparePassword;