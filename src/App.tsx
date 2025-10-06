import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Homepage'
import Nominas from './pages/subpages/Nominas'
import Login from './pages/subpages/Login'
import Recclutamiento from './pages/subpages/Recutamiento'
import Vale from './pages/subpages/Vales'
import Beneficios from './pages/subpages/Beneficios'
import Nom35 from './pages/subpages/Nom35'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nominas" element={<Nominas />} />
        <Route path="/login" element={<Login />} />
        <Route path='/reclutamiento' element={<Recclutamiento />} />
        <Route path='/vales' element={<Vale />} />
        <Route path='/beneficios' element={<Beneficios />} />
        <Route path='/nom35' element={<Nom35 />} />
      </Routes>
    </>
  )
}

export default App
