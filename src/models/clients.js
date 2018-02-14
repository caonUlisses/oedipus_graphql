import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import config from './../config/master'

import defineAuthTokens from './../utils/token'

const Schema = mongoose.Schema
const key = config.app.keys.models

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

ClientSchema.methods.preparePassword = async function (client, next) {
  try {
    if (!client.isModified('code')) return next()

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(client.code, salt)
    client.code = hash
    return next()
  } catch (error) { return next(error) }
}

ClientSchema.pre('save', function (next) {
  const client = this

  this.preparePassword(client, next)
  defineAuthTokens(client, client.name, client.owns)
})

const client = mongoose.model('clients', ClientSchema)

export default client
