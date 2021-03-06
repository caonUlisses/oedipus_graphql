const { makeExecutableSchema } = require('graphql-tools')
const UserResolver = require('./../resolvers/user_resolver')

const typeDefs = `
  type User {
    _id: String,
    name: String
    email: String
    picture: String
    access: String
  }

  type Query {
    users: [User]
    user(_id: String): User
  }

  type Mutation {
    create(name: String, email: String, password: String, picture: String, access: String): User
    update(name: String, email: String, picture: String, access: String): User
    delete: User
    login(email: String!, password: String!): String
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers: UserResolver })

module.exports = schema
