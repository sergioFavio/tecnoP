import Robot from "../asset/robot.png"
import Triangulo from "../asset/triangulo.png"
import FooterInfo from '../component/FooterInfo'

const HomePage = () => {
  return (
    <>
        <div className="w-full h-full flex items-center justify-center p-20">
            <h1 className="text-white text-[56px] leading-snug">IA para cada desafío, solución para cada necesidad</h1>
          </div>
          <div className="w-full h-full">
            <div className="relative h-[100%] w-fit flex items-center justify-center isolate">
              <img src={Triangulo} className="absolute w-[100%] h-auto mb-28 ml-28"/>
              <img src={Robot} className="h-full w-auto z-10"/>
            </div> 
          </div>
          <footer className="absolute bottom-0 left-1/2 -translate-x-1/2 flex">
            <FooterInfo title="What we Do" content="we do all likd if tecjjjlklkkljust test and see how we rool here at mmekut tech house "/>
            <FooterInfo title="Our Vision" content="we do all likd if tecjjjlklkkljust test and see how we rool here at mmekut tech house "/>
            <FooterInfo title="Contact Us" content="we do all likd if tecjjjlklkkljust test and see how we rool here at mmekut tech house "/>
          </footer>
    </>
  )
}

export default HomePage