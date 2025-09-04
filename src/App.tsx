import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Homepage'
import Nominas from './pages/subpages/Nominas'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nominas" element={<Nominas />} />
      </Routes>
    </>
  )
}

export default App
