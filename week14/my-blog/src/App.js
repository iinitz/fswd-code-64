import { gql, useQuery } from '@apollo/client';

import './App.css';

const POSTS_QUERY = gql`
query ($postLimit: Int) {
  posts (limit: $postLimit) {
    _id
    title
    content
    author {
      _id
      fullname
    }
  }
}
`

const App = () => {
  const { loading, error, data, refetch } = useQuery(
    POSTS_QUERY,
    {
      variables: {
        postLimit: 4,
      },
      // fetchPolicy: 'no-cache',
      // pollInterval: 1000,
    },
  )
  if (loading) {
    return <h4>Loading ...</h4>
  }
  if (error) {
    return <h4>Error: {error.message}</h4>
  }
  return (
    <div>
      <h4>Posts</h4>
      <div>
        {data.posts.map((post) => (
          <div key={post._id}>
            <h5>{post.title}</h5>
            <p>{post.content}</p>
            <p>{post.author.fullname}</p>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => refetch({ postLimit: 4 })}>Refetch posts</button>
    </div>
  );
}

export default App;
