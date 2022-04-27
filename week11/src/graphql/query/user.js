import { UserInputError } from 'apollo-server-core'
import { schemaComposer } from 'graphql-compose'

import { UserModel, UserTC } from '../../models/user'

export const users = UserTC.getResolver('findMany')
export const userId = UserTC.getResolver('findById')

export const me = schemaComposer.createResolver({
  name: 'me',
  kind: 'query',
  type: UserTC.getType(),
  resolve: async ({ context }) => {
    const { userId: _id } = context
    if (!_id) {
      throw new UserInputError('User ID not found in token')
    }
    const user = await UserModel.findById(_id)
    return user
  },
})
