import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Education from './Education'

function Profile({ name, educations }) {
  return (
    <>
      <div>
        Name:
        {' '}
        {name}
      </div>
      {educations.length > 0 && (
        <div>
          Educations:
          {educations.map((education) => (
            <Education education={education} />
          ))}
        </div>
      )}
      <Link to="/">back to home (Link)</Link>
      <br />
      <a href="/">back to home (a)</a>
    </>
  )
}
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  educations: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    year: PropTypes.number,
  })),
}
Profile.defaultProps = {
  educations: [],
}
export default Profile
