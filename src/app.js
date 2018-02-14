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
import sphynx from './midlleware/sphynx'

const port = config.server.port
const app = express()

app.use(cors())
app.use(sphynx)

app.use('/clients/graphiql', graphiqlExpress({ endpointURL: '/clients/graphql' }))
app.use('/clients/graphql', bodyParser.json(), graphqlExpress({ schema: ClientSchema }))
app.use('/users/graphiql', graphiqlExpress({ endpointURL: '/users/graphql' }))
app.use('/users/graphql', bodyParser.json(), graphqlExpress(req => ({ schema: UserSchema, context: { user: req.user } })))

app.listen(port, () => {
  console.log(chalk.green(`Live at port ${chalk.yellow(port)}`))
})
