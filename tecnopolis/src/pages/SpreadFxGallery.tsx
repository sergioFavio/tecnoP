import React, { type CSSProperties } from 'react';
import { useLanguage } from '../component/LanguageContext'; // Ajusta la ruta según tu estructura

interface CubeConfig{
  width: number;
  height: number;
  image?: string;
  text?: string; 
}

const SpreadFxGallery = () => {
  const { t } = useLanguage(); // Hook para acceder a las traducciones
  
  const styles: Record<string, CSSProperties> = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexFlow: 'column nowrap',
      overflowX: 'hidden',
      //background:'#000', 
      fontFamily: 'Arial, sans-serif'
    },
    title: {
      font: '1.3em/1 monospace',
      fontVariant: 'small-caps',
      letterSpacing: '0.5em',
      margin: '4em',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
    },
    gallery: {
      perspective: '700px',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'row wrap',
      gap: '0.5em',
      padding: '0 2em'
    },
    cube: {
      position: 'relative',
      margin: '0.1em',
      perspectiveOrigin: 'center center',
      transformStyle: 'preserve-3d',
      transform: 'rotateX(40deg)',
      transition: 'all 0.4s',
      cursor: 'pointer'
    },
    cubeHover: {
      transform: 'translateZ(100px) rotateX(20deg)',
      zIndex: 999
    },
    face: {
      position: 'absolute',
      left: 0,
      top: 0,
      backfaceVisibility: 'hidden',
      width: '100%',
      height: '100%',
      transition: 'transform 0.3s, filter 1s',
      background: 'coral',
      filter: 'grayscale(0.9)',
      backgroundSize: '300% 300%',
      textIndent: '999px',
      overflow: 'hidden'
    },
    textFace: {
      position: 'absolute',
      left: 0,
      top: 0,
      backfaceVisibility: 'hidden',
      width: '100%',
      height: '100%',
      transition: 'transform 0.3s, filter 1s',
      background: 'coral',
      filter: 'grayscale(0.9)',
      padding: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      boxSizing: 'border-box',
      fontSize: '11px',
      lineHeight: '1.3',
      color: 'white',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      overflow: 'hidden'
    },
    faceHover: {
      filter: 'grayscale(0)'
    },
    textFaceHover: {
      filter: 'grayscale(0)'
    }
  };

  // Obtener las imágenes desde las traducciones según el idioma actual
  const galleryImages = t('gallery_va.images') as string[];

  const cubeConfigs: CubeConfig[] = [
    {
      width: 120,
      height: 80,
      image: galleryImages[0]
    },
    {
      width: 90,
      height: 130,
      image: galleryImages[1]
    },
    {
      width: 130,
      height: 90,
      image: galleryImages[2]
    },
    {
      width: 120,
      height: 80,
      image: galleryImages[3]
    },
    {
      width: 64,
      height: 84,
      image: galleryImages[4]
    },
    {
      width: 100,
      height: 66,
      image: galleryImages[5]
    }
  ];

  const getFaceStyles = (index:number, isHovered:boolean, config:CubeConfig) => {
    const isTextCube = !!config.text;
    const baseStyle = isTextCube ? {
      ...styles.textFace,
      ...(isHovered ? styles.textFaceHover : {})
    } : {
      ...styles.face,
      backgroundImage: `url(${config.image})`,
      ...(isHovered ? styles.faceHover : {})
    };

    const positions = [
      { 
        backgroundPosition: isTextCube ? 'none' : 'center center', 
        transform: 'none' 
      },
      { 
        backgroundPosition: isTextCube ? 'none' : 'right center', 
        left: '100%', 
        transformOrigin: 'left center', 
        transform: isHovered ? 'rotateY(0)' : 'rotateY(180deg)',
        transitionDelay: isHovered ? '0s' : '0.03s'
      },
      { 
        backgroundPosition: isTextCube ? 'none' : 'center bottom', 
        top: '100%', 
        transformOrigin: 'center top', 
        transform: isHovered ? 'rotateX(0)' : 'rotateX(-180deg)',
        transitionDelay: isHovered ? '0s' : '0.03s'
      },
      { 
        backgroundPosition: isTextCube ? 'none' : 'left center', 
        left: '-100%', 
        transformOrigin: 'right center', 
        transform: isHovered ? 'rotateY(0)' : 'rotateY(-180deg)',
        transitionDelay: isHovered ? '0s' : '0.03s'
      },
      { 
        backgroundPosition: isTextCube ? 'none' : 'center top', 
        top: '-100%', 
        transformOrigin: 'center bottom', 
        transform: isHovered ? 'rotateX(0)' : 'rotateX(180deg)',
        transitionDelay: isHovered ? '0s' : '0.03s'
      },
      { 
        backgroundPosition: isTextCube ? 'none' : 'right bottom', 
        top: '100%', 
        left: '100%', 
        transformOrigin: 'center top', 
        transform: isHovered ? 'rotateX(0)' : 'rotateX(-180deg)',
        transitionDelay: isHovered ? '0.2s' : '0s'
      },
      { 
        backgroundPosition: isTextCube ? 'none' : 'left bottom', 
        top: '100%', 
        left: '-100%', 
        transformOrigin: 'right center', 
        transform: isHovered ? 'rotateY(0)' : 'rotateY(-180deg)',
        transitionDelay: isHovered ? '0.2s' : '0s'
      },
      { 
        backgroundPosition: isTextCube ? 'none' : 'left top', 
        top: '-100%', 
        left: '-100%', 
        transformOrigin: 'center bottom', 
        transform: isHovered ? 'rotateX(0)' : 'rotateX(180deg)',
        transitionDelay: isHovered ? '0.2s' : '0s'
      },
      { 
        backgroundPosition: isTextCube ? 'none' : 'right top', 
        top: '-100%', 
        left: '100%', 
        transformOrigin: 'left center', 
        transform: isHovered ? 'rotateY(0)' : 'rotateY(180deg)',
        transitionDelay: isHovered ? '0.2s' : '0s'
      }
    ];

    return {
      ...baseStyle,
      ...positions[index]
    };
  };

  const [hoveredCube, setHoveredCube] = React.useState<number|null>(null);

  return (
    <div style={styles.container}>
      <div style={styles.gallery}>
        {cubeConfigs.map((config, cubeIndex) => {
          const isHovered = hoveredCube === cubeIndex;
          const isTextCube = !!config.text;
          return (
            <div
              key={cubeIndex}
              style={{
                ...styles.cube,
                width: `${config.width}px`,
                height: `${config.height}px`,
                ...(isHovered ? styles.cubeHover : {})
              }}
              onMouseEnter={() => setHoveredCube(cubeIndex)}
              onMouseLeave={() => setHoveredCube(null)}
            >
              {Array.from({ length: 9 }, (_, faceIndex) => (
                <div
                  key={faceIndex}
                  style={getFaceStyles(faceIndex, isHovered, config)}
                >
                  {isTextCube ? config.text : String.fromCharCode(65 + faceIndex)}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpreadFxGallery;