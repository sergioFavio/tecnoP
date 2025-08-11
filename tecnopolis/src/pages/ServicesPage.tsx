import ServiceBox from "../component/services/ServiceBox"
import styles from "./ServicesPage.module.css"

const ServicesPage = () => {
  return (
    <div className="text-white flex items-center justify-center h-full w-full">
        <div className="scale-[.80]">
            <div className={styles.grilla}>
                <ServiceBox titulo="Consultoría" descripcion="En TecnóPolis.Ai llevamos a cabo consultoría y desarrollo de ..." fondo={[255,0,0]}/>
                <ServiceBox titulo="Asistentes Virtuales" descripcion="Desarrollo e implementación de asistentes virtuales inteligentes,..." fondo={[0,255,0]} letraColor/>
                <ServiceBox titulo="Procesamiento de imágenes" descripcion="Detección y/o clasificación de objetos, mediante el procesa..." fondo={[0,0,255]}/>
                <ServiceBox titulo="Procesamiento de Lenguaje Natural" descripcion="Análisis de sentimientos y emociones, mediante el ..." fondo={[255,255,0]} letraColor/>
                <ServiceBox titulo="Agricultura" descripcion="Detección y Clasificación de enfermedades y plagas mediante..." fondo={[255,0,255]}/>
                <ServiceBox titulo="Salud" descripcion="Desarrollo de aplicaciones IA para las áreas de Psiquiatría y Nutrición..." fondo={[0,255,255]} letraColor/>
                <ServiceBox titulo="Seminarios" descripcion="Realización de Seminarios de alguna tématica en particular de IA..." fondo={[217, 160, 24]}/>
                <ServiceBox titulo="titulo1" descripcion="descripción" fondo={[27, 24, 217]}/>
                <ServiceBox titulo="titulo1" descripcion="descripción" fondo={[130, 130, 255]} letraColor/>
                
            </div>
        </div>
    </div>
  )
}

export default ServicesPage