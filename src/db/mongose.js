// @flow
const mongoose = require('mongoose')
const config = require('./../config/master')

const uri: string = config.server.db.uri

module.exports = mongoose.connect(uri)
