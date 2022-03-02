import PropTypes from 'prop-types'

function Education({ education }) {
  return (
    <div>
      {education.name}
      {' '}
      -
      {education.year}
    </div>
  )
}
Education.propTypes = {
  education: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
}
export default Education
