// @flow
const Client = require('./../../models/clients')

const ClientResolver = {
  Query: {
    clients: async () => {
      try { return await Client.find({}) }
      catch (error) { throw new Error(error) }
    },
    client: async (root, { _id }) => {
      try { return await Client.findById(_id) }
      catch (error) { throw new Error(error) }
    }
  },
  Mutation: {
    create: async (root, { name, cpf, cnpj, code, owns }) => {
      try { return await new Client({ name, cpf, cnpj, code, owns }).save() }
      catch (error) { throw new Error(error) }
    },
    update: async (root, { _id, name, cpf, cnpj, owns }) => {
      try { return await Client.findByIdAndUpdate(_id, { name, cpf, cnpj, owns }) }
      catch (error) { throw new Error(error) }
    },
    delete: async (root, { _id }) => {
      try { return await Client.findByIdAndRemove(_id) }
      catch (error) { throw new Error(error) }
    }
  }
}

module.exports = ClientResolver 
