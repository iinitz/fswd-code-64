import mongoose from 'mongoose'

const uri = 'mongodb+srv://cluster0.ypfuc.mongodb.net' // mongodb://localhost:27017
const options = {
  dbName: 'fswd64',
  user: 'iinitz',
  pass: 'XZFzzMs6xbC3QEwa',
}

export default mongoose.connect(uri, options)
