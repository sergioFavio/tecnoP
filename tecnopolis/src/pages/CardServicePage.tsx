import { Link, useSearchParams } from 'react-router-dom';

const CardServicePage = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get('title') || 'Hologram Card';
  const info = searchParams.get('info') || 'No hay información - Nao tem informacao - Do not have information.';

  // Estilos CSS como string para incluir las animaciones y responsividad
  const styles = `
    @keyframes float1 {
      0%, 100% {
        transform: translateY(10px);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    
    @keyframes float2 {
      0%, 100% {
        transform: translateY(-10px);
      }
      50% {
        transform: translateY(10px);
      }
    }
    
    .floating-element-1 {
      animation: float1 3s ease-in-out infinite;
    }
    
    .floating-element-2 {
      animation: float2 3s ease-in-out infinite 1.5s;
    }

    /* Media queries para responsividad */
    @media (max-width: 1200px) {
      .hologram-box {
        width: 80vw !important;
        max-width: 800px !important;
      }
    }

    @media (max-width: 768px) {
      .hologram-box {
        width: 90vw !important;
        height: auto !important;
        min-height: 300px !important;
        margin: 20px 15px !important;
      }
      
      .content {
        padding: 15px 20px !important;
      }
      
      .content h2 {
        font-size: 2em !important;
        margin-bottom: 15px !important;
      }
      
      .content p {
        font-size: 1.1em !important;
        margin-bottom: 15px !important;
      }
      
      .content a {
        font-size: 1.1em !important;
        padding: 12px 20px !important;
      }
    }

    @media (max-width: 480px) {
      .hologram-box {
        width: 95vw !important;
        min-height: 280px !important;
        margin: 15px 10px !important;
      }
      
      .content {
        padding: 12px 16px !important;
      }
      
      .content h2 {
        font-size: 1.8em !important;
        margin-bottom: 12px !important;
      }
      
      .content p {
        font-size: 1em !important;
        margin-bottom: 12px !important;
        line-height: 1.5em !important;
      }
      
      .content a {
        font-size: 1em !important;
        padding: 10px 18px !important;
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: 'Consolas, monospace',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          padding: '40px 20px',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          
          {/* Card Responsive */}
          <div 
            className="hologram-box"
            style={{
              position: 'relative',
              width: '90vw',
              maxWidth: '960px',
              minWidth: '280px',
              height: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '40px 30px',
              transition: '0.5s'
            }}
            onMouseEnter={(e) => {
              const box = e.currentTarget;
              const before = box.querySelector('.before-element') as HTMLElement | null;
              const after = box.querySelector('.after-element') as HTMLElement | null;
              const content = box.querySelector('.content') as HTMLElement | null;
              const spanBefore = box.querySelector('.span-before') as HTMLElement | null;
              const spanAfter = box.querySelector('.span-after') as HTMLElement | null;
              
              if (before && after) {
                before.style.transform = 'skewX(0deg)';
                before.style.left = '20px';
                before.style.width = 'calc(100% - 90px)';
                after.style.transform = 'skewX(0deg)';
                after.style.left = '20px';
                after.style.width = 'calc(100% - 90px)';
              }
              
              if (content) {
                content.style.left = window.innerWidth <= 768 ? '0' : '-25px';
                content.style.padding = window.innerWidth <= 768 ? '20px' : '60px 40px';
              }
              
              if (spanBefore) {
                spanBefore.style.top = window.innerWidth <= 768 ? '-30px' : '-50px';
                spanBefore.style.left = window.innerWidth <= 768 ? '30px' : '50px';
                spanBefore.style.width = window.innerWidth <= 768 ? '60px' : '100px';
                spanBefore.style.height = window.innerWidth <= 768 ? '60px' : '100px';
                spanBefore.style.opacity = '1';
              }
              
              if (spanAfter) {
                spanAfter.style.bottom = window.innerWidth <= 768 ? '-30px' : '-50px';
                spanAfter.style.right = window.innerWidth <= 768 ? '30px' : '50px';
                spanAfter.style.width = window.innerWidth <= 768 ? '60px' : '100px';
                spanAfter.style.height = window.innerWidth <= 768 ? '60px' : '100px';
                spanAfter.style.opacity = '1';
              }
            }}
            onMouseLeave={(e) => {
              const box = e.currentTarget;
              const before = box.querySelector('.before-element') as HTMLElement | null;
              const after = box.querySelector('.after-element') as HTMLElement | null;
              const content = box.querySelector('.content') as HTMLElement | null;
              const spanBefore = box.querySelector('.span-before') as HTMLElement | null;
              const spanAfter = box.querySelector('.span-after') as HTMLElement | null;
              
              if (before && after) {
                before.style.transform = 'skewX(15deg)';
                before.style.left = window.innerWidth <= 768 ? '30px' : '50px';
                before.style.width = '50%';
                after.style.transform = 'skewX(15deg)';
                after.style.left = window.innerWidth <= 768 ? '30px' : '50px';
                after.style.width = '50%';
              }
              
              if (content) {
                content.style.left = '0';
                content.style.padding = window.innerWidth <= 768 ? '15px 20px' : '20px 40px';
              }
              
              if (spanBefore) {
                spanBefore.style.top = '0';
                spanBefore.style.left = '0';
                spanBefore.style.width = '0';
                spanBefore.style.height = '0';
                spanBefore.style.opacity = '0';
              }
              
              if (spanAfter) {
                spanAfter.style.bottom = '0';
                spanAfter.style.right = '0';
                spanAfter.style.width = '0';
                spanAfter.style.height = '0';
                spanAfter.style.opacity = '0';
              }
            }}
          >
            {/* Before pseudo-element */}
            <div 
              className="before-element"
              style={{
                content: '',
                position: 'absolute',
                top: 0,
                left: window.innerWidth <= 768 ? '30px' : '50px',
                width: '50%',
                height: '100%',
                background: 'linear-gradient(315deg, #ffbc00, #ff0058)',
                borderRadius: '8px',
                transform: 'skewX(15deg)',
                transition: '0.5s'
              }}
            />
            
            {/* After pseudo-element (blur effect) */}
            <div 
              className="after-element"
              style={{
                content: '',
                position: 'absolute',
                top: 0,
                left: window.innerWidth <= 768 ? '30px' : '50px',
                width: '50%',
                height: '100%',
                background: 'linear-gradient(315deg, #ffbc00, #ff0058)',
                borderRadius: '8px',
                transform: 'skewX(15deg)',
                transition: '0.5s',
                filter: 'blur(30px)'
              }}
            />
            
            {/* Animated spans */}
            <span style={{
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 5,
              pointerEvents: 'none'
            }}>
              <div 
                className="span-before floating-element-1"
                style={{
                  content: '',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 0,
                  height: 0,
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  opacity: 0,
                  transition: '0.1s',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                }}
              />
              <div 
                className="span-after floating-element-2"
                style={{
                  content: '',
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '0',
                  height: '0',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  opacity: 0,
                  transition: '0.5s',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                }}
              />
            </span>
            
            <div 
              className="content"
              style={{
                position: 'relative',
                left: 0,
                padding: window.innerWidth <= 768 ? '15px 20px' : '20px 40px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                zIndex: 1,
                transition: '0.5s',
                color: '#fff',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              <h2 style={{
                fontSize: window.innerWidth <= 480 ? '1.8em' : window.innerWidth <= 768 ? '2em' : '2.5em',
                color: '#fff',
                marginBottom: window.innerWidth <= 768 ? '15px' : '20px',
                textAlign: 'center'
              }}>{title}</h2>
              <p style={{
                fontSize: window.innerWidth <= 480 ? '1em' : window.innerWidth <= 768 ? '1.1em' : '1.3em',
                marginBottom: window.innerWidth <= 768 ? '15px' : '20px',
                lineHeight: window.innerWidth <= 480 ? '1.5em' : '1.6em',
                textAlign: 'center'
              }}>{info}</p>
              <div style={{ textAlign: 'center' }}>
                <Link 
                  to="/services"
                  style={{
                    display: 'inline-block',
                    fontSize: window.innerWidth <= 480 ? '1em' : window.innerWidth <= 768 ? '1.1em' : '1.2em',
                    color: '#111',
                    background: '#fff',
                    padding: window.innerWidth <= 480 ? '10px 18px' : window.innerWidth <= 768 ? '12px 20px' : '15px 25px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '700',
                    marginTop: '10px',
                    transition: '0.3s'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = '#ffcf4d';
                    target.style.border = '1px solid rgba(255, 0, 88, 0.4)';
                    target.style.boxShadow = '0 1px 15px rgba(1, 1, 1, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = '#fff';
                    target.style.border = 'none';
                    target.style.boxShadow = 'none';
                  }}
                >Close</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardServicePage;