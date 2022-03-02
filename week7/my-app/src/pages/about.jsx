const About = ({ timestamp }) => {
  return (
    <>
      <h2>About page</h2>
      <h5>{timestamp}</h5>
    </>
  )
}
export const getStaticProps = () => {
  const timestamp = (new Date()).toUTCString()
  return {
    props: {
      timestamp,
    },
    revalidate: 10,
  }
}
// export const getServerSideProps = () => {
//   const timestamp = (new Date()).toUTCString()
//   return {
//     props: {
//       timestamp,
//     }
//   }
// }

export default About
