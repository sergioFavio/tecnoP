import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  imageUrl: string;
  color: string;
}

const ProductsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Doctor Tomatto',
      description: 'Doctor Tomatto es una plataforma de IA que proporciona a los productores de tomate una herramienta mediante procesamiento de imágenes digitales, para la detección temprana de plagas, enfermedades y tratamientos, para actuar a tiempo y mantener una plantación sana y así minimizar la pérdida de producción de tomates debido a plagas y enfermedades.',
      videoUrl: 'https://www.youtube.com/embed/94B-oraAOCc',
      imageUrl: '/img/projects/proyectoDoctorTomatto.jpg',
      color: 'red'
    },
    {
      id: 2,
      title: 'Atenea Byte',
      description: 'Atenea Byte es una plataforma de IA que genera contenido para programas de radio en tiempo real, mediante la utilización de asistentes virtuales, quienes interpretan distintos roles, como ser: Periodista, Astróloga, Humorista, Chef y Asesora de modas y etiqueta, quienes interactúan con el/la conductor(a) del programa de radio.',
      videoUrl: 'https://www.youtube.com/embed/3Y8tCoTvZKw',
      imageUrl: '/img/projects/proyectoAteneaByte.jpg',
      color: 'green'
    },
    {
      id: 3,
      title: 'Camila Plejia',
      description: 'El potencial de cambiar las vidas de las personas con ciertos tipos de discapacidad es una de las promesas de la inteligencia artificial (IA). En este contexto nace Camila Plejia, un asistente virtual con IA que permite a las personas con movilidad restringida realizar acciones para las que antes hubieran necesitado ayuda externa. Leer mensajes, redactar correos electrónicos, buscar videos o películas, encender luces o poner música, son tareas que las personas con movilidad dan por sentadas, pero que, para alguien con cuadriplejia (parálisis de las extremidades superiores e inferiores) se convierten en misiones imposibles, pero que ahora son posibles gracias a la tecnología. Una persona que está imposibilitada de mover sus manos y piernas, es muy dependiente de otras personas. Para ayudarlas es que se desarrolló esta herramienta que se llama Camila Plejia y que, mediante comandos de voz posibilita que se pueda interactuar con el computador. Es un asistente virtual que ayuda a personas con tetraplejia a mejorar su comunicación con el mundo exterior.',
      videoUrl: 'https://www.youtube.com/watch?v=iPhoCedKH-c',
      imageUrl: '/img/projects/proyectoProfesoraDislexia.jpg',
      color: 'blue'
    }
  ];

  const currentProject = projects.find(p => p.id === activeTab) || projects[0];

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'red': return 'text-red-500';
      case 'green': return 'text-green-500';
      case 'blue': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  console.log('Modal state:', isModalOpen); // Debug log

  return (
    <div className="min-h-screen flex justify-center items-center">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 300ms ease-in-out;
        }
        
        .project-image-1 {
          background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNGY4OGZmIi8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTUwIiByPSI4MCIgZmlsbD0iIzMzNzNkYyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkF0ZW5lYSBCeXRlPC90ZXh0Pjwvc3ZnPg==');
          background-size: cover;
          background-position: center;
        }
        
        .project-image-2 {
          background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNGY4OGZmIi8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTUwIiByPSI4MCIgZmlsbD0iIzMzNzNkYyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkF0ZW5lYSBCeXRlPC90ZXh0Pjwvc3ZnPg==');
          background-size: cover;
          background-position: center;
        }
        
        .project-image-3 {
          background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjOGI1Y2Y2Ii8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTUwIiByPSI4MCIgZmlsbD0iIzdjM2FlZCIvPjx0ZXh0IHg�IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2Zlc29yYSBEaXNsZXhpYTwvdGV4dD48L3N2Zz4=');
          background-size: cover;
          background-position: center;
        }
      `}</style>

      <div className="py-2 w-full flex justify-center">
        {/* Cambio: Altura ajustada para móviles y padding reducido */}
        <div className="rounded-2xl overflow-hidden p-0 w-[90%] sm:w-[80%] md:w-[70%] h-[80vh] md:h-[55vh] lg:h-[55vh] mx-auto shadow-lg bg-white">
          <div className="flex flex-col lg:flex-row h-full">
            {/* Image Section */}
            <div className="relative h-48 sm:h-64 md:h-80 w-full lg:h-full lg:w-1/3 xl:w-2/5 flex-none">
              {/* Dynamic Image Display */}
              <div className={`absolute inset-0 h-full w-full project-image-${activeTab}`}></div>
              
              <span className="absolute block inset-x-0 bottom-0 lg:hidden lg:inset-y-0 lg:right-auto bg-gradient-to-t lg:bg-gradient-to-r from-white to-transparent w-full h-16 lg:h-full lg:w-16"></span>
              
              <div className="relative flex justify-end lg:justify-start flex-wrap text-white text-xl font-bold m-3 md:m-4">
                <div className="bg-green-500 px-3 py-1 md:px-4 md:py-1 rounded text-sm md:text-base">Proyecto</div>
              </div>
            </div>

            {/* Content Section - Padding reducido en móviles */}
            <div className="w-full flex flex-col">
              <div className="p-4 md:p-6 lg:p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 lg:mb-8">
                    Nuestros Proyectos
                  </h3>
                </div>

                {/* Tabs */}
                <div className="relative flex-1 flex flex-col">
                  <header className="flex items-end text-xs md:text-sm">
                    {projects.map((project) => (
                      <button
                        key={project.id}
                        className={`border border-b-0 px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm focus:outline-none ${
                          project.id === 1 ? 'rounded-tl-md' : ''
                        } ${
                          project.id === projects.length ? 'rounded-tr-md' : ''
                        } ${
                          activeTab === project.id ? 'font-semibold bg-gray-50' : 'hover:bg-gray-100'
                        }`}
                        onClick={() => handleTabChange(project.id)}
                      >
                        {project.title}
                      </button>
                    ))}
                  </header>

                  {/* Tab Content */}
                  <div className="border p-2 md:p-3 flex-1 overflow-y-auto rounded-b-xl rounded-tr-xl">
                    <div className="block">
                      <p className="text-xs md:text-sm text-gray-500">
                        <span className={`font-bold ${getColorClass(currentProject.color)}`}>
                          &nbsp;{currentProject.title}&nbsp;
                        </span>
                        {currentProject.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons - Margen superior reducido en móviles */}
                <div className="flex justify-end items-center text-sm font-bold mt-4 md:mt-6 lg:mt-8 gap-3 md:gap-4">
                  <button
                    onClick={() => {
                      console.log('Button clicked!');
                      setIsModalOpen(true);
                    }}
                    className="text-blue-700 border border-blue-300 hover:border-blue-700 px-3 py-1 md:px-4 md:py-1 rounded transition-colors duration-200 cursor-pointer text-xs md:text-sm"
                  >
                    Ver Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal - Positioned outside and simplified */}
      {isModalOpen ? (
        <div 
          className="fixed inset-0 z-50 flex justify-center items-center animate-fadeIn"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-xl shadow-lg max-w-2xl w-full mx-4 p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-3 md:mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-700">
                {currentProject.title}
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1 md:p-2 hover:bg-gray-400 rounded transition-colors"
              >
                X
              </button>
            </div>

            {/* Modal Body - Video */}
            <div className="flex justify-center mb-3 md:mb-4">
              <iframe 
                src={currentProject.videoUrl}
                width="100%" 
                height="315"
                className="rounded max-w-full"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Video de ${currentProject.title}`}
              />
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-1 md:px-6 md:py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors font-medium text-sm md:text-base"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductsPage;