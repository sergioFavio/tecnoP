import Robot from "../asset/robot.png"
import Triangulo from "../asset/triangulo.png"


const HomePage = () => {
  

  return (
    <>
        
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
          </>
       
        
    </>
  )
}

export default HomePage