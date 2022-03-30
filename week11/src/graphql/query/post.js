// import { schemaComposer } from 'graphql-compose'

import { PostTC } from '../../models/post'

export const posts = PostTC.getResolver('findMany')
export const postId = PostTC.getResolver('findById')
export const postPagination = PostTC.getResolver('pagination')
// export const relatedPosts = schemaComposer.createResolver({
//   name: 'relatedPosts',
//   kind: 'query',
//   type: PostTC.getResolver('findMany').getType(),
//   args: PostTC.getResolver('findMany').getArgType(),
//   resolve: async ({ args }) => {

//     return []
//   },
// })
