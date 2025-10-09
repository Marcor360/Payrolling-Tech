import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Homepage'
import Nominas from './pages/subpages/Nominas'
import Login from './pages/subpages/Login'
import Recclutamiento from './pages/subpages/Recutamiento'
import Vale from './pages/subpages/Vales'
import Beneficios from './pages/subpages/Beneficios'
import Nom35 from './pages/subpages/Nom35'
import ValesDespensa from './pages/subpages/ValesDespensa'
import ValesGasolina from './pages/subpages/ValesGasolina'
import ValesGastos from './pages/subpages/ValesGastos'
import ValesInsentivos from './pages/subpages/ValesInsentivos'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import FlowiseChatbot from './components/chatbot'

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
        <Route path='/vales-despensa' element={<ValesDespensa />} />
        <Route path='/vales-gasolina' element={<ValesGasolina />} />
        <Route path='/vales-gastos' element={<ValesGastos />} />
        <Route path='/vales-incentivos' element={<ValesInsentivos />} />
      </Routes>
      <WhatsAppFloatingButton />
      <FlowiseChatbot />
    </>
  )
}

export default App
