// contexts/LanguageContext.tsx
import React, { createContext, useContext, useState, type ReactNode} from 'react';

type Language = 'es' | 'en' | 'pt';

interface LanguageContextType {
  currentLanguage: Language;
  setCurrentLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Header
    home: "Inicio",
    products: "Productos",
    services: "Servicios",
    contact: "Contacto",
    
    // HomePage
    heroTitle: "IA para cada desafío, ",
    heroTitleHighlight: "solución",
    heroTitleEnd: "para cada necesidad",

    // ContactPage
    contactTitle: "Hablemos de algo",
    contactTitleHighlight: "genial",
    contactTitleEnd: "juntos",
    
    // ContactForm
    interestTitle: "Tengo interés en ...",
    option1: "opción 1",
    option2: "opción 2", 
    option3: "opción 3",
    option4: "opción 4",
    yourName: "Tu Nombre",
    yourEmail: "Tu Email",
    yourMessage: "Tu Mensaje",
    yourWhatsapp: "Tu Whatsapp/Telegram",
    send: "Enviar",
    
    // ProductsPage
    project: "Proyecto",
    ourProjects: "Nuestros Proyectos",
    viewDemo: "Ver Demo",
    close: "Cerrar",
    
    // BlogPage
    readMore: "Leer más",
    goToArticle: "Ir al artículo",
    
    // Project Descriptions
    doctorTomattoDescription: "Doctor Tomatto es una plataforma de IA que proporciona a los productores de tomate una herramienta mediante procesamiento de imágenes digitales, para la detección temprana de plagas, enfermedades y tratamientos, para actuar a tiempo y mantener una plantación sana y así minimizar la pérdida de producción de tomates debido a plagas y enfermedades.",
    ateneaByteDescription: "Atenea Byte es una plataforma de IA que genera contenido para programas de radio en tiempo real, mediante la utilización de asistentes virtuales, quienes interpretan distintos roles, como ser: Periodista, Astróloga, Humorista, Chef y Asesora de modas y etiqueta, quienes interactúan con el/la conductor(a) del programa de radio.",
    camilaPlejiaDescription: "El potencial de cambiar las vidas de las personas con ciertos tipos de discapacidad es una de las promesas de la inteligencia artificial (IA). En este contexto nace Camila Plejia, un asistente virtual con IA que permite a las personas con movilidad restringida realizar acciones para las que antes hubieran necesitado ayuda externa. Leer mensajes, redactar correos electrónicos, buscar videos o películas, encender luces o poner música, son tareas que las personas con movilidad dan por sentadas, pero que, para alguien con cuadriplejia (parálisis de las extremidades superiores e inferiores) se convierten en misiones imposibles, pero que ahora son posibles gracias a la tecnología. Una persona que está imposibilitada de mover sus manos y piernas, es muy dependiente de otras personas. Para ayudarlas es que se desarrolló esta herramienta que se llama Camila Plejia y que, mediante comandos de voz posibilita que se pueda interactuar con el computador. Es un asistente virtual que ayuda a personas con tetraplejia a mejorar su comunicación con el mundo exterior.",
    
    // ServicesPage
    imageDetection: "Detección y Análisis de Imágenes",
    imageDetectionInfo:"Análisis Médico:Se aplica en la medicina para el análisis de radiografías y resonancias magnéticas.",
    
    nlpProcessing: "Procesamiento de Lenguaje Natural (NLP)",
    nlpProcessingInfo: "Análisis de Sentimientos: Monitoreo de redes sociales, feedback de clientes.",

    training: "Capacitación",

    emotionAnalysis: "Análisis de Emociones",
    emotionAnalysisInfo:"El análisis de emociones es una técnica de inteligencia artificial que permite identificar y Clasificar las emociones humanas expresadas en datos.",

    consulting: "Consultoría",

    sentimentAnalysis: "Análisis de Sentimientos",
    sentimentAnalysisInfo: "Análisis de Sentimientos es una técnica de inteligencia artificial que identifica emociones en textos. Clasifica opiniones como positivas, negativas o neutrales usando procesamiento de lenguaje natural.",

    recommendationSystem: "Sistema de Recomendación",
    recommendationSystemInfo: "Un sistema de recomendación es una aplicación de inteligencia artificial que utiliza algoritmos de filtrado colaborativo o basado en contenido para sugerir productos o servicios personalizados. Estos sistemas analizan datos del comportamiento del usuario para predecir preferencias futuras.",
    
    // Footer
    whatWeDo: "Qué Hacemos",
    whatWeDoContent: "Quiénes somos, qué hacemos, nuestros servicios, nuestros objetivos.",
    technologies: "Tecnologías",
    technologiesContent: "En Tecnópolis.Ai utilizamos cuatro tipos de tecnologías de Inteligencia Artificial (IA).",
    blog: "Blog",
    blogContent: "Publicaciones de artículos recientes sobre las áreas de IA, con temas de interés y actualidad.",
    
    // Common
    email: "info@tecnopolis.ai",
    phone: "+56 9 2909 9893",
    address: "Arica - Chile | Cochabamba - Bolivia",
    selectLanguage: "Seleccionar idioma"
  },
  en: {
    // Header
    home: "Home",
    products: "Products",
    services: "Services",
    contact: "Contact",
    
    // HomePage
    heroTitle: "AI for every challenge, ",
    heroTitleHighlight: "a solution",
    heroTitleEnd: "for every need",
    
    // ContactPage
    contactTitle: "Let's discuss something",
    contactTitleHighlight: "cool",
    contactTitleEnd: "together",
    
    // ContactForm
    interestTitle: "I'm interested in ...",
    option1: "option 1",
    option2: "option 2",
    option3: "option 3", 
    option4: "option 4",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourMessage: "Your Message",
    yourWhatsapp: "Your Whatsapp/Telegram",
    send: "Send",
    
    // ProductsPage
    project: "Project",
    ourProjects: "Our Projects",
    viewDemo: "View Demo",
    close: "Close",
    
    // BlogPage
    readMore: "Read more",
    goToArticle: "Go to article",
    
    // Project Descriptions
    doctorTomattoDescription: "Doctor Tomatto is an AI platform that provides tomato producers with a tool through digital image processing, for early detection of pests, diseases and treatments, to act in time and maintain a healthy plantation and thus minimize the loss of tomato production due to pests and diseases.",
    ateneaByteDescription: "Atenea Byte is an AI platform that generates content for radio programs in real time, through the use of virtual assistants, who interpret different roles, such as: Journalist, Astrologer, Humorist, Chef and Fashion and etiquette advisor, who interact with the radio program host.",
    camilaPlejiaDescription: "The potential to change the lives of people with certain types of disabilities is one of the promises of artificial intelligence (AI). In this context, Camila Plejia is born, a virtual assistant with AI that allows people with restricted mobility to perform actions for which they would have previously needed external help. Reading messages, writing emails, searching for videos or movies, turning on lights or playing music, are tasks that people with mobility take for granted, but that, for someone with quadriplegia (paralysis of the upper and lower extremities) become impossible missions, but which are now possible thanks to technology. A person who is unable to move their hands and legs is very dependent on other people. To help them, this tool called Camila Plejia was developed and that, through voice commands, makes it possible to interact with the computer. It is a virtual assistant that helps people with quadriplegia improve their communication with the outside world.",
    
    // ServicesPage
    imageDetection: "Image Detection and Analysis",
    imageDetectionInfo:"Medical Analysis: It is applied in medicine for the analysis of X-rays and magnetic resonance imaging.",
    
    nlpProcessing: "Natural Language Processing (NLP)",
    nlpProcessingInfo: "Sentiment Analysis: Monitoring of social media and customer feedback.",

    training: "Training",

    emotionAnalysis: "Emotion Analysis",
    emotionAnalysisInfo:"Emotion Analysis: It is an artificial intelligence technique that allows the identification and classification of human emotions expressed in data.",

    consulting: "Consulting",

    sentimentAnalysis: "Sentiment Analysis",
    sentimentAnalysisInfo: "Sentiment Analysis is an artificial intelligence technique that identifies emotions in text. It classifies opinions as positive, negative, or neutral using natural language processing.",

    recommendationSystem: "Recommendation System",
    recommendationSystemInfo: "A recommendation system is an AI application that uses collaborative or content-based filtering algorithms to suggest personalized products or services. These systems analyze user behavior data to predict future preferences.",
    
    // Footer
    whatWeDo: "What We Do",
    whatWeDoContent: "Who we are, what we do, our services, our objectives.",
    technologies: "Technologies",
    technologiesContent: "At Tecnópolis.Ai we use four types of Artificial Intelligence (AI) technologies.",
    blog: "Blog",
    blogContent: "Recent article publications on AI areas, with topics of interest and current events.",
    
    // Common
    email: "info@tecnopolis.ai",
    phone: "+56 9 2909 9893",
    address: "Arica - Chile | Cochabamba - Bolivia",
    selectLanguage: "Select language"
  },
  pt: {
    // Header
    home: "Início",
    products: "Produtos",
    services: "Serviços",
    contact: "Contato",
    
    // HomePage
    heroTitle: "IA para cada desafio, ",
    heroTitleHighlight: "solução",
    heroTitleEnd: "para cada necessidade",
    
    // ContactPage
    contactTitle: "Vamos discutir algo",
    contactTitleHighlight: "legal",
    contactTitleEnd: "juntos",
    
    // ContactForm
    interestTitle: "Tenho interesse em ...",
    option1: "opção 1",
    option2: "opção 2",
    option3: "opção 3",
    option4: "opção 4", 
    yourName: "Seu Nome",
    yourEmail: "Seu Email",
    yourMessage: "Sua Mensagem",
    yourWhatsapp: "Seu Whatsapp/Telegram",
    send: "Enviar",
    
    // ProductsPage
    project: "Projeto",
    ourProjects: "Nossos Projetos",
    viewDemo: "Ver Demo",
    close: "Fechar",
    
    // BlogPage
    readMore: "Leia mais",
    goToArticle: "Ir ao artigo",
    
    // Project Descriptions
    doctorTomattoDescription: "Doctor Tomatto é uma plataforma de IA que fornece aos produtores de tomate uma ferramenta através do processamento de imagens digitais, para detecção precoce de pragas, doenças e tratamentos, para agir a tempo e manter uma plantação saudável e assim minimizar a perda de produção de tomate devido a pragas e doenças.",
    ateneaByteDescription: "Atenea Byte é uma plataforma de IA que gera conteúdo para programas de rádio em tempo real, através do uso de assistentes virtuais, que interpretam diferentes papéis, como: Jornalista, Astróloga, Humorista, Chef e Assessora de moda e etiqueta, que interagem com o/a apresentador(a) do programa de rádio.",
    camilaPlejiaDescription: "O potencial de mudar a vida de pessoas com certos tipos de deficiência é uma das promessas da inteligência artificial (IA). Neste contexto nasce Camila Plejia, um assistente virtual com IA que permite às pessoas com mobilidade restrita realizar ações para as quais anteriormente precisariam de ajuda externa. Ler mensagens, redigir e-mails, procurar vídeos ou filmes, acender luzes ou tocar música, são tarefas que pessoas com mobilidade consideram normais, mas que, para alguém com tetraplegia (paralisia das extremidades superiores e inferiores) se tornam missões impossíveis, mas que agora são possíveis graças à tecnologia. Uma pessoa que não consegue mover suas mãos e pernas é muito dependente de outras pessoas. Para ajudá-las foi desenvolvida esta ferramenta chamada Camila Plejia e que, através de comandos de voz, possibilita a interação com o computador. É um assistente virtual que ajuda pessoas com tetraplegia a melhorar sua comunicação com o mundo exterior.",
    
    // ServicesPage
    imageDetection: "Detecção e Análise de Imagens",
    imageDetectionInfo:"Análise Médica: É aplicada na medicina para a análise de radiografias e ressonâncias magnéticas.",
    
    nlpProcessing: "Processamento de Linguagem Natural (PLN)",
    nlpProcessingInfo: "Análise de Sentimentos: Monitoramento de redes sociais, feedback de clientes.",

    training: "Treinamento",

    emotionAnalysis: "Análise de Emoções",
    emotionAnalysisInfo:"Análise de Emoções: É uma técnica de inteligência artificial que permite identificar e classificar as emoções humanas expressas em dados.",

    consulting: "Consultoria",

    sentimentAnalysis: "Análise de Sentimentos",
    sentimentAnalysisInfo: "Análise de Sentimentos é uma técnica de inteligência artificial que identifica emoções em textos. Classifica opiniões como positivas, negativas ou neutras usando processamento de linguagem natural.",

    recommendationSystem: "Sistema de Recomendação",
    recommendationSystemInfo: "Um sistema de recomendação é uma aplicação de IA que utiliza algoritmos de filtragem colaborativa ou baseada em conteúdo para sugerir produtos ou serviços personalizados. Esses sistemas analisam dados de comportamento do usuário para prever preferências futuras.",
    
    // Footer
    whatWeDo: "O Que Fazemos",
    whatWeDoContent: "Quem somos, o que fazemos, nossos serviços, nossos objetivos.",
    technologies: "Tecnologias",
    technologiesContent: "Na Tecnópolis.Ai utilizamos quatro tipos de tecnologias de Inteligência Artificial (IA).",
    blog: "Blog",
    blogContent: "Publicações de artigos recentes sobre as áreas de IA, com temas de interesse e atualidade.",
    
    // Common
    email: "info@tecnopolis.ai",
    phone: "+56 9 2909 9893",
    address: "Arica - Chile | Cochabamba - Bolívia",
    selectLanguage: "Selecionar idioma"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[currentLanguage][key as keyof typeof translations[typeof currentLanguage]] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};