import ServiceBox from "../component/services/ServiceBox"
import styles from "./ServicesPage.module.css"

const ServicesPage = () => {
  return (
    <div className="text-white flex items-center justify-center h-full w-full">
        <div className="scale-[.80]">
            <div className={styles.grilla}>
                <ServiceBox titulo="titulo1" descripcion="descripción" fondo={[255,0,0]}/>
                <ServiceBox titulo="titulo1" descripcion="descripción" fondo={[0,255,0]} letraColor/>
                <ServiceBox titulo="titulo1" descripcion="descripción" fondo={[0,0,255]}/>
                <ServiceBox titulo="titulo1" descripcion="descripción" fondo={[255,255,0]} letraColor/>
                <ServiceBox titulo="titulo1" descripcion="descripción" fondo={[255,0,255]}/>
                <ServiceBox titulo="titulo1" descripcion="descripción" fondo={[0,255,255]} letraColor/>
                <ServiceBox titulo="titulo1" descripcion="descripción" fondo={[217, 160, 24]}/>
                <ServiceBox titulo="titulo1" descripcion="descripción" fondo={[27, 24, 217]}/>
                <ServiceBox titulo="titulo1" descripcion="descripción" fondo={[130, 130, 255]} letraColor/>
                
            </div>
        </div>
    </div>
  )
}

export default ServicesPage