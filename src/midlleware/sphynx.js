import jwt from 'jsonwebtoken'
import config from './../config/master'

const key = config.app.keys.models

const sphynx = async (req, res) => {
  const token = req.headers['authentication']
  try {
    if (!token) { req.next() }
    if (token) {
      const user = await jwt.verify(token, key)
      req.user = user
      req.next()
    }
  } catch (error) {
    req.next(error)
  }
}

export default sphynx
