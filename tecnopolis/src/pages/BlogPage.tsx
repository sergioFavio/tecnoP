import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../component/LanguageContext";

interface Article {
  id: number;
  title: { es: string; en: string; pt: string };
  excerpt: { es: string; en: string; pt: string };
  content: { es: string; en: string; pt: string };
  author: string;
  date: { es: string; en: string; pt: string };
  image: string;
  category: { es: string; en: string; pt: string };
  likes: number;
  comments: number;
}

const BlogPage = () => {
  const { currentLanguage  } = useLanguage();
  const [visibleArticles, setVisibleArticles] = useState<number[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const articles: Article[] = [
    {
      id: 1,
      title: {
        es: "El Futuro de la Inteligencia Artificial",
        en: "The Future of Artificial Intelligence",
        pt: "O Futuro da Inteligência Artificial"
      },
      excerpt: {
        es: "Exploramos las últimas tendencias en IA y su impacto en nuestra vida cotidiana.",
        en: "We explore the latest trends in AI and their impact on our daily lives.",
        pt: "Exploramos as últimas tendências em IA e seu impacto em nossas vidas cotidianas."
      },
      content: {
        es: "La inteligencia artificial está revolucionando todos los aspectos de nuestra vida. Desde asistentes virtuales hasta vehículos autónomos, la IA está transformando la manera en que trabajamos, nos comunicamos y vivimos.",
        en: "Artificial intelligence is revolutionizing all aspects of our lives. From virtual assistants to autonomous vehicles, AI is transforming the way we work, communicate, and live.",
        pt: "A inteligência artificial está revolucionando todos os aspectos de nossas vidas. Desde assistentes virtuais até veículos autônomos, a IA está transformando a maneira como trabalhamos, nos comunicamos e vivemos."
      },
      author: "Ana García",
      date: {
        es: "15 de Agosto, 2025",
        en: "August 15, 2025",
        pt: "15 de Agosto, 2025"
      },
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      category: {
        es: "Inteligencia Artificial",
        en: "Artificial Intelligence",
        pt: "Inteligência Artificial"
      },
      likes: 142,
      comments: 23,
    },
    {
      id: 2,
      title: {
        es: "Computer Vision: La Revolución de las Máquinas que Ven",
        en: "Computer Vision: The Revolution of Machines that See",
        pt: "Computer Vision: A Revolução das Máquinas que Veem"
      },
      excerpt: {
        es: "Cómo las computadoras están aprendiendo a ver e interpretar el mundo visual.",
        en: "How computers are learning to see and interpret the visual world.",
        pt: "Como os computadores estão aprendendo a ver e interpretar o mundo visual."
      },
      content: {
        es: "El computer vision está transformando industrias enteras. Desde sistemas de seguridad hasta diagnósticos médicos, los algoritmos de visión por computadora están alcanzando niveles de precisión humana.",
        en: "Computer vision is transforming entire industries. From security systems to medical diagnostics, computer vision algorithms are reaching human-level accuracy.",
        pt: "A visão computacional está transformando indústrias inteiras. De sistemas de segurança a diagnósticos médicos, os algoritmos de visão computacional estão alcançando níveis de precisão humana."
      },
      author: "Carlos Mendoza",
      date: {
        es: "14 de Agosto, 2025",
        en: "August 14, 2025",
        pt: "14 de Agosto, 2025"
      },
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
      category: {
        es: "Computer Vision",
        en: "Computer Vision",
        pt: "Computer Vision"
      },
      likes: 89,
      comments: 15,
    },
    {
      id: 3,
      title: {
        es: "Procesamiento de Lenguaje Natural: Comunicándonos con las Máquinas",
        en: "Natural Language Processing: Communicating with Machines",
        pt: "Processamento de Linguagem Natural: Comunicando com as Máquinas"
      },
      excerpt: {
        es: "Avances en la comprensión del lenguaje natural por parte de las máquinas.",
        en: "Advances in machine understanding of natural language.",
        pt: "Avanços na compreensão da linguagem natural pelas máquinas."
      },
      content: {
        es: "El NLP está rompiendo barreras en la comunicación humano-máquina. Modelos avanzados como GPT-4 y BERT están creando sistemas que entienden matices, contextos e incluso emociones en el lenguaje humano.",
        en: "NLP is breaking barriers in human-machine communication. Advanced models like GPT-4 and BERT are creating systems that understand nuances, contexts, and even emotions in human language.",
        pt: "O PLN está quebrando barreiras na comunicação humano-máquina. Modelos avançados como GPT-4 e BERT estão criando sistemas que entendem nuances, contextos e até emoções na linguagem humana."
      },
      author: "María López",
      date: {
        es: "13 de Agosto, 2025",
        en: "August 13, 2025",
        pt: "13 de Agosto, 2025"
      },
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
      category: {
        es: "Procesamiento de Lenguaje Natural",
        en: "Natural Language Processing",
        pt: "Processamento de Linguagem Natural"
      },
      likes: 67,
      comments: 12,
    },
    {
      id: 4,
      title: {
        es: "Asistentes Virtuales: Tu Ayudante Personal de IA",
        en: "Virtual Assistants: Your Personal AI Helper",
        pt: "Assistentes Virtuais: Seu Ajudante Pessoal de IA"
      },
      excerpt: {
        es: "La evolución de los asistentes virtuales y cómo están transformando nuestra vida diaria.",
        en: "The evolution of virtual assistants and how they're transforming our daily lives.",
        pt: "A evolução dos assistentes virtuais e como estão transformando nossa vida diária."
      },
      content: {
        es: "Los asistentes virtuales han evolucionado de simples comandos de voz a sistemas predictivos que anticipan necesidades. Integrados en hogares, dispositivos móviles y vehículos, están creando experiencias personalizadas.",
        en: "Virtual assistants have evolved from simple voice commands to predictive systems that anticipate needs. Integrated into homes, mobile devices, and vehicles, they're creating personalized experiences.",
        pt: "Os assistentes virtuais evoluíram de comandos de voz simples para sistemas preditivos que antecipam necessidades. Integrados em lares, dispositivos móveis e veículos, estão criando experiências personalizadas."
      },
      author: "Dr. Elena Ruiz",
      date: {
        es: "12 de Agosto, 2025",
        en: "August 12, 2025",
        pt: "12 de Agosto, 2025"
      },
      image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&h=400&fit=crop",
      category: {
        es: "Asistentes Virtuales",
        en: "Virtual Assistants",
        pt: "Assistentes Virtuais"
      },
      likes: 156,
      comments: 34,
    },
    {
      id: 5,
      title: {
        es: "Deep Learning: El Motor de la Revolución de la IA",
        en: "Deep Learning: The Engine of the AI Revolution",
        pt: "Deep Learning: O Motor da Revolução da IA"
      },
      excerpt: {
        es: "Cómo las redes neuronales profundas están impulsando los avances en inteligencia artificial.",
        en: "How deep neural networks are driving advances in artificial intelligence.",
        pt: "Como as redes neurais profundas estão impulsionando os avanços em inteligência artificial."
      },
      content: {
        es: "El deep learning ha permitido avances impensados hace una década. Desde reconocimiento de imágenes hasta traducción automática, las redes neuronales profundas están resolviendo problemas complejos.",
        en: "Deep learning has enabled advances unthinkable a decade ago. From image recognition to automatic translation, deep neural networks are solving complex problems.",
        pt: "O deep learning permitiu avanços impensáveis há uma década. Desde reconhecimento de imagens até tradução automática, as redes neurais profundas estão resolvendo problemas complexos."
      },
      author: "Roberto Silva",
      date: {
        es: "11 de Agosto, 2025",
        en: "August 11, 2025",
        pt: "11 de Agosto, 2025"
      },
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
      category: {
        es: "Inteligencia Artificial",
        en: "Artificial Intelligence",
        pt: "Inteligência Artificial"
      },
      likes: 98,
      comments: 18,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleArticles((prev) => {
        if (prev.length < articles.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Inteligencia Artificial": "bg-red-500",
      "Artificial Intelligence": "bg-red-500",
      "Inteligência Artificial": "bg-red-500",
      "Computer Vision": "bg-blue-500",
      "Procesamiento de Lenguaje Natural": "bg-green-500",
      "Natural Language Processing": "bg-green-500",
      "Processamento de Linguagem Natural": "bg-green-500",
      "Asistentes Virtuales": "bg-purple-500",
      "Virtual Assistants": "bg-purple-500",
      "Assistentes Virtuais": "bg-purple-500",
    };
    return colors[category] || "bg-gray-500";
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 300; // Approximate width of each card including margin
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  // Handle scroll to update current index
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const cardWidth = 300;
        const newIndex = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(Math.min(newIndex, articles.length - 1));
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, [articles.length]);

  // Función para obtener el texto "Leer más"
  const getReadMoreText = () => {
    const readMoreTexts = {
      es: "Leer más",
      en: "Read more",
      pt: "Leia mais"
    };
    return readMoreTexts[currentLanguage];
  };

  // Función para obtener texto adicional del modal
  const getAdditionalModalText = () => {
    const additionalTexts = {
      es: "Este artículo continúa explorando los aspectos más fascinantes del tema, proporcionando insights profundos y análisis detallados que te ayudarán a comprender mejor las implicaciones y oportunidades que presenta esta área de conocimiento.",
      en: "This article continues to explore the most fascinating aspects of the topic, providing deep insights and detailed analysis that will help you better understand the implications and opportunities presented by this area of knowledge.",
      pt: "Este artigo continua explorando os aspectos mais fascinantes do tópico, fornecendo insights profundos e análises detalhadas que ajudarão você a entender melhor as implicações e oportunidades apresentadas por esta área do conhecimento."
    };
    return additionalTexts[currentLanguage];
  };

  return (
    <div className="min-h-screen bg-transparent w-full mt-12">
      {/* Articles Carousel */}
      <main className="h-screen max-w-5xl mx-auto px-4 sm:px-6 lg:px-2 pb-10 pt-10 relative">
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory space-x-6 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {articles.map((article, index) => (
              <article
                key={article.id}
                className={`flex-shrink-0 w-3/4 max-w-xs snap-center bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer group ${
                  visibleArticles.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  flex: "0 0 auto",
                }}
                onClick={() => setSelectedArticle(article)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title[currentLanguage]}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`${getCategoryColor(
                        article.category[currentLanguage]
                      )} text-white px-2 py-1 rounded-full text-xs font-medium`}
                    >
                      {article.category[currentLanguage]}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {article.title[currentLanguage]}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {article.excerpt[currentLanguage]}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <span>👤</span>
                        <span className="text-xs">{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>📅</span>
                        <span className="text-xs">{article.date[currentLanguage]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-gray-500"></div>
                    <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
                      <span>{getReadMoreText()}</span>
                      <span className="ml-1 transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-1 space-x-2">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-blue-600 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`${currentLanguage === 'es' ? 'Ir al artículo' : currentLanguage === 'en' ? 'Go to article' : 'Ir ao artigo'} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Modal for article details - Reduced to 3/4 size */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white max-w-lg max-h-[80vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title[currentLanguage]}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-3 right-3 bg-white bg-opacity-90 hover:bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center text-lg transition-colors"
                >
                  ✕
                </button>
                <div className="absolute bottom-3 left-3">
                  <span
                    className={`${getCategoryColor(
                      selectedArticle.category[currentLanguage]
                    )} text-white px-2 py-1 rounded-full text-xs font-medium`}
                  >
                    {selectedArticle.category[currentLanguage]}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-900 mb-2">
                  {selectedArticle.title[currentLanguage]}
                </h2>

                <div className="flex items-center space-x-3 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <span>👤</span>
                    <span>{selectedArticle.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>📅</span>
                    <span>{selectedArticle.date[currentLanguage]}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    {selectedArticle.content[currentLanguage]}
                    {" "}
                    {getAdditionalModalText()}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {getAdditionalModalText()}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animated Background Elements - Solo elementos que no sean puntos pulsantes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-pink-400 rounded-full opacity-25 animate-bounce"></div>
        <div className="absolute bottom-48 right-12 w-1 h-1 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>
      </div>
    </div>
  );
};

export default BlogPage;