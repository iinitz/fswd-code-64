const UserDetail = ({ user }) => {
  return (
    <h2>User Id: {user?.id}</h2>
  )
}
export const getStaticPaths = () => {
  return {
    paths: [
      { params: { userId: '1001' } },
      { params: { userId: '1002' } },
      { params: { userId: '1003' } },
      { params: { userId: '1004' } },
      { params: { userId: '1005' } },
    ],
    fallback: true,
  }
}
export const getStaticProps = (context) => {
  return {
    props: {
      user: {
        id: context.params.userId,
      }
    },
    revalidate: 5,
  }
}

export default UserDetail
