// @flow
const mongoose = require('mongoose')
const preparePassword = require('./../utils/password')

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
  owns: [String]
})

ClientSchema.pre('save', function (next) {
  const client = this

  preparePassword(client, 'code', next)
})

const client = mongoose.model('clients', ClientSchema)

module.exports = client
