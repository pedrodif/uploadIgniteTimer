// Packages
import { Routes, Route } from 'react-router-dom'

// Component
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
