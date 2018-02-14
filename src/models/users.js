import bcrypt from 'bcrypt'
import config from './../config/master'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import { pick } from 'lodash'
import SHA256 from 'crypto-js/sha256'
import validator from 'validator'
import defineAuthTokens from './../utils/token'
import preparePassword from './../utils/password'

const key = config.app.keys.models

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
  },
  active: {
    type: Boolean,
    default: true
  },
  tokens: [String]
})

UserSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()

  return pick(userObject, ['_id', 'name', 'email', 'picture', 'access'])
}

UserSchema.statics.findByToken = async function (token) {
  try {
    const decoded = await jwt.verify(token, key)
    if (decoded.expiration < Date.now()) {
      return null
    }

    const user = this.findOne({
      '_id': decoded._id,
      'tokens.token': token
    })

    return user
  } catch (error) {
    return { error }
  }
}

UserSchema.statics.findByCredentials = async function (email, password) {
  try {
    const User = this
    const user = await User.findOne({ email })
    const res = await bcrypt.compare(password, user.password)
    if (!res) {
      return { message: 'Usuário não encontrado' }
    }

    return user
  } catch (error) {
    return { message: 'Usuário ou senha incorretos', error }
  }
}

UserSchema.methods.removeToken = async function (token) {
  try {
    const User = this
    return User.update({ $pull: { tokens: { token } } })
  } catch (error) {
    return { message: 'Ocorreu um erro', error }
  }
}

UserSchema.statics.login = async function (email, password) {
  try {
    const user = await this.findByCredentials(email, password)

    if (!user) {
      return { message: 'Usuário ou senha incorretos' }
    }

    const token = await user.setAuthToken()
    await user.save()
    return token
  } catch (error) {
    return { message: 'Houve um erro', error }
  }
}

UserSchema.pre('save', function (next) {
  const user = this
  preparePassword(user, next)
  defineAuthTokens(user, user.name, user.type)
  user.validation_key = SHA256(user.email).toString()
})

const User = mongoose.model('User', UserSchema)

export default User
