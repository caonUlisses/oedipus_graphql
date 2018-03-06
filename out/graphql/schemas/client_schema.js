'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _client_resolver = require('./../resolvers/client_resolver');

var _client_resolver2 = _interopRequireDefault(_client_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefs = '\n  type Client {\n    _id: String,\n    name: String!,\n    cpf: String,\n    cnpj: String,\n    owns: [String]\n  }\n\n  type Query {\n    clients: [Client]\n    client(_id: String): Client\n  }\n\n  type Mutation {\n    create(name: String, cpf: String, cnpj: String, code: String, owns: [String]): Client\n    update(_id: String!, name: String!, owns: [String]): Client\n    delete(_id: String!): Client\n  }\n';

var ClientSchema = (0, _graphqlTools.makeExecutableSchema)({ typeDefs: typeDefs, resolvers: _client_resolver2.default });

exports.default = ClientSchema;