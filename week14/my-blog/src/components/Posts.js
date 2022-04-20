export const Posts = ({ posts, refetch }) => (
  <section>
    <h4>
      Posts&nbsp;
      <button type="button" onClick={() => refetch({ postLimit: 4 })}>Refetch posts</button>
    </h4>
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h5>{post.title}</h5>
          <p>{post.content}</p>
          <p>{post.author.fullname}</p>
        </div>
      ))}
    </div>
  </section>
)
