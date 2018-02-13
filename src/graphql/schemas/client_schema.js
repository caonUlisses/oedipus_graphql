import { makeExecutableSchema } from 'graphql-tools'
import ClientResolver from './../resolvers/client_resolver'

const typeDefs = `
  type Client {
    name: String!,
    cpf: String,
    cnpj: String,
    code: String!,
    owns: [String]
  }

  type Query {
    clients: [Client]
    client(_id: String): Client
  }

  type Mutation {
    addClient(name: String, cpf: String, cnpj: String, code: String, owns: [String]): Client
    deleteClient(_id: String!): Client
    updateClient(_id: String!, name: String!, owns: [String]): Client
  }
`

const ClientSchema = makeExecutableSchema({ typeDefs, resolvers: ClientResolver })

export default ClientSchema
