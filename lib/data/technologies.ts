export interface TechItem {
  name: string
  description?: string
  icon?: string
}

export interface TechCategory {
  category: string
  description: string
  items: TechItem[]
}

export const technologiesData: TechCategory[] = [
  {
    category: 'Frontend & Web',
    description: 'Fast, responsive, and accessible client-side architectures designed for high conversion and speed.',
    items: [
      { name: 'Next.js', description: 'React framework for server-rendered and static web applications' },
      { name: 'React', description: 'Declarative component-based user interface library' },
      { name: 'TypeScript', description: 'Strongly-typed JavaScript for error-free maintainable scale' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework for modern responsive design' },
      { name: 'Vue.js', description: 'Progressive framework for intuitive single-page interfaces' },
      { name: 'Angular', description: 'Enterprise-grade TypeScript web application framework' },
    ],
  },
  {
    category: 'Backend & APIs',
    description: 'High-throughput, secure microservices and distributed application backends.',
    items: [
      { name: 'Node.js', description: 'Asynchronous event-driven JavaScript runtime' },
      { name: 'Python (FastAPI / Django)', description: 'Clean, rapid API development and complex backend logic' },
      { name: 'Java (Spring Boot)', description: 'Enterprise robust backend services and transaction security' },
      { name: '.NET Core', description: 'High-performance cross-platform enterprise framework' },
      { name: 'PHP (Laravel)', description: 'Elegant MVC framework for rapid web applications' },
      { name: 'GraphQL / REST', description: 'Modern schema-driven and stateless API protocols' },
    ],
  },
  {
    category: 'Mobile Applications',
    description: 'Silky smooth mobile experiences across iOS and Android smartphones and tablets.',
    items: [
      { name: 'React Native', description: 'Cross-platform native mobile apps with shared React codebase' },
      { name: 'Flutter', description: 'High-performance multi-platform UI toolkit compiled to native code' },
      { name: 'Kotlin (Android)', description: 'Modern native Android mobile development' },
      { name: 'Swift (iOS)', description: 'Native Apple iOS and iPadOS engineering' },
      { name: 'Firebase', description: 'Real-time database, auth, and cloud messaging for mobile' },
    ],
  },
  {
    category: 'Databases & Cache',
    description: 'Resilient data storage, low-latency caches, and enterprise data models.',
    items: [
      { name: 'PostgreSQL', description: 'Advanced open-source relational database with pgvector' },
      { name: 'MySQL', description: 'Reliable transactional relational database management system' },
      { name: 'MongoDB', description: 'Flexible document-based NoSQL database for unstructured data' },
      { name: 'Redis', description: 'In-memory key-value data store for caching and pub/sub queues' },
      { name: 'Supabase', description: 'Scalable PostgreSQL backend with instant realtime and row-level security' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    description: 'Automated CI/CD release pipelines and resilient multi-region cloud infrastructure.',
    items: [
      { name: 'Amazon Web Services (AWS)', description: 'Comprehensive cloud computing infrastructure' },
      { name: 'Google Cloud Platform (GCP)', description: 'Data-intensive, AI-ready cloud infrastructure' },
      { name: 'Microsoft Azure', description: 'Enterprise cloud services and Active Directory integration' },
      { name: 'Docker & Kubernetes', description: 'Containerized deployment and automated orchestration' },
      { name: 'Terraform', description: 'Infrastructure as code for reproducible cloud provisioning' },
      { name: 'GitHub Actions', description: 'Automated test, lint, and zero-downtime deployment workflows' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    description: 'State-of-the-art language models, cognitive agents, and predictive machine learning.',
    items: [
      { name: 'OpenAI & Claude APIs', description: 'Advanced frontier reasoning models and structured tool-use' },
      { name: 'LangChain & LlamaIndex', description: 'Orchestration frameworks for RAG and autonomous agents' },
      { name: 'Vector Databases (Pinecone / PgVector)', description: 'High-dimensional semantic search and retrieval' },
      { name: 'PyTorch & TensorFlow', description: 'Deep learning frameworks for custom model training' },
      { name: 'Computer Vision (OpenCV)', description: 'Image processing, OCR document parsing, and object detection' },
    ],
  },
  {
    category: 'UI/UX & Product Design',
    description: 'User-centered design systems, clickable prototypes, and pixel-perfect design specifications.',
    items: [
      { name: 'Figma', description: 'Industry-standard collaborative interface design and prototyping' },
      { name: 'Design Systems & Tokens', description: 'Atomic component libraries for cross-platform visual consistency' },
      { name: 'Adobe Creative Suite', description: 'Vector illustrations, logo branding, and visual marketing assets' },
      { name: 'WCAG Accessibility', description: 'A11y standards ensuring products work for all human users' },
    ],
  },
]
