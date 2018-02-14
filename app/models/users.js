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

var _master = require('./../config/master');

var _master2 = _interopRequireDefault(_master);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _sha = require('crypto-js/sha256');

var _sha2 = _interopRequireDefault(_sha);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _password = require('./../utils/password');

var _password2 = _interopRequireDefault(_password);

var _token = require('./../utils/token');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose2.default.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: _validator2.default.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  picture: {
    type: String,
    minlength: 1
  },
  access: {
    type: String,
    required: true,
    default: _master2.default.models.users.access
  },
  verified: {
    type: Boolean,
    required: true,
    default: false,
    select: false
  },
  validation_key: {
    type: String,
    required: false,
    select: false
  }
});

UserSchema.methods.login = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(password, user) {
    var valid, _id, name, email, access;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _bcrypt2.default.compare(password, user.password);

          case 2:
            valid = _context.sent;

            if (valid) {
              _context.next = 5;
              break;
            }

            throw new Error('Senha incorreta');

          case 5:
            _id = user._id, name = user.name, email = user.email, access = user.access;
            return _context.abrupt('return', (0, _token2.default)({ _id: _id, name: name, email: email, access: access }));

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

UserSchema.pre('save', function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(next) {
    var user;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            user = this;
            _context2.next = 3;
            return (0, _password2.default)(user, 'password', next);

          case 3:
            user.validation_key = (0, _sha2.default)(user.email).toString();

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x3) {
    return _ref2.apply(this, arguments);
  };
}());

var User = _mongoose2.default.model('User', UserSchema);

exports.default = User;