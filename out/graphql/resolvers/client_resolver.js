'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _clients = require('./../../models/clients');

var _clients2 = _interopRequireDefault(_clients);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClientResolver = {
  Query: {
    clients: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _clients2.default.find({});

              case 3:
                return _context.abrupt('return', _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context['catch'](0);
                throw new Error(_context.t0);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined, [[0, 6]]);
      }));

      return function clients() {
        return _ref.apply(this, arguments);
      };
    }(),
    client: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(root, _ref3) {
        var _id = _ref3._id;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _clients2.default.findOne({ _id: _id });

              case 3:
                return _context2.abrupt('return', _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2['catch'](0);
                throw new Error(_context2.t0);

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined, [[0, 6]]);
      }));

      return function client(_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  },
  Mutation: {
    create: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(root, _ref5) {
        var name = _ref5.name,
            cpf = _ref5.cpf,
            cnpj = _ref5.cnpj,
            code = _ref5.code,
            owns = _ref5.owns;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return new _clients2.default({ name: name, cpf: cpf, cnpj: cnpj, code: code, owns: owns }).save();

              case 3:
                return _context3.abrupt('return', _context3.sent);

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3['catch'](0);
                throw new Error(_context3.t0);

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined, [[0, 6]]);
      }));

      return function create(_x3, _x4) {
        return _ref4.apply(this, arguments);
      };
    }(),
    update: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(root, _ref7) {
        var _id = _ref7._id,
            name = _ref7.name,
            cpf = _ref7.cpf,
            cnpj = _ref7.cnpj,
            owns = _ref7.owns;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _clients2.default.findByIdAndUpdate(_id, { name: name, cpf: cpf, cnpj: cnpj, owns: owns });

              case 3:
                return _context4.abrupt('return', _context4.sent);

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4['catch'](0);
                throw new Error(_context4.t0);

              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, undefined, [[0, 6]]);
      }));

      return function update(_x5, _x6) {
        return _ref6.apply(this, arguments);
      };
    }(),
    delete: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(root, _ref9) {
        var _id = _ref9._id;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _clients2.default.findByIdAndRemove(_id);

              case 3:
                return _context5.abrupt('return', _context5.sent);

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5['catch'](0);
                throw new Error(_context5.t0);

              case 9:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, undefined, [[0, 6]]);
      }));

      return function _delete(_x7, _x8) {
        return _ref8.apply(this, arguments);
      };
    }()
  }
};

exports.default = ClientResolver;