// @flow
const jwt = require('jsonwebtoken')
const config = require('./../config/master')

const key = config.app.keys.models

const checkUser = async (req) => {
  const token: string = req.headers['authentication']
  try {
    if (token) {
      const userToken: string = await jwt.verify(token, key)
      req.user_token = userToken
      req.next()
    } else {
      req.next()
    }
  } catch (error) {
    req.next(error)
  }
}

const checkClient = async (req) => {
  const token: string = req.headers['client-authentication']
  try {
    if (token) {
      const clientToken: string = await jwt.verify(token, key)
      req.client_token = clientToken
      req.next()
    } else {
      req.next()
    }
  } catch (error) {
    req.next(error)
  }
}

module.exports = { checkUser, checkClient }
