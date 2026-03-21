export type Lang = 'en' | 'es'

export const t = {
  en: {
    nav: {
      services: 'Services',
      process: 'Process',
      pricing: 'Pricing',
      cta: 'Get Started',
    },
    hero: {
      eyebrow: 'AI Systems & Processes',
      headline1: 'Automate the',
      headline2: 'invisible.',
      sub: 'We connect AI to your business. Customer service, reservations, reports and lead follow-up — running automatically, 24 hours a day.',
      cta1: 'Get Started',
      cta2: 'View Process',
      scroll: 'Scroll Down',
    },
    features: [
      {
        icon: '✦',
        title: 'Always On',
        description: 'Automated attention that never sleeps. Your business running 24/7 without you being present.',
      },
      {
        icon: '↗',
        title: 'Zero Friction',
        description: 'Your clients interact naturally. The system handles the rest silently in the background.',
      },
      {
        icon: '◎',
        title: 'Real Results',
        description: 'Every automation tied to a measurable outcome: time saved, leads recovered, reviews generated.',
      },
    ],
    services: {
      eyebrow: 'Services',
      title: 'What we automate.',
      subtitle: 'Modular services. Start with one, scale to all.',
      setup: 'setup',
      requestQuote: '→ Request a quote',
      cards: [
        {
          tag: 'AI Reply Bot',
          subtitle: 'WhatsApp & Instagram automation',
          description: 'Responds to client queries, quotes services and books appointments automatically — in any language, at any hour.',
          price: '$300',
          monthly: '$100/mo',
        },
        {
          tag: 'Reservations System',
          subtitle: 'Automated booking engine',
          description: 'Client selects date and service from WhatsApp or your website. Confirmation sent automatically. Reminder 24h before.',
          price: '$400',
          monthly: '$150/mo',
        },
        {
          tag: 'Daily AI Report',
          subtitle: 'Business intelligence, delivered daily',
          description: "At day's close, receive a WhatsApp summary: revenue, peak hours, avg ticket and one concrete recommendation for tomorrow.",
          price: '$200',
          monthly: '$80/mo',
        },
        {
          tag: 'Review Collection',
          subtitle: 'More reviews, zero effort',
          description: 'After every completed service, client receives an automated message requesting their Google or TripAdvisor review.',
          price: '$150',
          monthly: '$60/mo',
        },
        {
          tag: 'Lead Follow-up',
          subtitle: 'Recover lost sales automatically',
          description: "Client showed interest but didn't buy? Automated follow-up message sent 24 hours later. No manual effort required.",
          price: '$250',
          monthly: '$80/mo',
        },
        {
          tag: 'Custom Flow',
          subtitle: 'Have a specific process to automate?',
          description: 'We analyze, design and build it to fit your business exactly.',
        },
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'How it works.',
      steps: [
        {
          number: '01',
          title: 'Diagnosis',
          description: 'Free 30-minute call. We map your business processes and identify exactly what can be automated and what the impact would be.',
        },
        {
          number: '02',
          title: 'Proposal',
          description: 'Clear proposal with exact services, cost and delivery timeline. No fine print.',
        },
        {
          number: '03',
          title: 'Integration',
          description: "We build and integrate everything. You don't need to know anything technical — we handle it all.",
        },
      ],
    },
    cta: {
      headline1: 'Ready to make it',
      headline2: 'automatic?',
      sub: 'Start with a free diagnosis call. No commitment, no technical knowledge required.',
      button: 'Start Your Diagnosis',
    },
    footer: {
      services: 'Services',
      privacy: 'Privacy',
      contact: 'Contact',
      copy: '© 2025 Blnk. All rights reserved.',
    },
  },

  es: {
    nav: {
      services: 'Servicios',
      process: 'Proceso',
      pricing: 'Precios',
      cta: 'Empezar',
    },
    hero: {
      eyebrow: 'Sistemas & Procesos con IA',
      headline1: 'Automatiza lo',
      headline2: 'invisible.',
      sub: 'Conectamos la IA a tu negocio. Atención al cliente, reservas, reportes y seguimiento de prospectos — funcionando automáticamente, 24 horas al día.',
      cta1: 'Empezar',
      cta2: 'Ver Proceso',
      scroll: 'Bajar',
    },
    features: [
      {
        icon: '✦',
        title: 'Siempre Activo',
        description: 'Atención automatizada que nunca duerme. Tu negocio funcionando 24/7 sin que tengas que estar presente.',
      },
      {
        icon: '↗',
        title: 'Sin Fricción',
        description: 'Tus clientes interactúan de forma natural. El sistema maneja el resto en silencio, en segundo plano.',
      },
      {
        icon: '◎',
        title: 'Resultados Reales',
        description: 'Cada automatización vinculada a un resultado medible: tiempo ahorrado, prospectos recuperados, reseñas generadas.',
      },
    ],
    services: {
      eyebrow: 'Servicios',
      title: 'Qué automatizamos.',
      subtitle: 'Servicios modulares. Empieza con uno, escala a todos.',
      setup: 'setup',
      requestQuote: '→ Solicitar cotización',
      cards: [
        {
          tag: 'Bot de Respuestas IA',
          subtitle: 'Automatización de WhatsApp & Instagram',
          description: 'Responde consultas, cotiza servicios y agenda citas automáticamente — en cualquier idioma, a cualquier hora.',
          price: '$300',
          monthly: '$100/mes',
        },
        {
          tag: 'Sistema de Reservas',
          subtitle: 'Motor de reservas automatizado',
          description: 'El cliente elige fecha y servicio desde WhatsApp o tu sitio web. Confirmación enviada automáticamente. Recordatorio 24h antes.',
          price: '$400',
          monthly: '$150/mes',
        },
        {
          tag: 'Reporte Diario IA',
          subtitle: 'Inteligencia de negocio, entregada cada día',
          description: 'Al cierre del día, recibe un resumen por WhatsApp: ingresos, horas pico, ticket promedio y una recomendación concreta para mañana.',
          price: '$200',
          monthly: '$80/mes',
        },
        {
          tag: 'Recolección de Reseñas',
          subtitle: 'Más reseñas, cero esfuerzo',
          description: 'Tras cada servicio completado, el cliente recibe un mensaje automático solicitando su reseña en Google o TripAdvisor.',
          price: '$150',
          monthly: '$60/mes',
        },
        {
          tag: 'Seguimiento de Prospectos',
          subtitle: 'Recupera ventas perdidas automáticamente',
          description: '¿El cliente mostró interés pero no compró? Mensaje de seguimiento automático enviado 24 horas después. Sin esfuerzo manual.',
          price: '$250',
          monthly: '$80/mes',
        },
        {
          tag: 'Flujo Personalizado',
          subtitle: '¿Tienes un proceso específico para automatizar?',
          description: 'Lo analizamos, diseñamos y construimos exactamente para tu negocio.',
        },
      ],
    },
    process: {
      eyebrow: 'Proceso',
      title: 'Cómo funciona.',
      steps: [
        {
          number: '01',
          title: 'Diagnóstico',
          description: 'Llamada gratuita de 30 minutos. Mapeamos tus procesos e identificamos exactamente qué se puede automatizar y cuál sería el impacto.',
        },
        {
          number: '02',
          title: 'Propuesta',
          description: 'Propuesta clara con servicios exactos, costo y plazo de entrega. Sin letra pequeña.',
        },
        {
          number: '03',
          title: 'Integración',
          description: 'Construimos e integramos todo. No necesitas saber nada técnico — nosotros nos encargamos de todo.',
        },
      ],
    },
    cta: {
      headline1: '¿Listo para hacerlo',
      headline2: 'automático?',
      sub: 'Empieza con una llamada de diagnóstico gratuita. Sin compromiso, sin conocimientos técnicos.',
      button: 'Iniciar Mi Diagnóstico',
    },
    footer: {
      services: 'Servicios',
      privacy: 'Privacidad',
      contact: 'Contacto',
      copy: '© 2025 Blnk. Todos los derechos reservados.',
    },
  },
}
