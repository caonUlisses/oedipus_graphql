'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _user_resolver = require('./../resolvers/user_resolver');

var _user_resolver2 = _interopRequireDefault(_user_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefs = '\n  type User {\n    _id: String,\n    name: String\n    email: String\n    picture: String\n    access: String\n  }\n\n  type Query {\n    users: [User]\n    user(_id: String): User\n  }\n\n  type Mutation {\n    create(name: String, email: String, password: String, picture: String, access: String): User\n    update(name: String, email: String, picture: String, access: String): User\n    delete: User\n    login(email: String!, password: String!): String\n  }\n';

var schema = (0, _graphqlTools.makeExecutableSchema)({ typeDefs: typeDefs, resolvers: _user_resolver2.default });

exports.default = schema;