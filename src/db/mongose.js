const mongoose = require('mongoose')
const chalk = require('chalk')
const config = require('./../config/master')

module.exports = mongoose.connect(config.server.db.uri, () => {
  console.log(chalk.green('Connected to MongoDB'))
})
