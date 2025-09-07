import { Link, NavLink } from "react-router-dom"
import Logo from "../asset/logo_tecnopolis_02.png"
import { useState } from "react"
import { useLanguage } from "../component/LanguageContext"

// Importar imágenes de banderas en formato PNG
import UsFlag from "../asset/flags/us.png"
import BrFlag from "../asset/flags/br.png"
import EsFlag from "../asset/flags/es.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const { currentLanguage, setCurrentLanguage, t } = useLanguage()

  // Configuración de banderas e idiomas
  const languages = [
    { code: "en" as const, name: "English", flag: UsFlag },
    { code: "pt" as const, name: "Português", flag: BrFlag },
    { code: "es" as const, name: "Español", flag: EsFlag }
  ]

  const handleLanguageChange = (langCode: "es" | "en" | "pt") => {
    setCurrentLanguage(langCode)
    setIsLanguageMenuOpen(false)
    setIsMenuOpen(false) // Cerrar el menú móvil al cambiar idioma
  }

  return (
    <header className="text-white z-20 h-16 md:h-20 flex items-center justify-between px-4 md:px-12 absolute top-0 left-0 w-full">
      <Link to="/"><img src={Logo} className="h-10 md:h-16 w-auto" alt="TecnóPolis.Ai Logo"/></Link>
      
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>

        {/* Menú de navegación - Versión escritorio */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink 
            to="/" 
            className={({isActive}) => `${isActive ? 'underline text-orange-500' : ''}`}
          >
            {t('home')}
          </NavLink>
          <NavLink 
            to="/products" 
            className={({isActive}) => `${isActive ? 'underline text-orange-500' : ''}`}
          >
            {t('products')}
          </NavLink>
          <NavLink 
            to="/services" 
            className={({isActive}) => `${isActive ? 'underline text-orange-500' : ''}`}
          >
            {t('services')}
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => `${isActive ? 'underline text-orange-500' : ''}`}
          >
            {t('contact')}
          </NavLink>
          
          {/* Selector de idiomas - Versión escritorio */}
          <div className="relative">
            <button 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              aria-label="Seleccionar idioma"
            >
              <img 
                src={languages.find(lang => lang.code === currentLanguage)?.flag} 
                alt="Idioma actual" 
                className="w-6 h-6 rounded-sm object-cover"
              />
            </button>

            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-30">
                {languages.filter(lang => lang.code !== currentLanguage).map(lang => (
                  <button
                    key={lang.code}
                    className="flex items-center gap-3 w-full px-4 py-2 text-left hover:bg-gray-800 transition-colors"
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    <img src={lang.flag} alt={lang.name} className="w-5 h-5 rounded-sm object-cover" />
                    <span className="text-sm">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Menú de navegación - Versión móvil */}
        <nav className={`fixed md:hidden top-16 left-0 w-full bg-black flex flex-col gap-4 p-4 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <NavLink 
            to="/" 
            className={({isActive}) => `py-2 ${isActive ? 'underline text-orange-500' : ''}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            {t('home')}
          </NavLink>
          <NavLink 
            to="/products" 
            className={({isActive}) => `py-2 ${isActive ? 'underline text-orange-500' : ''}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            {t('products')}
          </NavLink>
          <NavLink 
            to="/services" 
            className={({isActive}) => `py-2 ${isActive ? 'underline text-orange-500' : ''}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            {t('services')}
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => `py-2 ${isActive ? 'underline text-orange-500' : ''}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            {t('contact')}
          </NavLink>
          
          {/* Selector de idiomas - Versión móvil */}
          <div className="pt-4 border-t border-gray-700">
            <p className="text-sm text-gray-400 mb-2">{t('selectLanguage')}:</p>
            <div className="flex gap-3">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  className={`flex items-center justify-center p-2 rounded-md transition-colors ${currentLanguage === lang.code ? 'bg-white/20' : 'hover:bg-white/10'}`}
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  <img src={lang.flag} alt={lang.name} className="w-6 h-6 rounded-sm object-cover" />
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header