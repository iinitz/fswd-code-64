// import { AuthenticationError, UserInputError } from 'apollo-server-core'
import { schemaComposer } from 'graphql-compose'

import { checkPassword } from '../../lib/checkPassword'
import { generateUserToken } from '../../lib/generateUserToken'
import { UserModel, UserTC } from '../../models/user'

export const createUser = UserTC.getResolver('createOne')
const LoginPayloadOTC = schemaComposer.createObjectTC({
  name: 'LoginPayload',
  fields: {
    status: 'String!',
    message: 'String',
    token: 'String',
  },
})
export const login = schemaComposer.createResolver({
  name: 'login',
  kind: 'mutation',
  type: LoginPayloadOTC,
  args: {
    username: 'String!',
    password: 'String!',
  },
  resolve: async ({ args }) => {
    const { username, password } = args
    const user = await UserModel.findOne({ username: username.toLowerCase() })
    if (!user) {
      // throw new UserInputError('Username not found')
      return {
        status: 'failed',
        message: 'Username not found',
        token: null,
      }
    }
    const validPassword = checkPassword(user.password, password)
    if (!validPassword) {
      // throw new AuthenticationError('Password incorrect')
      return {
        status: 'failed',
        message: 'Password incorrect',
        token: null,
      }
    }
    const token = generateUserToken(user)
    return {
      status: 'success',
      message: 'Login success',
      token,
    }
  },
})
