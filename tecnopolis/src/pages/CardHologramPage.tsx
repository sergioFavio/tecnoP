import { useState, useEffect } from "react";
import { useLanguage } from "../component/LanguageContext";

const CardHologramPage = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Detectar si es móvil
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Estilos CSS como string para incluir las animaciones
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
    
    @keyframes hologramGlow {
      0%, 100% {
        box-shadow: 0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(0, 255, 255, 0.2);
      }
      50% {
        box-shadow: 0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.3);
      }
    }
    
    @keyframes scanLines {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 0 100px;
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
    
    @keyframes slideIn {
      0% {
        opacity: 0;
        transform: translateX(50px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes dotPulse {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 10px #00ffff;
      }
      50% {
        transform: scale(1.2);
        box-shadow: 0 0 20px #00ffff, 0 0 30px #00ffff;
      }
    }
    
    .floating-element-1 {
      animation: float1 3s ease-in-out infinite;
    }
    
    .floating-element-2 {
      animation: float2 3s ease-in-out infinite 1.5s;
    }
    
    .hologram-modal {
      animation: hologramGlow 2s ease-in-out infinite, modalAppear 0.5s ease-out;
    }
    
    .scan-lines {
      animation: scanLines 2s linear infinite;
      background: linear-gradient(
        transparent 50%,
        rgba(0, 255, 255, 0.1) 51%,
        rgba(0, 255, 255, 0.1) 52%,
        transparent 53%
      );
      background-size: 100% 4px;
    }
    
    .carousel-container {
      overflow: hidden;
      width: 100%;
      position: relative;
    }
    
    .carousel-track {
      display: flex;
      transition: transform 0.5s ease-in-out;
    }
    
    .carousel-dots {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      gap: 15px;
    }
    
    .carousel-dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.2);
      border: 2px solid rgba(0, 255, 255, 0.3);
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
    }
    
    .carousel-dot:hover {
      background-color: rgba(0, 255, 255, 0.4);
      border-color: rgba(0, 255, 255, 0.6);
      transform: scale(1.1);
    }
    
    .carousel-dot.active {
      background-color: #00ffff;
      border-color: #00ffff;
      animation: dotPulse 2s ease-in-out infinite;
    }
    
    .carousel-dot.active::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 8px;
      height: 8px;
      background: #000;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
    
    @media (max-width: 768px) {
      .hologram-box {
        min-width: 100%;
        margin: 20px 0;
        cursor: pointer;
      }
      
      .carousel-dots {
        padding: 0 20px;
        margin-top: 15px;
      }
      
      .carousel-dot {
        width: 20px;
        height: 20px;
      }
      
      .carousel-dot.active::after {
        width: 10px;
        height: 10px;
      }
    }
  `;

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleCardClick = (index: number) => {
    if (isMobile) {
      setActiveCard(activeCard === index ? null : index);
    }
  };

  const cardData = [
    {
      title: t('computerVision1Title'),
      description: t('computerVision1Description'),
      gradient: "linear-gradient(315deg, #ffbc00, #ff0058)",
      modalContent: t('computerVision1Content'),
    },
    {
      title: t('computerVision2Title'),
      description: t('computerVision2Description'),
      gradient: "linear-gradient(315deg, #03a9f4, #ff0058)",
      modalContent: t('computerVision2Content'),
    },
    {
      title: t('computerVision3Title'),
      description: t('computerVision3Description'),
      gradient: "linear-gradient(315deg, #4dff03, #00d0ff)",
      modalContent: t('computerVision3Content'),
    },
  ];

  const getCardStyles = (index: number) => {
    const isActive = isMobile && activeCard === index;
    return {
      beforeAfter: {
        transform: isActive ? "skewX(0deg)" : "skewX(15deg)",
        left: isActive ? "20px" : "50px",
        width: isActive ? "calc(100% - 40px)" : "50%",
      },
      content: {
        left: isActive ? "-15px" : "0",
        padding: isActive ? "40px 40px" : "20px 40px",
      },
      spans: {
        top: isActive ? "-40px" : "0",
        left: isActive ? "40px" : "0",
        bottom: isActive ? "-40px" : "0",
        right: isActive ? "40px" : "0",
        width: isActive ? "80px" : "0",
        height: isActive ? "80px" : "0",
        opacity: isActive ? "1" : "0",
      }
    };
  };

  const renderCard = (cardInfo: any, index: number) => {
    const cardStyles = getCardStyles(index);
    
    return (
      <div
        key={index}
        className="hologram-box"
        style={{
          position: "relative",
          width: isMobile ? "calc(100% - 60px)" : "320px",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: isMobile ? "20px 30px" : "40px 30px",
          transition: "0.5s",
          animation: isMobile && currentSlide === index ? "slideIn 0.5s ease-out" : "none",
        }}
        onClick={() => handleCardClick(index)}
        onMouseEnter={(e) => {
          if (isMobile) return; // En móvil usar click en lugar de hover
          
          const box = e.currentTarget;
          const before = box.querySelector(".before-element") as HTMLElement;
          const after = box.querySelector(".after-element") as HTMLElement;
          const content = box.querySelector(".content") as HTMLElement;
          const spanBefore = box.querySelector(".span-before") as HTMLElement;
          const spanAfter = box.querySelector(".span-after") as HTMLElement;

          if (before && after) {
            before.style.transform = "skewX(0deg)";
            before.style.left = "20px";
            before.style.width = "calc(100% - 90px)";
            after.style.transform = "skewX(0deg)";
            after.style.left = "20px";
            after.style.width = "calc(100% - 90px)";
          }

          if (content) {
            content.style.left = "-25px";
            content.style.padding = "60px 40px";
          }

          if (spanBefore) {
            spanBefore.style.top = "-50px";
            spanBefore.style.left = "50px";
            spanBefore.style.width = "100px";
            spanBefore.style.height = "100px";
            spanBefore.style.opacity = "1";
          }

          if (spanAfter) {
            spanAfter.style.bottom = "-50px";
            spanAfter.style.right = "50px";
            spanAfter.style.width = "100px";
            spanAfter.style.height = "100px";
            spanAfter.style.opacity = "1";
          }
        }}
        onMouseLeave={(e) => {
          if (isMobile) return; // En móvil usar click en lugar de hover
          
          const box = e.currentTarget;
          const before = box.querySelector(".before-element") as HTMLElement;
          const after = box.querySelector(".after-element") as HTMLElement;
          const content = box.querySelector(".content") as HTMLElement;
          const spanBefore = box.querySelector(".span-before") as HTMLElement;
          const spanAfter = box.querySelector(".span-after") as HTMLElement;

          if (before && after) {
            before.style.transform = "skewX(15deg)";
            before.style.left = "50px";
            before.style.width = "50%";
            after.style.transform = "skewX(15deg)";
            after.style.left = "50px";
            after.style.width = "50%";
          }

          if (content) {
            content.style.left = "0";
            content.style.padding = "20px 40px";
          }

          if (spanBefore) {
            spanBefore.style.top = "0";
            spanBefore.style.left = "0";
            spanBefore.style.width = "0";
            spanBefore.style.height = "0";
            spanBefore.style.opacity = "0";
          }

          if (spanAfter) {
            spanAfter.style.bottom = "0";
            spanAfter.style.right = "0";
            spanAfter.style.width = "0";
            spanAfter.style.height = "0";
            spanAfter.style.opacity = "0";
          }
        }}
      >
        {/* Before pseudo-element */}
        <div
          className="before-element"
          style={{
            content: "",
            position: "absolute",
            top: 0,
            left: cardStyles.beforeAfter.left,
            width: cardStyles.beforeAfter.width,
            height: "100%",
            background: cardInfo.gradient,
            borderRadius: "8px",
            transform: cardStyles.beforeAfter.transform,
            transition: "0.5s",
          }}
        />

        {/* After pseudo-element (blur effect) */}
        <div
          className="after-element"
          style={{
            content: "",
            position: "absolute",
            top: 0,
            left: cardStyles.beforeAfter.left,
            width: cardStyles.beforeAfter.width,
            height: "100%",
            background: cardInfo.gradient,
            borderRadius: "8px",
            transform: cardStyles.beforeAfter.transform,
            transition: "0.5s",
            filter: "blur(30px)",
          }}
        />

        {/* Animated spans */}
        <span
          style={{
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 5,
            pointerEvents: "none",
          }}
        >
          <div
            className="span-before floating-element-1"
            style={{
              content: "",
              position: "absolute",
              top: cardStyles.spans.top,
              left: cardStyles.spans.left,
              width: cardStyles.spans.width,
              height: cardStyles.spans.height,
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              opacity: cardStyles.spans.opacity,
              transition: "0.5s",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          />
          <div
            className="span-after floating-element-2"
            style={{
              content: "",
              position: "absolute",
              bottom: cardStyles.spans.bottom,
              right: cardStyles.spans.right,
              width: cardStyles.spans.width,
              height: cardStyles.spans.height,
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              opacity: cardStyles.spans.opacity,
              transition: "0.5s",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          />
        </span>

        <div
          className="content"
          style={{
            position: "relative",
            left: cardStyles.content.left,
            padding: cardStyles.content.padding,
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            zIndex: 1,
            transition: "0.5s",
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontSize: "1.4em",
              color: "#fff",
              marginBottom: "10px",
            }}
          >
            {cardInfo.title}
          </h2>
          <p
            style={{
              fontSize: "1.1em",
              marginBottom: "10px",
              lineHeight: "1.4em",
            }}
          >
            {cardInfo.description}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              openModal(cardInfo.title, cardInfo.modalContent);
            }}
            style={{
              display: "inline-block",
              fontSize: "1.1em",
              color: "#111",
              background: "#fff",
              padding: "10px",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: "700",
              marginTop: "5px",
              transition: "0.3s",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.background = "#ffcf4d";
              target.style.border = "1px solid rgba(255, 0, 88, 0.4)";
              target.style.boxShadow = "0 1px 15px rgba(1, 1, 1, 0.2)";
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.background = "#fff";
              target.style.border = "none";
              target.style.boxShadow = "none";
            }}
          >
            {t('readMore')}
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div
        style={{
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          fontFamily: "Consolas, monospace",
          width: "100%",
          minHeight: "100vh",
          background: "#242424",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isMobile ? (
          <div
            style={{
              width: "100%",
              padding: "40px 0",
            }}
          >
            <div className="carousel-container">
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {cardData.map((card, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      minWidth: "100%",
                    }}
                  >
                    {renderCard(card, index)}
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-dots">
              {cardData.map((_, index) => (
                <div
                  key={index}
                  className={`carousel-dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                  style={{
                    transform: currentSlide === index ? "scale(1.2)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              padding: "40px 20px",
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {cardData.map((card, index) => renderCard(card, index))}
          </div>
        )}

        {/* Modal */}
        {modalOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              backdropFilter: "none",
            }}
            onClick={closeModal}
          >
            <div
              className="hologram-modal scan-lines"
              style={{
                position: "relative",
                maxWidth: "600px",
                width: "90%",
                maxHeight: "80%",
                background: "rgba(0, 20, 40, 0.95)",
                border: "2px solid #00ffff",
                borderRadius: "10px",
                padding: "40px",
                backdropFilter: "blur(15px)",
                boxShadow:
                  "0 0 50px rgba(0, 255, 255, 0.4), inset 0 0 50px rgba(0, 255, 255, 0.1), 0 0 100px rgba(0, 255, 255, 0.2)",
                overflow: "auto",
                color: "#00ffff",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Efecto de esquinas holográficas */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  width: "30px",
                  height: "30px",
                  borderTop: "3px solid #00ffff",
                  borderLeft: "3px solid #00ffff",
                  opacity: 0.7,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  width: "30px",
                  height: "30px",
                  borderTop: "3px solid #00ffff",
                  borderRight: "3px solid #00ffff",
                  opacity: 0.7,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  width: "30px",
                  height: "30px",
                  borderBottom: "3px solid #00ffff",
                  borderLeft: "3px solid #00ffff",
                  opacity: 0.7,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  width: "30px",
                  height: "30px",
                  borderBottom: "3px solid #00ffff",
                  borderRight: "3px solid #00ffff",
                  opacity: 0.7,
                }}
              />

              {/* Botón de cierre */}
              <button
                onClick={closeModal}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "transparent",
                  border: "2px solid #00ffff",
                  color: "#00ffff",
                  fontSize: "20px",
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "0.3s",
                  textShadow: "0 0 10px #00ffff",
                }}
                onMouseEnter={(e) => {
                  const element = e.target as HTMLElement;
                  element.style.background = "#00ffff";
                  element.style.color = "#000";
                  element.style.boxShadow = "0 0 20px #00ffff";
                }}
                onMouseLeave={(e) => {
                  const element = e.target as HTMLElement;
                  element.style.background = "transparent";
                  element.style.color = "#00ffff";
                  element.style.boxShadow = "none";
                }}
              >
                ×
              </button>

              {/* Contenido del modal */}
              <h2
                style={{
                  fontSize: isMobile ? "0.85em" : "1.7em",
                  marginBottom: "20px",
                  textAlign: "center",
                  textShadow: "0 0 20px #00ffff",
                  letterSpacing: "2px",
                }}
              >
                {modalContent.title}
              </h2>

              <div
                style={{
                  fontSize: isMobile ? "0.6em" : "1.2em",
                  lineHeight: "1.6",
                  textAlign: "justify",
                  color: "#e0f7ff",
                  textShadow: "0 0 5px #00ffff",
                  maxHeight: isMobile ? "60vh" : "none",
                  overflowY: isMobile ? "auto" : "visible",
                  paddingRight: isMobile ? "10px" : "0",
                }}
              >
                {modalContent.content}
              </div>

              {/* Elementos decorativos holográficos */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "0",
                  width: "5px",
                  height: "50px",
                  background:
                    "linear-gradient(to bottom, transparent, #00ffff, transparent)",
                  transform: "translateY(-50%)",
                  opacity: 0.5,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "0",
                  width: "5px",
                  height: "50px",
                  background:
                    "linear-gradient(to bottom, transparent, #00ffff, transparent)",
                  transform: "translateY(-50%)",
                  opacity: 0.5,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardHologramPage;