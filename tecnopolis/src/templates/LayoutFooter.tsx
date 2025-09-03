import { Outlet, Link } from "react-router-dom";
import Header from "../component/Header";
import FooterInfo from "../component/home/FooterInfo";

const LayoutFooter = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex relative">
      <Header />
      <Outlet />

      <footer className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
        {/* Contenedor centrado y con ancho máximo para desktop */}
        <div className="mx-auto max-w-7xl w-full px-4">
          {/* Desktop layout: 3 cajas centradas */}
          <div className="hidden md:flex md:justify-center md:items-stretch md:gap-0.5">
            <FooterInfo
              linking="/what_we_do"
              title="What We Do"
              content="Quienes somos, que hacemos, nuestros servicios, nuestros objetivos. "
            />

            
            <FooterInfo
              linking="/technology"
              title="Technologies"
              content="En Tecnópolis.Ai utilizamos cuatro tipos de tecnologías de Inteligencia Artificial (IA). "
            />

        

            <FooterInfo
              linking="/blog"
              title="Blog"
              content="Publicaciones de artículos recientes sobre las áreas de IA, con temas de interés y actualidad. "
            />
          </div>

          {/* Mobile layout: 1 sola caja con títulos clicables */}
          <div className="md:hidden bg-white border-t border-gray-300 py-4 px-6">
            <div className="mb-2">
              <Link
                to="/what_we_do"
                className="block text-lg font-semibold text-gray-800 hover:text-blue-600"
              >
                What We Do
              </Link>
            </div>
            <div className="mb-2">
              <Link
                to="/technology"
                className="block text-lg font-semibold text-gray-800 hover:text-blue-600"
              >
                Technologies
              </Link>
            </div>
            <div>
              <Link
                to="/blog"
                className="block text-lg font-semibold text-gray-800 hover:text-blue-600"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LayoutFooter;
