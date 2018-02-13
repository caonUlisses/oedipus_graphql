import bcrypt from 'bcrypt'
import config from './../config/master'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import { pick } from 'lodash'
import SHA256 from 'crypto-js/sha256'
import validator from 'validator'

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
    default: config.app.users.default_access
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
  tokens: [{
    device: {
      _id: {
        type: String,
        required: false
      }
    },
    token: {
      type: String,
      required: true
    }
  }]
})

UserSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()

  return pick(userObject, ['_id', 'name', 'email', 'picture', 'access'])
}

UserSchema.methods.generateAuthToken = async function (issuer = 'force') {
  try {
    const user = this
    const { name, access } = user
    const expiration = Date.now() + 2000000000
    const token = await jwt.sign({ _id: user._id.toHexString(), access, expiration, name, issuer }, key).toString()
    await user.tokens.push({ token, access })
    await user.save()

    return { token }
  } catch (error) {
    return { message: 'Houve um erro gerando o token de login', error }
  }
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

    const token = await user.generateAuthToken()
    return token
  } catch (error) {
    return { message: 'Houve um erro', error }
  }
}

UserSchema.methods.preparePassword = async function (user, next) {
  try {
    if (!user.isModified('password')) return next()

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(user.password, salt)
    user.password = hash
    return next()
  } catch (error) { return next(error) }
}

UserSchema.methods.prepareValidationCode = function (user, next) {
  user.validation_key = SHA256(user.email).toString()
}

UserSchema.pre('save', function (next) {
  const user = this

  this.preparePassword(user, next)
  this.prepareValidationCode(user, next)
})

const User = mongoose.model('User', UserSchema)

export default { User }
