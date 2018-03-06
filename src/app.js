import {} from 'dotenv/config'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import chalk from 'chalk'
import config from './config/master'
import ClientSchema from './graphql/schemas/client_schema'
import UserSchema from './graphql/schemas/user_schema'
import './db/mongose'
import { checkUser, checkClient } from './midlleware/sphynx'

const port = config.server.port
const app = express()

app.use(cors())
app.use(checkUser)
app.use(checkClient)

app.use('/clients/', bodyParser.json(), graphqlExpress({ schema: ClientSchema }))
app.use('/users/', bodyParser.json(), graphqlExpress(req => ({ schema: UserSchema, context: { user: req.user } })))

app.listen(port, () => {
  console.log(chalk.green(`Live at port ${chalk.yellow(port)}`))
})
