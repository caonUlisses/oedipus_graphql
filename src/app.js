import {} from 'dotenv/config'
import express from 'express'
import chalk from 'chalk'
import config from './config/master'

const port = config.server.port
const app = express()

app.listen(port, () => {
  console.log(chalk.green(`Live at port ${chalk.yellow(port)}`))
})
