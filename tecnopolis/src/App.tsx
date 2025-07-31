import { HashRouter, Route, Routes } from "react-router-dom"
import Layout from "./templates/Layout"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import ServicesPage from "./pages/ServicesPage"

function App() {
  

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
