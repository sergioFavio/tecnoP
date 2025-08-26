import Robot from "../asset/robot.png"
import Triangulo from "../asset/triangulo.png"

const HomePage = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center p-4 md:p-20">
        <h1 className="text-white text-2xl md:text-4xl lg:text-[56px] leading-tight md:leading-snug text-center">
          {/*IA para cada desafío, solución para cada necesidad*/}
          AI for every challenge, a solution for every need
          </h1>
      </div>
      <div className="w-full h-auto md:h-full flex justify-center">
        <div className="relative h-auto md:h-full w-full max-w-4xl flex items-center justify-center isolate">
          <img src={Triangulo} className="absolute w-3/4 md:w-full h-auto mb-12 md:mb-28 ml-0 md:ml-28 max-w-md md:max-w-none"/>
          <img src={Robot} className="h-64 md:h-full w-auto z-10 max-h-96 md:max-h-none"/>
        </div> 
      </div>
    </>
  )
}

export default HomePage