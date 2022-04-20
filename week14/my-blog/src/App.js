import { gql, useQuery } from '@apollo/client';

import './App.css';
import { CreatePost } from './components/CreatePost';
import { Posts } from './components/Posts'

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
    <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <Posts posts={data.posts} refetch={refetch} />
      <CreatePost refetch={refetch} />
    </main>
  );
}

export default App;
