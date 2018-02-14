import mongoose from 'mongoose'

const Schema = mongoose.Schema

const HistorySchema = new Schema({
  actor: String,
  action: String,
  timestamp: String
})

const history = mongoose.model('history', HistorySchema)

export default history
