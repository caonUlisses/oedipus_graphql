import jwt from 'jsonwebtoken'
import config from './../config/master'

const key = config.app.keys.models

const defineAuthTokens = async (receiver = this, field, field2, issuer = 'server') => {
  try {
    const expiration = Date.now() + 2000000000
    const token = await jwt.sign({ _id: receiver._id.toHexString(), field, field2, expiration, issuer }, key).toString()
    await receiver.tokens.push(token)

    return { token }
  } catch (error) {
    return { message: 'Houve um erro, tente novamente', error }
  }
}

export default defineAuthTokens
