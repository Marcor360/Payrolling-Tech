import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Homepage'
import Nominas from './pages/subpages/Nominas'
import Login from './pages/subpages/Login'
import Recclutamiento from './pages/subpages/Recutamiento'
import Vale from './pages/subpages/Vales'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nominas" element={<Nominas />} />
        <Route path="/login" element={<Login />} />
        <Route path='/reclutamiento' element={<Recclutamiento />} />
        <Route path='/vales' element={<Vale />} />
      </Routes>
    </>
  )
}

export default App
