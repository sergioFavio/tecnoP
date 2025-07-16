import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Layout from "./templates/Layout"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
