import { Profile } from './Profile'
import data from './data.json'

const App = () => {
  return (
    <>
      <h3>FsWD Students</h3>
      {data.map((student) => (
        // <Profile key={student.studentId} {...student} />
        <Profile
          key={student.studentId}
          student={student}
          // studentId={student.studentId}
          // name={student.name}
          // githubUsername={student.githubUsername}
        />
      ))}
    </>
  );
}

export default App;
