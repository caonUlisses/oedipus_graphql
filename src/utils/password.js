const bcrypt = require('bcrypt')

const preparePassword = async (actor, field, next) => {
  try {
    if (!actor.isModified(field)) return next()
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(actor.password, salt)
    actor.password = hash
    return next()
  } catch (error) { return next(error) }
}

module.exports = preparePassword
