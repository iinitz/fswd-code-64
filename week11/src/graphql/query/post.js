import { PostTC } from '../../models/post'

export const posts = PostTC.getResolver('findMany')
export const postId = PostTC.getResolver('findById')
export const postPagination = PostTC.getResolver('pagination')
