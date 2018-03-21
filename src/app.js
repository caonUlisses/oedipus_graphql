// @flow
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const { graphqlExpress } = require('apollo-server-express')
const config = require('./config/master')
const ClientSchema = require('./graphql/schemas/client_schema')
const UserSchema = require('./graphql/schemas/user_schema')
require('./db/mongose.js')
const { checkUser, checkClient } = require('./midlleware/sphynx')

const PORT: string = config.server.port
const app = express()

app.use(cors())
app.use(checkUser)
app.use(checkClient)

app.use('/clients/', bodyParser.json(), graphqlExpress({ schema: ClientSchema }))
app.use('/users/', bodyParser.json(), graphqlExpress(req => ({ schema: UserSchema, context: { user: req.user } })))

app.listen(PORT)
