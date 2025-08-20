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
          content="we do all likd if tecjjjlklkkljust test and see how we rool here at mmekut tech house "
        />
        <span className="h-full w-[1px] bg-white opacity-80"></span>
        <FooterInfo
          linking="/technology"
          title="Technologies"
          content="we do all likd if tecjjjlklkkljust test and see how we rool here at mmekut tech house "
        />
        <span className="h-full w-[1px] bg-white opacity-80"></span>
        <FooterInfo
          linking="/blog"
          title="Blog"
          content="we do all likd if tecjjjlklkkljust test and see how we rool here at mmekut tech house "
        />
      </footer>
    </div>
  );
};

export default LayoutFooter;
