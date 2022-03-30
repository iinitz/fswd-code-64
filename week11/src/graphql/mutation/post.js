import { PostTC } from '../../models/post'

export const createPost = PostTC.getResolver('createOne')
export const updatePostId = PostTC.getResolver('updateById')
export const deletePostId = PostTC.getResolver('removeById')
