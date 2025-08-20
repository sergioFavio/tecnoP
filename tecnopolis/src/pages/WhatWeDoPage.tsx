import { useState } from 'react';
import "./WhatWeDoPage.css";

const WhatWeDoPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '', color: '' });

  const faceData:Record<string,{
    title: string;
    content: string;
    color:string;
  }> = {
    front: {
      title: 'Front Face',
      content: 'Esta es la cara frontal del cubo. Aquí puedes mostrar información sobre servicios principales, presentación de la empresa, o cualquier contenido destacado que desees que los usuarios vean primero.',
      color: '#646cff'
    },
    back: {
      title: 'Back Face', 
      content: 'Cara posterior del cubo. Ideal para mostrar información adicional, testimonios de clientes, o detalles complementarios que apoyen tu mensaje principal.',
      color: '#00bcd4'
    },
    right: {
      title: 'Right Face',
      content: 'Cara derecha del cubo. Perfecta para mostrar productos, servicios específicos, o características técnicas que quieras destacar de manera organizada.',
      color: '#4caf50'
    },
    left: {
      title: 'Left Face',
      content: 'Cara izquierda del cubo. Espacio ideal para mostrar el equipo de trabajo, historia de la empresa, o valores corporativos que definan tu identidad.',
      color: '#ff4081'
    },
    top: {
      title: 'Top Face',
      content: 'Cara superior del cubo. Excelente para mostrar logros, certificaciones, premios obtenidos, o cualquier información que eleve el prestigio de tu organización.',
      color: '#ffc107'
    },
    bottom: {
      title: 'Bottom Face',
      content: 'Cara inferior del cubo. Útil para información de contacto, ubicación, redes sociales, o cualquier detalle fundamental que los usuarios necesiten conocer.',
      color: '#9c27b0'
    }
  };

  const openModal = (face:string) => {
    setModalContent(faceData[face]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFaceClick = (face:string, event: any) => {
    event.stopPropagation();
    openModal(face);
  };

  return (
    <>
      <div className="cubo-container">
        <div className="box-card">
          <div 
            className="face front" 
            onClick={(e) => handleFaceClick('front', e)}
          >
            Front
          </div>
          <div 
            className="face back"
            onClick={(e) => handleFaceClick('back', e)}
          >
            Back
          </div>
          <div 
            className="face right"
            onClick={(e) => handleFaceClick('right', e)}
          >
            Right
          </div>
          <div 
            className="face left"
            onClick={(e) => handleFaceClick('left', e)}
          >
            Left
          </div>
          <div 
            className="face top"
            onClick={(e) => handleFaceClick('top', e)}
          >
            Top
          </div>
          <div 
            className="face bottom"
            onClick={(e) => handleFaceClick('bottom', e)}
          >
            Bottom
          </div>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'transparent',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000
            }}
            onClick={closeModal}
          >
            <div 
              className="hologram-modal"
              style={{
                position: 'relative',
                maxWidth: '600px',
                width: '90%',
                maxHeight: '80%',
                background: 'rgba(20, 20, 40, 0.95)',
                border: `2px solid ${modalContent.color}`,
                borderRadius: '15px',
                padding: '40px',
                backdropFilter: 'blur(15px)',
                boxShadow: `0 0 50px ${modalContent.color}40, inset 0 0 50px ${modalContent.color}20, 0 0 100px ${modalContent.color}30`,
                overflow: 'auto',
                color: '#fff'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Esquinas holográficas */}
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                width: '40px',
                height: '40px',
                borderTop: `3px solid ${modalContent.color}`,
                borderLeft: `3px solid ${modalContent.color}`,
                opacity: 0.8
              }} />
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                width: '40px',
                height: '40px',
                borderTop: `3px solid ${modalContent.color}`,
                borderRight: `3px solid ${modalContent.color}`,
                opacity: 0.8
              }} />
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                width: '40px',
                height: '40px',
                borderBottom: `3px solid ${modalContent.color}`,
                borderLeft: `3px solid ${modalContent.color}`,
                opacity: 0.8
              }} />
              <div style={{
                position: 'absolute',
                bottom: '15px',
                right: '15px',
                width: '40px',
                height: '40px',
                borderBottom: `3px solid ${modalContent.color}`,
                borderRight: `3px solid ${modalContent.color}`,
                opacity: 0.8
              }} />

              {/* Botón de cierre */}
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '25px',
                  background: 'transparent',
                  border: `2px solid ${modalContent.color}`,
                  color: modalContent.color,
                  fontSize: '24px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: '0.3s',
                  fontWeight: 'bold',
                  textShadow: `0 0 10px ${modalContent.color}`
                }}
                onMouseEnter={(e) => {
                  const element = e.target as HTMLElement;
                  element.style.background = modalContent.color;
                  element.style.color = '#000';
                  element.style.boxShadow = `0 0 20px ${modalContent.color}`;
                  element.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  const element = e.target as HTMLElement;
                  element.style.background = 'transparent';
                  element.style.color = modalContent.color;
                  element.style.boxShadow = 'none';
                  element.style.transform = 'scale(1)';
                }}
              >×</button>

              {/* Contenido del modal */}
              <h2 style={{
                fontSize: '2.5em',
                marginBottom: '30px',
                textAlign: 'center',
                textShadow: `0 0 20px ${modalContent.color}`,
                letterSpacing: '2px',
                color: modalContent.color,
                fontWeight: 'bold'
              }}>
                {modalContent.title}
              </h2>
              
              <div style={{
                fontSize: '1.3em',
                lineHeight: '1.8',
                textAlign: 'justify',
                color: '#e0f0ff',
                textShadow: `0 0 5px ${modalContent.color}`,
                padding: '0 10px'
              }}>
                {modalContent.content}
              </div>

              {/* Elementos decorativos */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '0',
                width: '6px',
                height: '60px',
                background: `linear-gradient(to bottom, transparent, ${modalContent.color}, transparent)`,
                transform: 'translateY(-50%)',
                opacity: 0.6,
                borderRadius: '3px'
              }} />
              <div style={{
                position: 'absolute',
                top: '50%',
                right: '0',
                width: '6px',
                height: '60px',
                background: `linear-gradient(to bottom, transparent, ${modalContent.color}, transparent)`,
                transform: 'translateY(-50%)',
                opacity: 0.6,
                borderRadius: '3px'
              }} />

              {/* Línea decorativa inferior */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80%',
                height: '2px',
                background: `linear-gradient(to right, transparent, ${modalContent.color}, transparent)`,
                opacity: 0.5
              }} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WhatWeDoPage;