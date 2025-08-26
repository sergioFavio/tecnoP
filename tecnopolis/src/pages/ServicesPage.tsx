import React from 'react';
import { Link } from "react-router-dom";

const ServicesPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full bg-transparent">
      <div className="grid grid-cols-3 gap-6 p-4">
        {/* Slide In Up */}
        <Link to="/card_service?title=Detección y Análisis de Imágenes&info=Análisis médico: Se aplica en la medicina para el análisis de radiografías y resonancias magnéticas. Se debe destacar la precisión y la velocidad con la que esta tecnología puede procesar grandes volúmenes de imágenes. Diagnóstico por imágenes, detección de anomalías en radiografías." className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-white shadow-md rounded-lg animate-slide-in-up hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">Detección y Análisis de Imágenes</span>
        </Link>
        
        {/* Slide In Left */}
        <Link to="/card_service?title=Procesamiento de Lenguaje Natural (NLP)&info=Análisis de sentimientos: Monitoreo de redes sociales, feedback de clientes
\nExtracción de información: Procesamiento de documentos, análisis de contratos
\nClasificación de texto: Categorización automática de emails, documentos
\nDetección de emociones: Análisis del estado emocional en conversaciones" className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-orange-400 shadow-md rounded-lg animate-slide-in-left hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">Procesamiento de Lenguaje Natural (NLP)</span>
        </Link>
        
        {/* Slide In Right */}
        <Link to="/card_service?title=Slide In Right" className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-green-400 shadow-md rounded-lg animate-slide-in-right hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">Slide In Right</span>
        </Link>
        
        {/* Slide Out Down */}
        <Link to="/card_service?title=Slide Out Down" className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-amber-300 shadow-md rounded-lg animate-slide-out-down hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">Slide Out Down</span>
        </Link>
        
        {/* Slide Out Up */}
        <Link to="/card_service?title=Capacitación" className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-lime-400 shadow-md rounded-lg animate-slide-out-up hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">Capacitación</span>
        </Link>
        
        {/* Slide Out Left */}
        <Link to="/card_service?title=Análisis de Emociones&info=El análisis de emociones es una técnica de inteligencia artificial que permite identificar y clasificar las emociones humanas expresadas en datos como texto, audio, imágenes o video, utilizando modelos de procesamiento del lenguaje natural y aprendizaje automático. Esta herramienta se aplica en diversos campos como el marketing, la atención al cliente, la salud mental, la educación, los recursos humanos y la seguridad, ayudando a comprender mejor las reacciones emocionales de las personas y a tomar decisiones más informadas y empáticas en contextos digitales y sociales." className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-orange-400 shadow-md rounded-lg animate-slide-out-left hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">Análisis de Emociones</span>
        </Link>
        
        {/* Slide Out Right */}
        <Link to="/card_service?title=Consultoría" className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-sky-400 shadow-md rounded-lg animate-slide-out-right hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">Consultoría</span>
        </Link>
        
        {/* Slide Down */}
        <Link to="/card_service?title=Anáilis de Sentimientos&info=El análisis de sentimientos es una técnica de procesamiento de lenguaje natural que permite identificar, extraer y clasificar las emociones expresadas en un texto, como opiniones positivas, negativas o neutras. Se utiliza ampliamente en áreas como el marketing, la atención al cliente y la política para entender cómo se sienten los usuarios o consumidores respecto a productos, servicios, marcas o temas específicos. Por ejemplo, una empresa puede aplicar análisis de sentimientos a comentarios en redes sociales para evaluar la percepción pública de una campaña, o un partido político puede analizar opiniones en Twitter para ajustar su estrategia comunicacional." className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-fuchsia-500 shadow-md rounded-lg animate-slide-down hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">Anáilis de Sentimientos</span>
        </Link>
        
        {/* Slide Up */}
        <Link to="/card_service?title=Sistema de Recomendación&info=Un sistema de recomendación es una herramienta que utiliza algoritmos para sugerir productos, servicios o contenidos personalizados a los usuarios, basándose en sus preferencias, comportamientos anteriores o similitudes con otros usuarios. Su objetivo principal es facilitar la toma de decisiones y mejorar la experiencia del usuario, al mismo tiempo que ayuda a las empresas a aumentar la retención, las ventas y la satisfacción del cliente." className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-red-600 shadow-md rounded-lg animate-slide-up hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">Sistema de Recomendación</span>
        </Link>
      </div>
      
      <style>{`
        @keyframes slide-in-down {
          0% {
            visibility: visible;
            transform: translate3d(0, -100%, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes slide-in-up {
          0% {
            visibility: visible;
            transform: translate3d(0, 100%, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes slide-in-left {
          0% {
            visibility: visible;
            transform: translate3d(-100%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes slide-in-right {
          0% {
            visibility: visible;
            transform: translate3d(100%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes slide-out-down {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            visibility: hidden;
            transform: translate3d(0, 100%, 0);
          }
        }
        
        @keyframes slide-out-up {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            visibility: hidden;
            transform: translate3d(0, -100%, 0);
          }
        }
        
        @keyframes slide-out-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            visibility: hidden;
            transform: translate3d(-100%, 0, 0);
          }
        }
        
        @keyframes slide-out-right {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            visibility: hidden;
            transform: translate3d(100%, 0, 0);
          }
        }
        
        @keyframes slide-down {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, 100%, 0);
          }
        }
        
        @keyframes slide-up {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, -100%, 0);
          }
        }
        
        @keyframes slide-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }
        
        @keyframes slide-right {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(100%, 0, 0);
          }
        }
        
        .animate-slide-in-down {
          animation: slide-in-down 3s ease-in-out infinite;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 3s ease-in-out infinite;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 3s ease-in-out infinite;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 3s ease-in-out infinite;
        }
        
        .animate-slide-out-down {
          animation: slide-out-down 3s ease-in-out infinite;
        }
        
        .animate-slide-out-up {
          animation: slide-out-up 3s ease-in-out infinite;
        }
        
        .animate-slide-out-left {
          animation: slide-out-left 3s ease-in-out infinite;
        }
        
        .animate-slide-out-right {
          animation: slide-out-right 3s ease-in-out infinite;
        }
        
        .animate-slide-down {
          animation: slide-down 3s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 3s ease-in-out infinite;
        }
        
        .animate-slide-left {
          animation: slide-left 3s ease-in-out infinite;
        }
        
        .animate-slide-right {
          animation: slide-right 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;