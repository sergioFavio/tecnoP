import { useState, useEffect } from 'react';
import { useLanguage } from '../component/LanguageContext';
import "./WhatWeDoPage.css";

const WhatWeDoPage = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '', color: '' });
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si estamos en modo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const faceData: Record<string, {
    title: string;
    content: string;
    color: string;
  }> = {
    front: {
      title: t('frontFaceTitle'),
      content: t('frontFaceContent'),
      color: '#646cff'
    },
    back: {
      title: t('backFaceTitle'),
      content: t('backFaceContent'),
      color: '#00bcd4'
    },
    right: {
      title: t('rightFaceTitle'),
      content: t('rightFaceContent'),
      color: '#4caf50'
    },
    left: {
      title: t('leftFaceTitle'),
      content: t('leftFaceContent'),
      color: '#ff4081'
    },
    top: {
      title: t('topFaceTitle'),
      content: t('topFaceContent'),
      color: '#ffc107'
    },
    bottom: {
      title: t('bottomFaceTitle'),
      content: t('bottomFaceContent'),
      color: '#9c27b0'
    }
  };

  const openModal = (face: string) => {
    setModalContent(faceData[face]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFaceClick = (face: string, event: any) => {
    event.stopPropagation();
    openModal(face);
  };

  // Calcular tamaños de fuente según si es móvil o no
  const titleFontSize = isMobile ? '1.5em' : '2.5em'; // 60% del tamaño original (40% de reducción)
  const contentFontSize = isMobile ? '0.78em' : '1.3em'; // 60% del tamaño original (40% de reducción)

  return (
    <>
      <div className="cubo-container">
        <div className="box-card">
          <div 
            className="face front" 
            onClick={(e) => handleFaceClick('front', e)}
          >
            {t('frontFace')}
          </div>
          <div 
            className="face back"
            onClick={(e) => handleFaceClick('back', e)}
          >
            {t('backFace')}
          </div>
          <div 
            className="face right"
            onClick={(e) => handleFaceClick('right', e)}
          >
            {t('rightFace')}
          </div>
          <div 
            className="face left"
            onClick={(e) => handleFaceClick('left', e)}
          >
            {t('leftFace')}
          </div>
          <div 
            className="face top"
            onClick={(e) => handleFaceClick('top', e)}
          >
            {t('topFace')}
          </div>
          <div 
            className="face bottom"
            onClick={(e) => handleFaceClick('bottom', e)}
          >
            {t('bottomFace')}
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
              backgroundColor: 'transparent',  //'rgba(0, 0, 0, 0.8)',
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
                padding: isMobile ? '30px' : '40px',
                backdropFilter: 'blur(15px)',
                boxShadow: `0 0 50px ${modalContent.color}40, inset 0 0 50px ${modalContent.color}20, 0 0 100px ${modalContent.color}30`,
                overflow: 'auto',
                color: '#fff'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Holographic corners */}
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                width: isMobile ? '30px' : '40px',
                height: isMobile ? '30px' : '40px',
                borderTop: `3px solid ${modalContent.color}`,
                borderLeft: `3px solid ${modalContent.color}`,
                opacity: 0.8
              }} />
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                width: isMobile ? '30px' : '40px',
                height: isMobile ? '30px' : '40px',
                borderTop: `3px solid ${modalContent.color}`,
                borderRight: `3px solid ${modalContent.color}`,
                opacity: 0.8
              }} />
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                width: isMobile ? '30px' : '40px',
                height: isMobile ? '30px' : '40px',
                borderBottom: `3px solid ${modalContent.color}`,
                borderLeft: `3px solid ${modalContent.color}`,
                opacity: 0.8
              }} />
              <div style={{
                position: 'absolute',
                bottom: '15px',
                right: '15px',
                width: isMobile ? '30px' : '40px',
                height: isMobile ? '30px' : '40px',
                borderBottom: `3px solid ${modalContent.color}`,
                borderRight: `3px solid ${modalContent.color}`,
                opacity: 0.8
              }} />

              {/* Close button */}
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '25px',
                  background: 'transparent',
                  border: `2px solid ${modalContent.color}`,
                  color: modalContent.color,
                  fontSize: isMobile ? '18px' : '24px',
                  width: isMobile ? '32px' : '40px',
                  height: isMobile ? '32px' : '40px',
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

              {/* Modal content */}
              <h2 style={{
                fontSize: titleFontSize,
                marginBottom: isMobile ? '20px' : '30px',
                textAlign: 'center',
                textShadow: `0 0 20px ${modalContent.color}`,
                letterSpacing: isMobile ? '1px' : '2px',
                color: modalContent.color,
                fontWeight: 'bold'
              }}>
                {modalContent.title}
              </h2>
              
              <div style={{
                fontSize: contentFontSize,
                lineHeight: '1.8',
                textAlign: 'justify',
                color: '#e0f0ff',
                textShadow: `0 0 5px ${modalContent.color}`,
                padding: isMobile ? '0 5px' : '0 10px'
              }}>
                {modalContent.content}
              </div>

              {/* Decorative elements */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '0',
                width: isMobile ? '4px' : '6px',
                height: isMobile ? '40px' : '60px',
                background: `linear-gradient(to bottom, transparent, ${modalContent.color}, transparent)`,
                transform: 'translateY(-50%)',
                opacity: 0.6,
                borderRadius: '3px'
              }} />
              <div style={{
                position: 'absolute',
                top: '50%',
                right: '0',
                width: isMobile ? '4px' : '6px',
                height: isMobile ? '40px' : '60px',
                background: `linear-gradient(to bottom, transparent, ${modalContent.color}, transparent)`,
                transform: 'translateY(-50%)',
                opacity: 0.6,
                borderRadius: '3px'
              }} />

              {/* Bottom decorative line */}
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