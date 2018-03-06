'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _users = require('./../../models/users');

var _users2 = _interopRequireDefault(_users);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _pick = require('lodash/pick');

var _pick2 = _interopRequireDefault(_pick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserResolver = {
  Query: {
    users: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(root, args, _ref2) {
        var user = _ref2.user;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (user) {
                  _context.next = 2;
                  break;
                }

                throw new Error(_chalk2.default.red('Faça login primeiro'));

              case 2:
                _context.prev = 2;
                return _context.abrupt('return', _users2.default.find({}, { password: 0 }));

              case 6:
                _context.prev = 6;
                _context.t0 = _context['catch'](2);
                throw new Error(_chalk2.default.red(_context.t0));

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined, [[2, 6]]);
      }));

      return function users(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }(),
    user: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(root, _ref4, _ref5) {
        var _id = _ref4._id;
        var _user = _ref5.user;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_user) {
                  _context2.next = 2;
                  break;
                }

                throw new Error('Faça login primeiro');

              case 2:
                _context2.prev = 2;
                return _context2.abrupt('return', _users2.default.findById(_id));

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2['catch'](2);
                throw new Error(_context2.t0);

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined, [[2, 6]]);
      }));

      return function user(_x4, _x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }()
  },
  Mutation: {
    create: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(root, _ref7) {
        var name = _ref7.name,
            email = _ref7.email,
            password = _ref7.password,
            picture = _ref7.picture,
            access = _ref7.access;
        var user;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return new _users2.default({ name: name, email: email, password: password, picture: picture, access: access }).save();

              case 3:
                user = _context3.sent;
                return _context3.abrupt('return', (0, _pick2.default)(user, ['name', 'email', 'picture']));

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3['catch'](0);
                throw new Error(_context3.t0);

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined, [[0, 7]]);
      }));

      return function create(_x7, _x8) {
        return _ref6.apply(this, arguments);
      };
    }(),
    update: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(root, _ref9, _ref10) {
        var name = _ref9.name,
            email = _ref9.email,
            picture = _ref9.picture,
            access = _ref9.access;
        var user = _ref10.user;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (user) {
                  _context4.next = 2;
                  break;
                }

                throw new Error('Faça login primeiro');

              case 2:
                _context4.prev = 2;
                return _context4.abrupt('return', _users2.default.findOneAndUpdate({ _id: user._id }, { name: name, email: email, picture: picture, access: access }));

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4['catch'](2);
                throw new Error(_context4.t0);

              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, undefined, [[2, 6]]);
      }));

      return function update(_x9, _x10, _x11) {
        return _ref8.apply(this, arguments);
      };
    }(),
    delete: function () {
      var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(root, args, _ref12) {
        var user = _ref12.user;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (user) {
                  _context5.next = 2;
                  break;
                }

                throw new Error('Faça login primeiro');

              case 2:
                _context5.prev = 2;
                return _context5.abrupt('return', _users2.default.findByIdAndRemove(user._id));

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5['catch'](2);
                throw new Error(_context5.t0);

              case 9:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, undefined, [[2, 6]]);
      }));

      return function _delete(_x12, _x13, _x14) {
        return _ref11.apply(this, arguments);
      };
    }(),
    login: function () {
      var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(root, _ref14) {
        var email = _ref14.email,
            password = _ref14.password;
        var user;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _users2.default.findOne({ email: email });

              case 3:
                user = _context6.sent;

                if (user) {
                  _context6.next = 6;
                  break;
                }

                throw new Error('Email não cadastrado');

              case 6:
                return _context6.abrupt('return', user.login(password, user));

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6['catch'](0);
                throw new Error(_context6.t0);

              case 12:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, undefined, [[0, 9]]);
      }));

      return function login(_x15, _x16) {
        return _ref13.apply(this, arguments);
      };
    }()
  }
};

exports.default = UserResolver;