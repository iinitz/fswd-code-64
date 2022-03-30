import { PostTC } from '../../models/post'
import { UserTC } from '../../models/user'

UserTC.addRelation(
  'posts',
  {
    resolver: PostTC.getResolver('findMany'),
    projection: { _id: 1 },
    prepareArgs: {
      filter: (user) => ({
        authorId: user._id,
      }),
    },
  },
)
UserTC.addFields({
  fullname: {
    type: 'String',
    projection: { firstname: 1, lastname: 1 },
    resolve: (user) => `${user.firstname} ${user.lastname}`,
  },
})
