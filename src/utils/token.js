import jwt from 'jsonwebtoken'
import config from './../config/master'

const key = config.app.keys.models

const signToken = async (info) => {
  try {
    const expiresIn = '30d'
    const token = await jwt.sign({ info }, key, { expiresIn }).toString()

    return token
  } catch (error) {
    throw new Error({ message: 'Houve um erro, tente novamente', error })
  }
}

export default signToken
