import jwt from 'jsonwebtoken'
import config from './../config/master'

const key = config.app.keys.models

const sphynx = async (req, res) => {
  const token = req.headers['authentication']
  console.log('Token: ', token)
  try {
    if (!token) { req.next() }
    if (token) {
      const user = await jwt.verify(token, key)
      console.log('User: ', user)
      req.user = user
      console.log('Req.User :', req.user)
      req.next()
    }
  } catch (error) {
    console.log(error)
    req.next()
  }
}

export default sphynx
