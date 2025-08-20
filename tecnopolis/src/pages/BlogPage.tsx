import { useState, useEffect, useRef } from "react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  likes: number;
  comments: number;
}

const BlogPage = () => {
  const [visibleArticles, setVisibleArticles] = useState<number[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const articles = [
    {
      id: 1,
      title: "El Futuro de la Inteligencia Artificial",
      excerpt:
        "Exploramos las últimas tendencias en IA y su impacto en nuestra vida cotidiana.",
      content:
        "La inteligencia artificial está revolucionando todos los aspectos de nuestra vida. Desde asistentes virtuales hasta vehículos autónomos, la IA está transformando la manera en que trabajamos, nos comunicamos y vivimos.",
      author: "Ana García",
      date: "15 de Agosto, 2025",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      category: "Inteligencia Artificial",
      likes: 142,
      comments: 23,
    },
    {
      id: 2,
      title: "Computer Vision: La Revolución de las Máquinas que Ven",
      excerpt:
        "Cómo las computadoras están aprendiendo a ver e interpretar el mundo visual.",
      content:
        "El computer vision está transformando industrias enteras. Desde sistemas de seguridad hasta diagnósticos médicos, los algoritmos de visión por computadora están alcanzando niveles de precisión humana.",
      author: "Carlos Mendoza",
      date: "14 de Agosto, 2025",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
      category: "Computer Vision",
      likes: 89,
      comments: 15,
    },
    {
      id: 3,
      title:
        "Procesamiento de Lenguaje Natural: Comunicándonos con las Máquinas",
      excerpt:
        "Avances en la comprensión del lenguaje natural por parte de las máquinas.",
      content:
        "El NLP está rompiendo barreras en la comunicación humano-máquina. Modelos avanzados como GPT-4 y BERT están creando sistemas que entienden matices, contextos e incluso emociones en el lenguaje humano.",
      author: "María López",
      date: "13 de Agosto, 2025",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
      category: "Natural Language Processing",
      likes: 67,
      comments: 12,
    },
    {
      id: 4,
      title: "Asistentes Virtuales: Tu Ayudante Personal de IA",
      excerpt:
        "La evolución de los asistentes virtuales y cómo están transformando nuestra vida diaria.",
      content:
        "Los asistentes virtuales han evolucionado de simples comandos de voz a sistemas predictivos que anticipan necesidades. Integrados en hogares, dispositivos móviles y vehículos, están creando experiencias personalizadas.",
      author: "Dr. Elena Ruiz",
      date: "12 de Agosto, 2025",
      image:
        "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&h=400&fit=crop",
      category: "Virtual Assistants",
      likes: 156,
      comments: 34,
    },
    {
      id: 5,
      title: "Deep Learning: El Motor de la Revolución de la IA",
      excerpt:
        "Cómo las redes neuronales profundas están impulsando los avances en inteligencia artificial.",
      content:
        "El deep learning ha permitido avances impensados hace una década. Desde reconocimiento de imágenes hasta traducción automática, las redes neuronales profundas están resolviendo problemas complejos.",
      author: "Roberto Silva",
      date: "11 de Agosto, 2025",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
      category: "Inteligencia Artificial",
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
      "Computer Vision": "bg-blue-500",
      "Natural Language Processing": "bg-green-500",
      "Virtual Assistants": "bg-purple-500",
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
                    alt={article.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`${getCategoryColor(
                        article.category
                      )} text-white px-2 py-1 rounded-full text-xs font-medium`}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <span>👤</span>
                        <span className="text-xs">{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>📅</span>
                        <span className="text-xs">{article.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-gray-500"></div>
                    <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
                      <span>Leer más</span>
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
                aria-label={`Ir al artículo ${index + 1}`}
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
                  alt={selectedArticle.title}
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
                      selectedArticle.category
                    )} text-white px-2 py-1 rounded-full text-xs font-medium`}
                  >
                    {selectedArticle.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-900 mb-2">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center space-x-3 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <span>👤</span>
                    <span>{selectedArticle.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>📅</span>
                    <span>{selectedArticle.date}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    {selectedArticle.content}
                    Este artículo continúa explorando los aspectos más
                    fascinantes del tema, proporcionando insights profundos y
                    análisis detallados que te ayudarán a comprender mejor las
                    implicaciones y oportunidades que presenta esta área de
                    conocimiento.
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Este artículo continúa explorando los aspectos más
                    fascinantes del tema, proporcionando insights profundos y
                    análisis detallados que te ayudarán a comprender mejor las
                    implicaciones y oportunidades que presenta esta área de
                    conocimiento.
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
