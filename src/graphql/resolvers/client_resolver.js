import Client from './../../models/clients'

const ClientResolver = {
  Query: {
    clients: () => {
      return Client.find({})
    },
    client: (root, { _id }) => {
      return Client.findOne({_id})
    }
  },
  Mutation: {
    addClient: (root, { name, cpf, cnpj, code, owns }) => {
      const author = new Client({name, cpf, cnpj, code, owns}).save()
      return author
    },
    deleteClient: (root, { _id }) => {
      return Client.remove({_id})
    },
    updateClient: (root, { _id, name }) => {
      return Client.findOneAndUpdate({_id}, {name})
    }
  }
}

export default ClientResolver
