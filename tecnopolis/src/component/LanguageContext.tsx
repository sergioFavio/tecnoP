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
    
    // WhatWeDoPage - Cube faces
    frontFace: "Inicio",
    backFace: "Atrás", 
    rightFace: "Derecha",
    leftFace: "Izquierda",
    topFace: "Arriba",
    bottomFace: "Abajo",
    
    // WhatWeDoPage - Modal titles and content
    frontFaceTitle: "Nuestra Misión",
    frontFaceContent: "En Tecnópolis.AI, nos dedicamos a transformar desafíos complejos en soluciones inteligentes mediante inteligencia artificial. Desarrollamos tecnología de vanguardia que impulsa la innovación y mejora la calidad de vida, creando un futuro donde la IA sea accesible y beneficiosa para todos.",
    
    backFaceTitle: "Nuestra Visión",
    backFaceContent: "Ser líderes en el desarrollo de soluciones de inteligencia artificial que transformen industrias y comunidades. Aspiramos a crear un ecosistema tecnológico donde la IA democratice el acceso al conocimiento y potencie las capacidades humanas en todos los sectores.",
    
    rightFaceTitle: "Nuestros Servicios",
    rightFaceContent: "Ofrecemos desarrollo de sistemas de recomendación, análisis de sentimientos, procesamiento de lenguaje natural, detección de imágenes, consultoría en IA y capacitación especializada. Nuestras soluciones están diseñadas para adaptarse a las necesidades específicas de cada cliente y sector.",
    
    leftFaceTitle: "Nuestro Equipo",
    leftFaceContent: "Contamos con un equipo multidisciplinario de ingenieros en sistemas, científicos de datos, especialistas en machine learning y expertos en UX/UI. Nuestro enfoque colaborativo y pasión por la innovación nos permite entregar soluciones que superan las expectativas.",
    
    topFaceTitle: "Nuestros Logros",
    topFaceContent: "Hemos desarrollado exitosamente proyectos como Doctor Tomatto para detección de plagas, Atenea Byte para generación de contenido radial, y Camila Plejia para asistencia a personas con movilidad reducida. Estos logros reflejan nuestro compromiso con la innovación social.",
    
    bottomFaceTitle: "Contacto",
    bottomFaceContent: "¿Listo para transformar tu negocio con IA? Contáctanos en info@tecnopolis.ai o al +56 9 2909 9893. Tenemos oficinas en Arica, Chile y Cochabamba, Bolivia. Trabajemos juntos para crear soluciones que marquen la diferencia.",
    
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
    
    // CardAnchaPage
    aiGenerativeTitle: "IA Generativa",
    aiGenerativeDescription: "La IA generativa es una rama de la inteligencia artificial que crea contenido nuevo —como texto, imágenes, audio o código— a partir de patrones aprendidos en grandes conjuntos de datos, utilizando modelos avanzados que imitan la creatividad humana con coherencia y realismo.",
    
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
    
    // WhatWeDoPage - Cube faces
    frontFace: "Front",
    backFace: "Back",
    rightFace: "Right", 
    leftFace: "Left",
    topFace: "Top",
    bottomFace: "Bottom",
    
    // WhatWeDoPage - Modal titles and content
    frontFaceTitle: "Our Mission",
    frontFaceContent: "At Tecnópolis.AI, we are dedicated to transforming complex challenges into intelligent solutions through artificial intelligence. We develop cutting-edge technology that drives innovation and improves quality of life, creating a future where AI is accessible and beneficial for everyone.",
    
    backFaceTitle: "Our Vision",
    backFaceContent: "To be leaders in developing artificial intelligence solutions that transform industries and communities. We aspire to create a technological ecosystem where AI democratizes access to knowledge and enhances human capabilities across all sectors.",
    
    rightFaceTitle: "Our Services",
    rightFaceContent: "We offer recommendation systems development, sentiment analysis, natural language processing, image detection, AI consulting, and specialized training. Our solutions are designed to adapt to the specific needs of each client and sector.",
    
    leftFaceTitle: "Our Team",
    leftFaceContent: "We have a multidisciplinary team of systems engineers, data scientists, machine learning specialists, and UX/UI experts. Our collaborative approach and passion for innovation allows us to deliver solutions that exceed expectations.",
    
    topFaceTitle: "Our Achievements",
    topFaceContent: "We have successfully developed projects like Doctor Tomatto for pest detection, Atenea Byte for radio content generation, and Camila Plejia for assistance to people with reduced mobility. These achievements reflect our commitment to social innovation.",
    
    bottomFaceTitle: "Contact",
    bottomFaceContent: "Ready to transform your business with AI? Contact us at info@tecnopolis.ai or +56 9 2909 9893. We have offices in Arica, Chile and Cochabamba, Bolivia. Let's work together to create solutions that make a difference.",
    
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
    
    // CardAnchaPage
    aiGenerativeTitle: "Generative AI",
    aiGenerativeDescription: "Generative AI is a branch of artificial intelligence that creates new content—such as text, images, audio or code—from patterns learned in large datasets, using advanced models that mimic human creativity with coherence and realism.",
    
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
    
    // WhatWeDoPage - Cube faces
    frontFace: "Frente",
    backFace: "Atrás",
    rightFace: "Direita",
    leftFace: "Esquerda", 
    topFace: "Topo",
    bottomFace: "Base",
    
    // WhatWeDoPage - Modal titles and content
    frontFaceTitle: "Nossa Missão",
    frontFaceContent: "Na Tecnópolis.AI, nos dedicamos a transformar desafios complexos em soluções inteligentes através da inteligência artificial. Desenvolvemos tecnologia de ponta que impulsiona a inovação e melhora a qualidade de vida, criando um futuro onde a IA seja acessível e benéfica para todos.",
    
    backFaceTitle: "Nossa Visão",
    backFaceContent: "Ser líderes no desenvolvimento de soluções de inteligência artificial que transformem indústrias e comunidades. Aspiramos criar um ecossistema tecnológico onde a IA democratize o acesso ao conhecimento e potencialize as capacidades humanas em todos os setores.",
    
    rightFaceTitle: "Nossos Serviços",
    rightFaceContent: "Oferecemos desenvolvimento de sistemas de recomendação, análise de sentimentos, processamento de linguagem natural, detecção de imagens, consultoria em IA e treinamento especializado. Nossas soluções são projetadas para se adaptar às necessidades específicas de cada cliente e setor.",
    
    leftFaceTitle: "Nossa Equipe",
    leftFaceContent: "Contamos com uma equipe multidisciplinar de engenheiros de sistemas, cientistas de dados, especialistas em machine learning e experts em UX/UI. Nossa abordagem colaborativa e paixão pela inovação nos permite entregar soluções que superam expectativas.",
    
    topFaceTitle: "Nossos Conquistas",
    topFaceContent: "Desenvolvemos com sucesso projetos como Doctor Tomatto para detecção de pragas, Atenea Byte para geração de conteúdo radial, e Camila Plejia para assistência a pessoas com mobilidade reduzida. Essas conquistas refletem nosso compromisso com a inovação social.",
    
    bottomFaceTitle: "Contato",
    bottomFaceContent: "Pronto para transformar seu negócio com IA? Entre em contato conosco em info@tecnopolis.ai ou +56 9 2909 9893. Temos escritórios em Arica, Chile e Cochabamba, Bolívia. Vamos trabalhar juntos para criar soluções que façam a diferença.",
    
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
    
    // CardAnchaPage
    aiGenerativeTitle: "IA Generativa", 
    aiGenerativeDescription: "A IA generativa é um ramo da inteligência artificial que cria conteúdo novo —como texto, imagens, áudio ou código— a partir de padrões aprendidos em grandes conjuntos de dados, utilizando modelos avançados que imitam a criatividade humana com coerência e realismo.",
    
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