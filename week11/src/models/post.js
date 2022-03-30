import { composeWithMongoose } from 'graphql-compose-mongoose'
import { model, Schema } from 'mongoose'

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: '',
  },
})
export const PostModel = model('Post', PostSchema)

export const PostTC = composeWithMongoose(PostModel)
