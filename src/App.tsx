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
import Blog from './pages/subpages/Blog/blog'
import BlogBeneficiosB1 from './pages/subpages/Blog/Beneficios/B1'
import BlogBeneficiosB2 from './pages/subpages/Blog/Beneficios/B2'
import BlogReclutamientoR1 from './pages/subpages/Blog/Reclutamiento/R1'
import BlogReclutamientoR2 from './pages/subpages/Blog/Reclutamiento/R2'
import BlogReclutamientoR3 from './pages/subpages/Blog/Reclutamiento/R3'
import BlogValesV1 from './pages/subpages/Blog/Vales/V1'
import BlogValesV2 from './pages/subpages/Blog/Vales/V2'
import BlogValesDigitales from './pages/subpages/Blog/Nomina/N1'
import BlogNominaN2 from './pages/subpages/Blog/Nomina/N2'
// Components
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
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
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/beneficios/seguros-vida-corporativos' element={<BlogBeneficiosB1 />} />
        <Route path='/blog/beneficios/seguro-vida-retencion-talento' element={<BlogBeneficiosB2 />} />
        <Route path='/blog/reclutamiento/estrategias-efectivas-mexico' element={<BlogReclutamientoR1 />} />
        <Route path='/blog/reclutamiento/seleccion-candidato-ideal' element={<BlogReclutamientoR2 />} />
        <Route path='/blog/reclutamiento/tendencias-digitales-2025' element={<BlogReclutamientoR3 />} />
        <Route path='/blog/vales/vales-incentivo-guia-legal' element={<BlogValesV1 />} />
        <Route path='/blog/vales/bonos-incentivos-con-vales' element={<BlogValesV2 />} />
        <Route path='/blog/vales/vales-digitales-futuro' element={<BlogValesDigitales />} />
        <Route path='/blog/nomina/tendencias-maquila-2025' element={<BlogNominaN2 />} />
      </Routes>
      <WhatsAppFloatingButton />
    </>
  )
}

export default App
