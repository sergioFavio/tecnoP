import { Link, NavLink } from "react-router-dom"
import Logo from "../asset/logo_tecnopolis_02.png"

const Header = () => {
  return (
    <header className=" text-white z-20 h-20 flex items-center justify-between px-12 absolute top-0 left-0 w-full">
        <Link to="/"><img src={Logo} className="h-16 w-auto"/></Link>
        <div className="flex gap-8">
            <NavLink to="/" className={({isActive})=>isActive?'underline text-orange-500':''}>Home</NavLink>
            <NavLink to="/products" className={({isActive})=>isActive?'underline text-orange-500':''}>Products</NavLink>
            <NavLink to="/services" className={({isActive})=>isActive?'underline text-orange-500':''}>Services</NavLink>
            <NavLink to="/contact" className={({isActive})=>isActive?'underline text-orange-500':''}>Contact</NavLink>
        </div>
    </header>
  )
}

export default Header