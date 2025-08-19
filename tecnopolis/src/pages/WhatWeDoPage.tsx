import { useState } from 'react';

const WhatWeDoPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '', color: '' });

  const cubeStyles = `
    .container {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #242424;
        color: #fff;
        font-family: Arial, sans-serif;
        perspective: 1000px;
    }

    .box-card {
        width: 200px;
        height: 200px;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 1s ease;
        cursor: pointer;
        animation: rotate3d 8s infinite linear;
    }

    .box-card:hover {
        animation-play-state: paused;
    }

    .face {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        font-weight: bold;
        backface-visibility: visible;
        border-radius: 12px;
        background: linear-gradient(145deg, #2a2a2a, #383838);
        border: 2px solid #646cff;
        transition: all 0.3s ease;
        overflow: hidden;
    }

    .face::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
        top: -100%;
        left: -100%;
        transition: all 0.5s ease;
        transform: translateZ(20px);
    }

    .face::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
            135deg,
            transparent 0%,
            rgba(255, 255, 255, 0.05) 50%,
            transparent 100%
        );
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .face:hover::before {
        top: 100%;
        left: 100%;
    }

    .face:hover::after {
        opacity: 1;
    }

    .front {
        transform: translateZ(100px);
        border-color: #646cff;
    }

    .back {
        transform: translateZ(-100px) rotateY(180deg);
        border-color: #00bcd4;
    }

    .right {
        transform: translateX(100px) rotateY(90deg);
        border-color: #4caf50;
    }

    .left {
        transform: translateX(-100px) rotateY(-90deg);
        border-color: #ff4081;
    }

    .top {
        transform: translateY(-100px) rotateX(90deg);
        border-color: #ffc107;
    }

    .bottom {
        transform: translateY(100px) rotateX(-90deg);
        border-color: #9c27b0;
    }

    @keyframes rotate3d {
        0% {
            transform: rotateX(0) rotateY(0);
        }
        25% {
            transform: rotateX(90deg) rotateY(90deg);
        }
        50% {
            transform: rotateX(180deg) rotateY(180deg);
        }
        75% {
            transform: rotateX(270deg) rotateY(270deg);
        }
        100% {
            transform: rotateX(360deg) rotateY(360deg);
        }
    }

    @keyframes modalAppear {
      0% {
        opacity: 0;
        transform: scale(0.8) translateY(-50px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    @keyframes hologramGlow {
      0%, 100% {
        box-shadow: 0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(0, 255, 255, 0.2);
      }
      50% {
        box-shadow: 0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.3);
      }
    }

    .hologram-modal {
      animation: hologramGlow 2s ease-in-out infinite, modalAppear 0.5s ease-out;
    }

    @media (max-width: 768px) {
        .box-card {
            width: 150px;
            height: 150px;
        }
        
        .front { transform: translateZ(75px); }
        .back { transform: translateZ(-75px) rotateY(180deg); }
        .right { transform: translateX(75px) rotateY(90deg); }
        .left { transform: translateX(-75px) rotateY(-90deg); }
        .top { transform: translateY(-75px) rotateX(90deg); }
        .bottom { transform: translateY(75px) rotateX(-90deg); }
    }
  `;

  const faceData = {
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

  const openModal = (face) => {
    setModalContent(faceData[face]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFaceClick = (face, event) => {
    event.stopPropagation();
    openModal(face);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cubeStyles }} />
      <div className="container">
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
                  e.target.style.background = modalContent.color;
                  e.target.style.color = '#000';
                  e.target.style.boxShadow = `0 0 20px ${modalContent.color}`;
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = modalContent.color;
                  e.target.style.boxShadow = 'none';
                  e.target.style.transform = 'scale(1)';
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