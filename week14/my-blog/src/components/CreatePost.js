import { gql, useMutation, useQuery } from "@apollo/client"
import { useCallback, useState } from "react"

const USERS_QUERY = gql`
query {
  users {
    _id
    fullname
  }
}
`

const CREATE_POST_MUTATION = gql`
mutation ($record: CreateOnePostInput!) {
  createPost (record: $record) {
    recordId
  }
}
`

export const CreatePost = ({ refetch }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [authorId, setAuthorId] = useState('')
  const { data } = useQuery(USERS_QUERY)
  const [createPostMutation] = useMutation(CREATE_POST_MUTATION)
  const handleCreatePost = useCallback(
    async (e) => {
      e.preventDefault()
      try {
        await createPostMutation({
          variables: {
            record: {
              title,
              content,
              authorId,
            },
          },
        })
        setTitle('')
        setContent('')
        setAuthorId('')
        refetch({ postLimit: 4 })
      } catch (err) {
        console.error(err)
      }
    },
    [authorId, content, createPostMutation, refetch, title],
  )
  return (
    <section>
      <h4>Create post</h4>
      <form onSubmit={handleCreatePost}>
        <div>
          Title: <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          Content: <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <div>
          {/* AuthorId: <input value={authorId} onChange={(e) => setAuthorId(e.target.value)} /> */}
          Author: <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
            {data?.users?.map((user) => (
              <option key={user._id} value={user._id}>{user.fullname}</option>
            ))}
          </select>
        </div>
        <button type="submit">Create</button>
      </form>
    </section>
  )
}
