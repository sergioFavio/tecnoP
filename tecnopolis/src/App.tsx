import { HashRouter, Route, Routes } from "react-router-dom"
import Layout from "./templates/Layout"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import ServicesPage from "./pages/ServicesPage"

import ProductsPage from "./pages/ProductsPage"
import WhatWeDoPage from "./pages/WhatWeDoPage"
import TechnologyPage from "./pages/TechnologyPage"

function App() {
  

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>

        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>

         <Route path="/what_we_do" element={<WhatWeDoPage/>}/>
        <Route path="/technology" element={<TechnologyPage/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
