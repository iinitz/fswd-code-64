import { composeWithMongoose } from 'graphql-compose-mongoose'
import { model, Schema } from 'mongoose'

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    index: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    default: null,
  },
  // createdAt: {
  //   type: Date,
  // },
  // updatedAt: {
  //   type: Date,
  // },
}, {
  timestamps: true,
})
export const UserModel = model('User', UserSchema)

export const UserTC = composeWithMongoose(UserModel)
