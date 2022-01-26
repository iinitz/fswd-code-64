// export const Profile = ({ studentId, name, githubUsername }) => (
//   <div style={{ border: '1px solid #ddd', borderRadius: 4, padding: 16, marginBottom: 8 }}>
//     <h4 style={{ marginTop: 0 }}>[{studentId}] {name}</h4>
//     Github: <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">{githubUsername}</a>
//   </div>
// )
export const Profile = ({ student }) => (
  <div style={{ border: '1px solid #ddd', borderRadius: 4, padding: 16, marginBottom: 8 }}>
    <h4 style={{ marginTop: 0 }}>
      [{student.studentId}] {student.name}
    </h4>
    Github: <a href={`https://github.com/${student.githubUsername}`} target="_blank" rel="noreferrer">{student.githubUsername}</a>
  </div>
)
