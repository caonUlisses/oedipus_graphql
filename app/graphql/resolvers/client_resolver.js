'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clients = require('./../../models/clients');

var _clients2 = _interopRequireDefault(_clients);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClientResolver = {
  Query: {
    clients: function clients() {
      return _clients2.default.find({});
    },
    client: function client(root, _ref) {
      var _id = _ref._id;

      return _clients2.default.findOne({ _id: _id });
    }
  },
  Mutation: {
    create: function create(root, _ref2) {
      var name = _ref2.name,
          cpf = _ref2.cpf,
          cnpj = _ref2.cnpj,
          code = _ref2.code,
          owns = _ref2.owns;

      var author = new _clients2.default({ name: name, cpf: cpf, cnpj: cnpj, code: code, owns: owns }).save();
      return author;
    },
    update: function update(root, _ref3) {
      var _id = _ref3._id,
          name = _ref3.name,
          cpf = _ref3.cpf,
          cnpj = _ref3.cnpj,
          owns = _ref3.owns;

      return _clients2.default.findByIdAndUpdate(_id, { name: name, cpf: cpf, cnpj: cnpj, owns: owns });
    },
    delete: function _delete(root, _ref4) {
      var _id = _ref4._id;

      return _clients2.default.findByIdAndRemove(_id);
    }
  }
};

exports.default = ClientResolver;