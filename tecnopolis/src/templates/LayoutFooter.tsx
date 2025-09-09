import { Outlet, Link } from "react-router-dom";
import Header from "../component/Header";
import FooterInfo from "../component/home/FooterInfo";
import { useLanguage } from "../component/LanguageContext";

const LayoutFooter = () => {
  const { t } = useLanguage();

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
              titleKey="whatWeDo"
              contentKey="whatWeDoContent"
            />

            <FooterInfo
              linking="/technology"
              titleKey="technologies"
              contentKey="technologiesContent"
            />

            <FooterInfo
              linking="/blog"
              titleKey="blog"
              contentKey="blogContent"
            />
          </div>

          {/* Mobile layout: 1 sola caja con títulos clicables */}
          <div className="md:hidden bg-black py-4 px-6">
            <div className="mb-1">
              <Link
                to="/what_we_do"
                className="block text-lg font-sans text-white hover:text-orange-500"
              >
                {t('whatWeDo')}
              </Link>
            </div>
            <div className="mb-1">
              <Link
                to="/technology"
                className="block text-lg font-sans text-white hover:text-orange-500"
              >
                {t('technologies')}
              </Link>
            </div>
            <div>
              <Link
                to="/blog"
                className="block text-lg font-sans text-white hover:text-orange-500"
              >
                {t('blog')}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LayoutFooter;