import mongoose from 'mongoose'

import defineAuthTokens from './../utils/token'
import preparePassword from './../utils/password'

const Schema = mongoose.Schema

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    minlength: 11
  },
  cnpj: {
    type: String,
    minlength: 14
  },
  code: {
    type: String,
    minlength: 6,
    required: true
  },
  owns: [String],
  tokens: [String]
})

ClientSchema.pre('save', function (next) {
  const client = this

  preparePassword(client, 'code', next)
  defineAuthTokens(client, client.name, client.owns)
})

const client = mongoose.model('clients', ClientSchema)

export default client
