import mongoose from 'mongoose'
import chalk from 'chalk'
import config from './../config/master'

export default mongoose.connect(`${config.server.db.uri}/${config.server.db.default_collection}`, () => {
  console.log(chalk.green('Connected to MongoDB'))
})
