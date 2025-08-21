import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import FooterInfo from "../component/home/FooterInfo";

const LayoutFooter = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex relative">
      <Header />
      <Outlet />
      <footer className="absolute bottom-0 left-1/2 -translate-x-1/2 flex">
        <FooterInfo
          linking="/what_we_do"
          title="What We Do"
          content="Quienes somos, que hacemos, nuestros servicios, nuestros objetivos. "
        />
        <span className="h-full w-[1px] bg-white opacity-80"></span>
        <FooterInfo
          linking="/technology"
          title="Technologies"
          content="En TecnóPolis.Ai utilizamos cuatro tipos de tecnologías de Inteligencia Artificial (IA). "
        />
        <span className="h-full w-[1px] bg-white opacity-80"></span>
        <FooterInfo
          linking="/blog"
          title="Blog"
          content="Publicaciones de artículos recientes sobre las áreas de IA, con temas de interés y actualidad. "
        />
      </footer>
    </div>
  );
};

export default LayoutFooter;
