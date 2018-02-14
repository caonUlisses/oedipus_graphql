import config from './../config/master'
import mongoose from 'mongoose'
import SHA256 from 'crypto-js/sha256'
import validator from 'validator'
import preparePassword from './../utils/password'

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

UserSchema.statics.login = async function (email, password) {
  // login the user
}

UserSchema.pre('save', function (next) {
  const user = this
  preparePassword(user, next)
  user.validation_key = SHA256(user.email).toString()
})

const User = mongoose.model('User', UserSchema)

export default User
