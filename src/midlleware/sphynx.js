const jwt = require('jsonwebtoken')
const config = require('./../config/master')

const key = config.app.keys.models

const checkUser = async (req, res) => {
  const token = req.headers['authentication']
  try {
    if (token) {
      const user = await jwt.verify(token, key)
      req.user = user
      req.next()
    } else {
      req.next()
    }
  } catch (error) {
    req.next(error)
  }
}

const checkClient = async (req, res) => {
  const token = req.headers['client-authentication']
  try {
    if (token) {
      const client = await jwt.verify(token, key)
      req.client = client
      req.next()
    } else {
      req.next()
    }
  } catch (error) {
    req.next(error)
  }
}

module.exports = { checkUser, checkClient }
