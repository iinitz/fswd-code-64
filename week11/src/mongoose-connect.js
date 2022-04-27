import mongoose from 'mongoose'

// const uri = 'mongodb+srv://cluster0.ypfuc.mongodb.net' // mongodb://localhost:27017
// const options = {
//   dbName: 'fswd64',
//   user: 'iinitz',
//   pass: 'XZFzzMs6xbC3QEwa',
// }
const uri = process.env.MONGO_HOST
const options = {
  dbName: process.env.MONGO_DB,
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASS,
}

export default mongoose.connect(uri, options)
