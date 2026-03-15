export type Lang = 'en' | 'es'

export const t = {
  en: {
    nav: {
      services: 'SERVICES',
      process: 'PROCESS',
      caseStudy: 'CASE STUDY',
      getStarted: 'GET STARTED',
    },
    hero: {
      line1: 'WE',
      line2: 'AUTOMATE.',
      line3: 'YOU GROW.',
      sub: 'Deploy elite AI systems that replace repetitive tasks with pure efficiency. Less noise, more scale.',
      cta: 'See how',
    },
    services: {
      title: 'OUR ARSENAL',
      items: [
        {
          num: '01',
          name: 'AI CHATBOTS',
          desc: 'Human-like conversational agents that sell and support 24/7 without getting tired.',
        },
        {
          num: '02',
          name: 'WORKFLOW AUTOMATION',
          desc: 'Connecting your stack so data moves where it needs to go, while you sleep.',
        },
        {
          num: '03',
          name: 'BI REPORTS',
          desc: 'Real-time dashboards that turn messy data into clear business decisions.',
        },
        {
          num: '04',
          name: 'LEAD CAPTURE',
          desc: 'Automatic identification and nurturing of high-intent prospects.',
        },
      ],
    },
    process: {
      title: 'THE METHOD',
      steps: [
        { num: '1', name: 'DISCOVER', desc: 'We audit your current chaos and find the leaks.' },
        { num: '2', name: 'BUILD', desc: 'We craft the custom AI logic tailored to your goals.' },
        { num: '3', name: 'SCALE', desc: 'Launch, monitor, and watch your margins expand.' },
      ],
    },
    caseStudy: {
      badge: 'REAL WORLD IMPACT',
      title: 'THE AI SOUS-CHEF',
      body: 'We built a daily intelligence report for a high-volume restaurant chain. Every morning, the CEO gets a breakdown of food waste, labor costs, and sentiment analysis from 500+ reviews—sent automatically at 6:00 AM.',
      stat1: '94%',
      stat1Label: 'ACCURACY',
      stat2: '-15h',
      stat2Label: 'WEEKLY HOURS',
    },
    cta: {
      title: "LET'S TALK.",
      button: 'UNLEASH THE AI',
    },
    footer: {
      copy: '© 2024 VORTT AI AUTOMATION. ALL SYSTEMS OPERATIONAL.',
      linkedin: 'LINKEDIN',
      twitter: 'TWITTER',
    },
  },
  es: {
    nav: {
      services: 'SERVICIOS',
      process: 'PROCESO',
      caseStudy: 'CASO DE ESTUDIO',
      getStarted: 'EMPEZAR',
    },
    hero: {
      line1: 'NOSOTROS',
      line2: 'AUTOMATIZAMOS.',
      line3: 'TÚ CRECES.',
      sub: 'Desplegamos sistemas de IA de élite que reemplazan tareas repetitivas con pura eficiencia. Menos ruido, más escala.',
      cta: 'Ver cómo',
    },
    services: {
      title: 'NUESTRO ARSENAL',
      items: [
        {
          num: '01',
          name: 'CHATBOTS IA',
          desc: 'Agentes conversacionales que venden y dan soporte 24/7 sin cansarse.',
        },
        {
          num: '02',
          name: 'AUTOMATIZACIÓN DE FLUJOS',
          desc: 'Conectamos tu stack para que los datos fluyan donde deben, mientras duermes.',
        },
        {
          num: '03',
          name: 'REPORTES BI',
          desc: 'Dashboards en tiempo real que convierten datos caóticos en decisiones claras.',
        },
        {
          num: '04',
          name: 'CAPTURA DE LEADS',
          desc: 'Identificación y nutrición automática de prospectos de alta intención.',
        },
      ],
    },
    process: {
      title: 'EL MÉTODO',
      steps: [
        { num: '1', name: 'DESCUBRIR', desc: 'Auditamos tu caos actual y encontramos las fugas.' },
        { num: '2', name: 'CONSTRUIR', desc: 'Creamos la lógica de IA personalizada a tus objetivos.' },
        { num: '3', name: 'ESCALAR', desc: 'Lanzamos, monitoreamos y vemos crecer tus márgenes.' },
      ],
    },
    caseStudy: {
      badge: 'IMPACTO REAL',
      title: 'EL SOUS-CHEF IA',
      body: 'Construimos un reporte de inteligencia diaria para una cadena de restaurantes de alto volumen. Cada mañana, el CEO recibe un resumen de desperdicio de comida, costos laborales y análisis de sentimiento de 500+ reseñas—enviado automáticamente a las 6:00 AM.',
      stat1: '94%',
      stat1Label: 'PRECISIÓN',
      stat2: '-15h',
      stat2Label: 'HORAS SEMANALES',
    },
    cta: {
      title: 'HABLEMOS.',
      button: 'LIBERAR LA IA',
    },
    footer: {
      copy: '© 2024 VORTT AI AUTOMATION. TODOS LOS SISTEMAS OPERATIVOS.',
      linkedin: 'LINKEDIN',
      twitter: 'TWITTER',
    },
  },
} as const
