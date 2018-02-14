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

var _pick = require('lodash/pick');

var _pick2 = _interopRequireDefault(_pick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserResolver = {
  Query: {
    users: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(root, _ref2) {
        var user = _ref2.user;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(user);
                return _context.abrupt('return', _users2.default.find({}, { password: 0 }));

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function users(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(),
    user: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(root, _ref4) {
        var _id = _ref4._id;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', _users2.default.findById(_id, { password: 0 }));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function user(_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }()
  },
  Mutation: {
    create: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(root, _ref6) {
        var name = _ref6.name,
            email = _ref6.email,
            password = _ref6.password,
            picture = _ref6.picture,
            access = _ref6.access;
        var user;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return new _users2.default({ name: name, email: email, password: password, picture: picture, access: access }).save();

              case 2:
                user = _context3.sent;
                return _context3.abrupt('return', (0, _pick2.default)(user, ['name', 'email', 'picture']));

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined);
      }));

      return function create(_x5, _x6) {
        return _ref5.apply(this, arguments);
      };
    }(),
    update: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(root, _ref8) {
        var _id = _ref8._id,
            name = _ref8.name,
            email = _ref8.email,
            picture = _ref8.picture,
            access = _ref8.access;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt('return', _users2.default.findByIdAndUpdate(_id, { name: name, email: email, picture: picture, access: access }));

              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, undefined);
      }));

      return function update(_x7, _x8) {
        return _ref7.apply(this, arguments);
      };
    }(),
    delete: function () {
      var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(root, _ref10) {
        var _id = _ref10._id;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt('return', _users2.default.findByIdAndRemove(_id));

              case 1:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, undefined);
      }));

      return function _delete(_x9, _x10) {
        return _ref9.apply(this, arguments);
      };
    }(),
    login: function () {
      var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(root, _ref12) {
        var email = _ref12.email,
            password = _ref12.password;
        var user;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _users2.default.findOne({ email: email });

              case 2:
                user = _context6.sent;

                if (user) {
                  _context6.next = 5;
                  break;
                }

                throw new Error('Email não cadastrado');

              case 5:
                return _context6.abrupt('return', user.login(password, user));

              case 6:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, undefined);
      }));

      return function login(_x11, _x12) {
        return _ref11.apply(this, arguments);
      };
    }()
  }
};

exports.default = UserResolver;