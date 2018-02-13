import mongoose from 'mongoose'
import chalk from 'chalk'
import config from './../config/master'

export default mongoose.connect(config.server.db.uri, () => {
  console.log(chalk.green('Connected to MongoDB'))
})
