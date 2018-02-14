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
    create: (root, { name, cpf, cnpj, code, owns }) => {
      const author = new Client({name, cpf, cnpj, code, owns}).save()
      return author
    },
    update: (root, { _id, name, cpf, cnpj, owns }) => {
      return Client.findByIdAndUpdate(_id, {name, cpf, cnpj, owns})
    },
    delete: (root, { _id }) => {
      return Client.findByIdAndRemove(_id)
    }
  }
}

export default ClientResolver
