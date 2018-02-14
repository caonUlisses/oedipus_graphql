import bcrypt from 'bcrypt'
import config from './../config/master'
import mongoose from 'mongoose'
import SHA256 from 'crypto-js/sha256'
import validator from 'validator'
import preparePassword from './../utils/password'
import signToken from './../utils/token'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: `{VALUE} is not a valid email`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  picture: {
    type: String,
    minlength: 1
  },
  access: {
    type: String,
    required: true,
    default: config.models.users.access
  },
  verified: {
    type: Boolean,
    required: true,
    default: false
  },
  validation_key: {
    type: String,
    required: false
  }
})

UserSchema.methods.login = async function (user, password) {
  const valid = bcrypt.compare(password, user.password)
  if (!valid) throw new Error('Senha incorreta')
  const { _id, name, email, access } = user
  return signToken(null, { _id, name, email, access })
}

UserSchema.pre('save', async function (next) {
  const user = this
  await preparePassword(user, 'password', next)
  user.validation_key = SHA256(user.email).toString()
})

const User = mongoose.model('User', UserSchema)

export default User
