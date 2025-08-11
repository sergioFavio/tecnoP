import { Link } from "react-router-dom"
import Logo from "../asset/logo_tecnopolis_02.png"

const Header = () => {
  return (
    <header className=" text-white z-20 h-20 flex items-center justify-between px-12 absolute top-0 left-0 w-full">
        <img src={Logo} className="h-16 w-auto"/>
        <div className="flex gap-8">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </header>
  )
}

export default Header