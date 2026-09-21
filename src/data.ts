export type Language = 'en' | 'es'

export type LocalizedText = Record<Language, string>

export type Capability = {
  number: string
  title: LocalizedText
  description: LocalizedText
  technologies: string[]
  status?: LocalizedText
}

export type WorkCase = {
  title: LocalizedText
  category: LocalizedText
  status: LocalizedText
  summary: LocalizedText
  context: LocalizedText
  contribution: LocalizedText
  approach: LocalizedText
  result: LocalizedText
  evidence: LocalizedText
  technologies: string[]
  kind: 'professional' | 'learning'
}

export type ExperienceItem = {
  period: LocalizedText
  role: LocalizedText
  company: string
  summary: LocalizedText
  details: LocalizedText[]
}

export const profile = {
  name: 'Gerardo Alfonso',
  email: 'gerardoalfonso_@hotmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/gerardo-alfonso',
  location: {
    en: 'El Salvador · Remote',
    es: 'El Salvador · Remoto',
  } satisfies LocalizedText,
  role: {
    en: 'Data Engineer',
    es: 'Ingeniero de Datos',
  } satisfies LocalizedText,
}

export const siteCopy = {
  meta: {
    title: {
      en: 'Gerardo Alfonso — Data Engineer · Azure · Applied AI',
      es: 'Gerardo Alfonso — Ingeniería de Datos · Azure · IA Aplicada',
    },
    description: {
      en: 'Portfolio of Gerardo Alfonso, a Data Engineer building reliable Azure data platforms and expanding into applied AI.',
      es: 'Portafolio de Gerardo Alfonso, Ingeniero de Datos que construye plataformas confiables en Azure y evoluciona hacia la IA aplicada.',
    },
  },
  navigation: {
    label: { en: 'Primary navigation', es: 'Navegación principal' },
    home: { en: 'Home', es: 'Inicio' },
    expertise: { en: 'Expertise', es: 'Especialidad' },
    work: { en: 'Selected work', es: 'Proyectos' },
    experience: { en: 'Experience', es: 'Experiencia' },
    contact: { en: 'Contact', es: 'Contacto' },
    language: { en: 'Choose language', es: 'Elegir idioma' },
  },
  accessibility: {
    skip: { en: 'Skip to content', es: 'Ir al contenido' },
    highlights: { en: 'Professional highlights', es: 'Aspectos profesionales destacados' },
    technologies: { en: 'Technologies and practices', es: 'Tecnologías y prácticas' },
  },
  hero: {
    badge: { en: 'Data Engineer · Azure · Applied AI', es: 'Ingeniería de Datos · Azure · IA Aplicada' },
    headlineLead: {
      en: 'I build reliable data platforms',
      es: 'Construyo plataformas de datos confiables',
    },
    headlineAccent: {
      en: 'and the foundations behind intelligent products.',
      es: 'y las bases para crear productos inteligentes.',
    },
    introduction: {
      en: 'Data Engineer with a software engineering foundation and hands-on experience building Azure data platforms, ETL/ELT workflows, and analytics solutions. I’m now extending that foundation into applied AI, connecting trustworthy data with intelligent systems.',
      es: 'Ingeniero de Datos con una base en ingeniería de software y experiencia construyendo plataformas de datos en Azure, flujos ETL/ELT y soluciones analíticas. Ahora extiendo esa experiencia hacia la IA aplicada, conectando datos confiables con sistemas inteligentes.',
    },
    pathLabel: { en: 'Professional progression', es: 'Evolución profesional' },
    path: [
      { en: 'Software', es: 'Software' },
      { en: 'Data platforms', es: 'Plataformas de datos' },
      { en: 'Intelligent systems', es: 'Sistemas inteligentes' },
    ],
    primaryAction: { en: 'Explore my work', es: 'Ver proyectos' },
    secondaryAction: { en: 'Let’s connect', es: 'Contactar' },
    proof: [
      {
        value: '4+',
        label: { en: 'Years across software and data engineering', es: 'Años entre ingeniería de software y datos' },
      },
      {
        value: 'Azure',
        label: { en: 'Hands-on cloud data experience', es: 'Experiencia práctica con datos en la nube' },
      },
      {
        value: 'BSc + PG',
        label: { en: 'Systems Engineering and Business Data Science', es: 'Ingeniería de Sistemas y Business Data Science' },
      },
    ],
  },
  flow: {
    ariaLabel: {
      en: 'A path from source systems through a reliable data platform to analytics and AI',
      es: 'Un recorrido desde sistemas de origen, pasando por una plataforma confiable, hasta analítica e IA',
    },
    eyebrow: { en: 'Data-to-intelligence path', es: 'Ruta de datos a inteligencia' },
    principle: { en: 'Built on trust', es: 'Construido sobre confianza' },
    sourcesLabel: { en: 'Sources', es: 'Fuentes' },
    sources: [
      { code: 'SYS', en: 'Business systems', es: 'Sistemas de negocio' },
      { code: 'API', en: 'Services', es: 'Servicios' },
      { code: 'DB', en: 'Databases', es: 'Bases de datos' },
    ],
    platformLabel: { en: 'Engineer', es: 'Ingeniería' },
    platform: { en: 'Reliable data platform', es: 'Plataforma de datos confiable' },
    platformNote: { en: 'Ingest · Transform · Govern', es: 'Ingestar · Transformar · Gobernar' },
    outcomesLabel: { en: 'Activate', es: 'Activar' },
    outcomes: { en: 'Analytics & AI', es: 'Analítica e IA' },
    outcomesNote: { en: 'Decisions · Products · Learning', es: 'Decisiones · Productos · Aprendizaje' },
    stages: [
      { en: 'Connect', es: 'Conectar' },
      { en: 'Make trustworthy', es: 'Hacer confiable' },
      { en: 'Create value', es: 'Crear valor' },
    ],
  },
  expertise: {
    eyebrow: { en: 'Expertise', es: 'Especialidad' },
    title: { en: 'Reliable data first. Intelligent systems next.', es: 'Primero datos confiables. Después, sistemas inteligentes.' },
    description: {
      en: 'I work across the data lifecycle—from cloud architecture and transformation to dependable delivery—while building the foundation for applied AI.',
      es: 'Trabajo a lo largo del ciclo de vida del dato: desde arquitectura cloud y transformación hasta una entrega confiable, mientras construyo la base para la IA aplicada.',
    },
  },
  work: {
    eyebrow: { en: 'Selected work', es: 'Trabajo seleccionado' },
    title: { en: 'Evidence over claims.', es: 'Evidencia antes que promesas.' },
    description: {
      en: 'Professional case studies are anonymized to respect confidentiality. Learning work is labeled clearly and shared without production claims.',
      es: 'Los casos profesionales están anonimizados para respetar la confidencialidad. Los proyectos de aprendizaje se identifican con claridad y sin atribuirles resultados de producción.',
    },
    fields: {
      context: { en: 'Context', es: 'Contexto' },
      contribution: { en: 'My contribution', es: 'Mi contribución' },
      approach: { en: 'Technical approach', es: 'Enfoque técnico' },
      result: { en: 'Result or learning', es: 'Resultado o aprendizaje' },
      evidence: { en: 'Evidence', es: 'Evidencia' },
    },
  },
  experience: {
    eyebrow: { en: 'Experience', es: 'Experiencia' },
    title: {
      en: 'From software systems to modern data platforms.',
      es: 'De sistemas de software a plataformas modernas de datos.',
    },
    description: {
      en: 'A progression shaped by enterprise software, analytics, data integration, and cloud engineering—not a collection of disconnected tools.',
      es: 'Una evolución construida con software empresarial, analítica, integración de datos e ingeniería cloud; no una colección de herramientas aisladas.',
    },
    learningEyebrow: { en: 'Continuous learning', es: 'Aprendizaje continuo' },
    learningTitle: { en: 'Building the next layer deliberately.', es: 'Construyendo la siguiente capa con intención.' },
  },
  contact: {
    eyebrow: { en: 'Start a conversation', es: 'Iniciemos una conversación' },
    title: {
      en: 'Building a data platform, modernizing pipelines, or exploring an AI use case?',
      es: '¿Construyes una plataforma de datos, modernizas pipelines o exploras un caso de IA?',
    },
    body: {
      en: 'I’m interested in thoughtful engineering challenges where reliable data can become a foundation for better decisions and intelligent products.',
      es: 'Me interesan los retos de ingeniería donde los datos confiables pueden convertirse en la base de mejores decisiones y productos inteligentes.',
    },
    action: { en: 'Let’s talk', es: 'Hablemos' },
    email: { en: 'Email', es: 'Correo' },
  },
  footer: {
    statement: { en: 'Reliable data. Thoughtful engineering. Intelligent possibilities.', es: 'Datos confiables. Ingeniería con intención. Posibilidades inteligentes.' },
    top: { en: 'Back to top', es: 'Volver arriba' },
  },
}

export const capabilities: Capability[] = [
  {
    number: '01',
    title: { en: 'Cloud Data Platforms', es: 'Plataformas de Datos en la Nube' },
    description: {
      en: 'Designing Azure data foundations that turn complex sources into usable, governed, and scalable data products.',
      es: 'Diseño de plataformas base en Azure que convierten fuentes complejas en productos de datos utilizables, gobernables y escalables.',
    },
    technologies: ['Azure Data Factory', 'Data Lake', 'Databricks', 'Delta Lake', 'Lakehouse'],
  },
  {
    number: '02',
    title: { en: 'Data Engineering', es: 'Ingeniería de Datos' },
    description: {
      en: 'Building the complete path from ingestion and transformation to models that support analytics and business needs.',
      es: 'Construcción del recorrido completo, desde la ingesta y transformación hasta modelos que respaldan analítica y necesidades de negocio.',
    },
    technologies: ['ETL / ELT', 'Spark', 'Python', 'SQL', 'Data Modeling'],
  },
  {
    number: '03',
    title: { en: 'Reliability & Delivery', es: 'Confiabilidad y Entrega' },
    description: {
      en: 'Treating pipelines as production systems that must be diagnosable, maintainable, and safe to evolve.',
      es: 'Tratar los pipelines como sistemas de producción que deben poder diagnosticarse, mantenerse y evolucionar de forma segura.',
    },
    technologies: ['Root Cause Analysis', 'CI / CD', 'Azure DevOps', 'Git', 'Optimization'],
  },
  {
    number: '04',
    title: { en: 'Applied AI', es: 'IA Aplicada' },
    description: {
      en: 'Applying data engineering discipline to hands-on AI learning: better data, reproducible processes, and production-aware foundations.',
      es: 'Aplicar la disciplina de ingeniería de datos al aprendizaje práctico de IA: mejores datos, procesos reproducibles y bases orientadas a producción.',
    },
    technologies: ['Active learning', 'Data foundations', 'Responsible prototyping'],
    status: { en: 'In progress', es: 'En construcción' },
  },
]

export const workCases: WorkCase[] = [
  {
    title: { en: 'Azure Data Platform & Pipelines', es: 'Plataforma de Datos y Pipelines en Azure' },
    category: { en: 'Professional case', es: 'Caso profesional' },
    status: { en: 'Anonymized', es: 'Anonimizado' },
    summary: {
      en: 'Building and operating cloud data workflows that connect business sources with dependable analytical data.',
      es: 'Construcción y operación de flujos de datos cloud que conectan fuentes de negocio con información analítica confiable.',
    },
    context: {
      en: 'Enterprise teams need structured and semi-structured data to move reliably from multiple operational sources into analytical workflows.',
      es: 'Los equipos empresariales necesitan mover datos estructurados y semiestructurados desde múltiples fuentes operativas hacia flujos analíticos confiables.',
    },
    contribution: {
      en: 'Design and optimize pipelines, maintain ETL/ELT processes, build Spark transformations, and investigate discrepancies or process failures.',
      es: 'Diseñar y optimizar pipelines, mantener procesos ETL/ELT, construir transformaciones con Spark e investigar discrepancias o fallas de proceso.',
    },
    approach: {
      en: 'Azure-native orchestration and storage, Databricks notebooks, relational and NoSQL data stores, plus CI/CD through Azure DevOps.',
      es: 'Orquestación y almacenamiento nativos de Azure, notebooks de Databricks, bases relacionales y NoSQL, además de CI/CD con Azure DevOps.',
    },
    result: {
      en: 'More consistent data delivery and a stronger operational foundation for analytics and business requirements.',
      es: 'Una entrega de datos más consistente y una base operativa más sólida para analítica y necesidades de negocio.',
    },
    evidence: {
      en: 'Based on current Data Engineer responsibilities. Business details are intentionally withheld.',
      es: 'Basado en responsabilidades actuales como Ingeniero de Datos. Los detalles de negocio se omiten de forma intencional.',
    },
    technologies: ['Azure Data Factory', 'Data Lake', 'Databricks', 'Spark', 'Delta Lake', 'Azure SQL', 'Cosmos DB'],
    kind: 'professional',
  },
  {
    title: { en: 'Data Warehouse Migration & Automation', es: 'Migración y Automatización de Data Warehouse' },
    category: { en: 'Professional case', es: 'Caso profesional' },
    status: { en: 'Anonymized', es: 'Anonimizado' },
    summary: {
      en: 'Modernizing enterprise data workflows while preserving the reporting and analytical needs they support.',
      es: 'Modernización de flujos empresariales de datos preservando las necesidades de reportes y analítica que respaldan.',
    },
    context: {
      en: 'On-premise data warehouse and reporting workloads required migration, integration, and performance-focused database work.',
      es: 'Las cargas de Data Warehouse y reportería on-premise requerían migración, integración y trabajo de base de datos orientado al rendimiento.',
    },
    contribution: {
      en: 'Developed SQL solutions, supported integrations, and contributed to SQL Server migration initiatives with SSIS and Python automation.',
      es: 'Desarrollé soluciones SQL, apoyé integraciones y contribuí a iniciativas de migración de SQL Server con SSIS y automatización en Python.',
    },
    approach: {
      en: 'Combined stored procedures, performance optimization, SSIS workflows, Python automation, and business-facing reporting in Tableau and Power BI.',
      es: 'Combiné procedimientos almacenados, optimización de rendimiento, flujos SSIS, automatización con Python y reportería en Tableau y Power BI.',
    },
    result: {
      en: 'Improved data consistency, reliability, and the connection between enterprise systems and decision-making workflows.',
      es: 'Mejoró la consistencia y confiabilidad de los datos, además de la conexión entre sistemas empresariales y procesos de decisión.',
    },
    evidence: {
      en: 'Based on Software Engineer experience within the BAC Credomatic corporate environment.',
      es: 'Basado en experiencia como Ingeniero de Software dentro del entorno corporativo de BAC Credomatic.',
    },
    technologies: ['SQL Server', 'SSIS', 'Python', '.NET Core', 'Tableau', 'Power BI'],
    kind: 'professional',
  },
  {
    title: { en: 'Applied AI Exploration', es: 'Exploración de IA Aplicada' },
    category: { en: 'Learning build', es: 'Proyecto de aprendizaje' },
    status: { en: 'Currently building', es: 'En construcción' },
    summary: {
      en: 'Turning an established data engineering foundation into a transparent, demonstrable path toward applied AI.',
      es: 'Convertir una base consolidada en ingeniería de datos en un camino transparente y demostrable hacia la IA aplicada.',
    },
    context: {
      en: 'Intelligent products still depend on trustworthy data, clear problem framing, and engineering practices that can survive beyond a demo.',
      es: 'Los productos inteligentes siguen dependiendo de datos confiables, problemas bien definidos y prácticas de ingeniería que sobrevivan más allá de una demo.',
    },
    contribution: {
      en: 'Define small, practical experiments and document the problem, data needs, architecture, and learning before presenting a solution as production-ready.',
      es: 'Definir experimentos pequeños y prácticos, documentando el problema, los datos, la arquitectura y el aprendizaje antes de presentar una solución como lista para producción.',
    },
    approach: {
      en: 'Start from data quality and reproducibility, then evaluate where AI adds real value instead of adding it as a label.',
      es: 'Partir de calidad de datos y reproducibilidad, y luego evaluar dónde la IA aporta valor real en lugar de usarla solo como etiqueta.',
    },
    result: {
      en: 'Current focus: turn active learning into a reproducible build that can be examined, tested, and discussed honestly.',
      es: 'Enfoque actual: convertir el aprendizaje activo en una construcción reproducible que pueda revisarse, probarse y discutirse con honestidad.',
    },
    evidence: {
      en: 'Work in progress. A repository will be shared when the build is ready to support its claims.',
      es: 'Trabajo en progreso. El repositorio se compartirá cuando la construcción pueda respaldar sus afirmaciones.',
    },
    technologies: ['Python', 'Data foundations', 'Applied AI', 'Reproducible learning'],
    kind: 'learning',
  },
]

export const experience: ExperienceItem[] = [
  {
    period: { en: 'Feb 2023 — Present', es: 'Feb 2023 — Actualidad' },
    role: { en: 'Data Engineer', es: 'Ingeniero de Datos' },
    company: 'BAC Credomatic · El Salvador',
    summary: {
      en: 'Building the Azure data layer that supports analytics and business requirements.',
      es: 'Construcción de la capa de datos en Azure que respalda analítica y necesidades de negocio.',
    },
    details: [
      { en: 'Design and optimize Azure data pipelines and ETL/ELT workflows.', es: 'Diseño y optimización de pipelines y flujos ETL/ELT en Azure.' },
      { en: 'Build transformations with Databricks notebooks and Spark.', es: 'Construcción de transformaciones con notebooks de Databricks y Spark.' },
      { en: 'Work across structured, semi-structured, relational, and NoSQL data.', es: 'Trabajo con datos estructurados, semiestructurados, relacionales y NoSQL.' },
      { en: 'Support operational reliability through root cause analysis and CI/CD.', es: 'Soporte a la confiabilidad operativa mediante análisis de causa raíz y CI/CD.' },
    ],
  },
  {
    period: { en: 'Nov 2021 — Feb 2023', es: 'Nov 2021 — Feb 2023' },
    role: { en: 'Software Engineer', es: 'Ingeniero de Software' },
    company: 'BAC Credomatic · via Helpdesk El Salvador',
    summary: {
      en: 'Connecting enterprise software, data warehousing, and business intelligence.',
      es: 'Conexión entre software empresarial, Data Warehousing e inteligencia de negocios.',
    },
    details: [
      { en: 'Developed enterprise applications and performance-focused SQL solutions.', es: 'Desarrollo de aplicaciones empresariales y soluciones SQL orientadas al rendimiento.' },
      { en: 'Maintained on-premise data warehouse and integration workflows.', es: 'Mantenimiento de Data Warehouse on-premise y flujos de integración.' },
      { en: 'Supported SQL Server migrations with SSIS and Python automation.', es: 'Apoyo a migraciones de SQL Server con SSIS y automatización en Python.' },
      { en: 'Built analytical reports with Tableau and Power BI.', es: 'Construcción de reportes analíticos con Tableau y Power BI.' },
    ],
  },
]

export const learningHighlights = [
  {
    code: 'PG',
    title: { en: 'Business Data Science', es: 'Business Data Science' },
    detail: { en: 'Postgraduate degree · ISEADE–FEPADE · 2024', es: 'Postgrado · ISEADE–FEPADE · 2024' },
  },
  {
    code: 'BSc',
    title: { en: 'Systems & Computer Engineering', es: 'Ingeniería en Sistemas y Computación' },
    detail: { en: 'Bachelor’s degree · Universidad Tecnológica de El Salvador · 2023', es: 'Licenciatura · Universidad Tecnológica de El Salvador · 2023' },
  },
  {
    code: 'EN',
    title: { en: 'Professional English', es: 'Inglés profesional' },
    detail: { en: 'Ongoing study · Academia Europea', es: 'Estudio en curso · Academia Europea' },
  },
  {
    code: 'AI',
    title: { en: 'Applied AI', es: 'IA aplicada' },
    detail: { en: 'Active hands-on learning direction', es: 'Línea activa de aprendizaje práctico' },
  },
]
