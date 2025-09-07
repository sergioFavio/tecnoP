import React from 'react';
import { Link } from "react-router-dom";
import { useLanguage } from '../component/LanguageContext';

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex items-center justify-center w-full bg-transparent">
      <div className="grid grid-cols-3 gap-6 p-4">
        {/* Detección y Análisis de Imágenes */}
        <Link 
          to="/services/card_service?title=Detección y análisis de Imágenes&info=AnálisisMédico:Se aplica en la medicina para el análisis de radiografías y resonancias magnéticas." 
          className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-white shadow-md rounded-lg animate-slide-in-up hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
        >
          <span className="text-xs text-center">{t('imageDetection')}</span>
        </Link>
        
        {/* Procesamiento de Lenguaje Natural */}
        <Link 
          to="/services/card_service?title=Procesamiento de Lenguaje Natural&info=Análisis de Sentimientos: Monitoreo de redes sociales, feedback de clientes." 
          className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-orange-400 shadow-md rounded-lg animate-slide-in-left hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
        >
          <span className="text-xs text-center">{t('nlpProcessing')}</span>
        </Link>
        
        {/* Tercer servicio - placeholder */}
        <Link 
          to="/services/card_service?title=Slide In Right" 
          className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-green-400 shadow-md rounded-lg animate-slide-in-right hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
        >
          <span className="text-xs text-center">Slide In Right</span>
        </Link>
        
        {/* Cuarto servicio - placeholder */}
        <Link 
          to="/services/card_service?title=Slide Out Down" 
          className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-amber-300 shadow-md rounded-lg animate-slide-out-down hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
        >
          <span className="text-xs text-center">Slide Out Down</span>
        </Link>
        
        {/* Capacitación */}
        <Link 
          to="/services/card_service?title=Capacitación" 
          className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-lime-400 shadow-md rounded-lg animate-slide-out-up hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
        >
          <span className="text-xs text-center">{t('training')}</span>
        </Link>
        
        {/* Análisis de Emociones */}
        <Link 
          to="/services/card_service?title=Análisis de Emociones&info=El análisis de emociones es una técnica de inteligencia artificial que permite identificar y Clasificar las emociones humanas expresadas en datos." 
          className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-orange-400 shadow-md rounded-lg animate-slide-out-left hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
        >
          <span className="text-xs text-center">{t('emotionAnalysis')}</span>
        </Link>
        
        {/* Consultoría */}
        <Link 
          to="/services/card_service?title=Consultoría" 
          className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-sky-400 shadow-md rounded-lg animate-slide-out-right hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
        >
          <span className="text-xs text-center">{t('consulting')}</span>
        </Link>
        
        {/* Análisis de Sentimientos */}
        <Link 
          to="/services/card_service?title=Análisis de sentimientos&info=El análisis de sentimientos es una técnica de procesamiento."
          className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-fuchsia-500 shadow-md rounded-lg animate-slide-down hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
        >
          <span className="text-xs text-center">{t('sentimentAnalysis')}</span>
        </Link>
        
        {/* Sistema de Recomendación */}
        <Link 
          to="/services/card_service?title=Sistema de Recomendación&info=Un sistema de recomendación es una herramienta que utiliza algoritmos para sugerir productos." 
          className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-red-600 shadow-md rounded-lg animate-slide-up hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
        >
          <span className="text-xs text-center">{t('recommendationSystem')}</span>
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