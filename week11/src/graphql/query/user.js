import { UserTC } from '../../models/user'

export const users = UserTC.getResolver('findMany')
export const userId = UserTC.getResolver('findById')
