import { lazy, Suspense } from 'react'
import {
  Routes, Route, Outlet, Navigate,
} from 'react-router-dom'

// import Profile from './components/Profile'
const Profile = lazy(() => import('./components/Profile'))

function App() {
  return (
    <Suspense fallback="Loading">
      <Routes>
        <Route path="profile" element={<Outlet />}>
          <Route path="new" element={<div>Create new profile</div>} />
          <Route path="" element={<Profile name="Alice" />} />
        </Route>
        <Route path="profile/create" element={<div>Create new profile</div>} />
        <Route path="404" element={<div>404: Not found</div>} />
        <Route path="/" element={<div>Home</div>} />
        <Route path="*" element={<Navigate to="404" />} />
      </Routes>
    </Suspense>
  )
}

export default App
