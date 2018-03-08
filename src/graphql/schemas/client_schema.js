const { makeExecutableSchema } = require('graphql-tools')
const ClientResolver = require('./../resolvers/client_resolver')

const typeDefs = `
  type Client {
    _id: String,
    name: String!,
    cpf: String,
    cnpj: String,
    owns: [String]
  }

  type Query {
    clients: [Client]
    client(_id: String): Client
  }

  type Mutation {
    create(name: String, cpf: String, cnpj: String, code: String, owns: [String]): Client
    update(_id: String!, name: String!, owns: [String]): Client
    delete(_id: String!): Client
  }
`

const ClientSchema = makeExecutableSchema({ typeDefs, resolvers: ClientResolver })

module.exports = ClientSchema
