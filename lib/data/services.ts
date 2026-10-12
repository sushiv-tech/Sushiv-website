export interface ServiceDetail {
  slug: string
  title: string
  pillar: 'DEVELOPMENT' | 'INTELLIGENCE' | 'MARKETING' | 'DESIGN'
  tagline: string
  shortDescription: string
  overview: string
  whatWeOffer: { title: string; description: string }[]
  technologies: string[]
  keyBenefits: string[]
  iconName: string
}

export const servicesData: ServiceDetail[] = [
  // ── DEVELOPMENT PILLAR ──
  {
    slug: 'software-development',
    title: 'Software Development',
    pillar: 'DEVELOPMENT',
    tagline: 'Custom software built around the way your business actually works.',
    shortDescription: 'Tailored ERPs, CRMs, web platforms, and automated workflow software engineered to eliminate operational bottlenecks.',
    overview:
      'We design and build bespoke software applications, internal business systems, and scalable SaaS platforms that match your unique operational logic. With an in-house engineering team specializing in both Microsoft and MEAN stacks, we deliver high-throughput, secure software.',
    whatWeOffer: [
      { title: 'Custom Business Software & ERPs', description: 'Enterprise resource planning, operations portals, and management dashboards tailored to your workflows.' },
      { title: 'CRM Software Systems', description: 'Lead pipelines, client management, communications tracking, and automated sales follow-ups.' },
      { title: 'SaaS Platform Engineering', description: 'Multi-tenant cloud architectures with secure subscription billing, role-based access, and analytics.' },
      { title: 'API & Legacy System Integration', description: 'Seamlessly connect databases, legacy software, and third-party APIs without workflow disruption.' },
      { title: 'Maintenance & Code Modernization', description: 'Upgrade outdated systems to modern, maintainable stacks with high uptime and security.' },
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'MongoDB', 'REST & GraphQL'],
    keyBenefits: [
      'Tailor-made to your workflows instead of forcing you into rigid templates',
      '100% intellectual property and full source code ownership',
      'Scalable architecture engineered for long-term growth',
      'Eliminates expensive recurring licenses of generic SaaS tools',
    ],
    iconName: 'Code',
  },
  {
    slug: 'website-designing',
    title: 'Website Designing',
    pillar: 'DEVELOPMENT',
    tagline: 'High-converting, responsive websites that captivate and convert.',
    shortDescription: 'Modern, responsive, and SEO-optimized web experiences designed for fast loading speed and intuitive user journeys.',
    overview:
      'Your website is your 24/7 digital storefront. We design and develop responsive, high-speed corporate websites, landing pages, and interactive portals that elevate your brand and drive measurable conversions.',
    whatWeOffer: [
      { title: 'Custom Corporate & Business Websites', description: 'Bespoke web designs tailored to your brand identity, optimized for desktop, tablet, and mobile.' },
      { title: 'e-Commerce Web Storefronts', description: 'Fast, secure online stores with product catalogs, shopping carts, and payment integrations.' },
      { title: 'Responsive & Mobile-First Design', description: 'Flawless presentation and smooth interactions across all screen sizes and devices.' },
      { title: 'Performance & Speed Optimization', description: 'Sub-second load times, Core Web Vitals optimization, and semantic markup for SEO.' },
      { title: 'CMS Integration & Admin Dashboards', description: 'Intuitive content management systems that empower your team to update content effortlessly.' },
    ],
    technologies: ['HTML5/CSS3', 'Next.js', 'React', 'Tailwind CSS', 'WordPress', 'Shopify', 'Webflow', 'JavaScript'],
    keyBenefits: [
      'Sub-second load times and top Core Web Vitals scores',
      'Visually stunning aesthetic that creates an instant corporate impression',
      'Search engine friendly structure built to rank on Google from day one',
      'Accessible, mobile-optimized navigation for superior conversions',
    ],
    iconName: 'Globe',
  },
  {
    slug: 'app-development',
    title: 'App Development',
    pillar: 'DEVELOPMENT',
    tagline: 'Intuitive, high-performance mobile apps for iOS and Android.',
    shortDescription: 'Native and cross-platform mobile apps built to deliver seamless user experiences and drive continuous engagement.',
    overview:
      'We build mobile applications for Android and iOS that are fast, intuitive, and reliable. From consumer-facing mobile products to field workforce apps and on-demand delivery systems, we manage end-to-end design, development, API integration, and app store deployment.',
    whatWeOffer: [
      { title: 'Android App Development', description: 'Native and modern Android apps engineered for performance across the vast Android device ecosystem.' },
      { title: 'iOS App Development', description: 'Refined, App Store-compliant iOS applications designed according to Apple Human Interface Guidelines.' },
      { title: 'Cross-Platform Apps (React Native / Flutter)', description: 'Unified codebases running seamlessly on both iOS and Android, saving time and budget.' },
      { title: 'On-Demand & Enterprise Mobile Apps', description: 'Real-time booking, field operations, push notifications, and live GPS tracking.' },
      { title: 'App Store Submission & Lifecycle Support', description: 'Complete guidance through Google Play & Apple App Store verification and post-launch updates.' },
    ],
    technologies: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Firebase', 'REST APIs', 'Google Maps SDK', 'Push Notifications'],
    keyBenefits: [
      'Smooth 60fps animations and native-feeling UI components',
      'Offline caching, biometrics, and secure push notifications built in',
      'Rapid cross-platform development with shared code efficiency',
      'Full guidance through store approval and version upgrades',
    ],
    iconName: 'Smartphone',
  },

  // ── INTELLIGENCE & SECURITY PILLAR ──
  {
    slug: 'ai-ml-app-development',
    title: 'AI-ML App Development',
    pillar: 'INTELLIGENCE',
    tagline: 'Practical artificial intelligence and machine learning solutions.',
    shortDescription: 'Custom AI models, intelligent chatbots, workflow automation, and predictive algorithms that accelerate business growth.',
    overview:
      'We help businesses deploy AI and Machine Learning where it delivers measurable commercial impact: automated customer service, intelligent document processing, predictive data modeling, and autonomous task execution.',
    whatWeOffer: [
      { title: 'AI Chatbots & Conversational Agents', description: 'Custom-trained customer service and helpdesk chatbots integrated into web and WhatsApp.' },
      { title: 'Predictive Modeling & Machine Learning', description: 'Forecasting algorithms for demand planning, churn reduction, and intelligent recommendations.' },
      { title: 'Document & OCR Intelligence', description: 'Extract and validate data automatically from invoices, IDs, PDFs, and scanned forms.' },
      { title: 'LLM & Generative AI Integration', description: 'Custom GPT/LLM workflows, RAG knowledge bases, and domain-specific AI assistants.' },
      { title: 'Automated Process Workflows', description: 'Replace manual, repetitive tasks with self-learning automated digital workflows.' },
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI APIs', 'LangChain', 'FastAPI', 'Hugging Face', 'Vector Databases'],
    keyBenefits: [
      'Dramatically reduces manual processing hours and human error',
      'Instant 24/7 intelligent query responses for customers',
      'Enterprise data privacy with private model deployment options',
      'Actionable predictive insights that drive proactive business decisions',
    ],
    iconName: 'Cpu',
  },
  {
    slug: 'cyber-security',
    title: 'Cyber Security',
    pillar: 'INTELLIGENCE',
    tagline: 'Safeguard your digital infrastructure against emerging threats.',
    shortDescription: 'Vulnerability assessments, penetration testing, compliance audits, and security hardening for enterprise applications.',
    overview:
      'Protecting your digital assets and customer data is mission-critical. Our cybersecurity engineers conduct deep vulnerability assessments, penetration tests, and compliance audits to keep your applications, servers, and data completely resilient against cyber threats.',
    whatWeOffer: [
      { title: 'Vulnerability Assessment & Pen Testing (VAPT)', description: 'Thorough vulnerability testing of web applications, mobile apps, and cloud networks.' },
      { title: 'Application Hardening & Code Audits', description: 'Source code reviews to detect security flaws, injection vectors, and broken authentication.' },
      { title: 'Data Security & Regulatory Compliance', description: 'Audits and controls aligned with ISO 27001, GDPR, and Indian DPDP Act standards.' },
      { title: 'Network Security & Firewall Setup', description: 'WAF implementation, DDoS protection, SSL/TLS configuration, and access control.' },
      { title: 'Incident Response & Recovery Planning', description: 'Clear disaster recovery plans and protocols to minimize exposure and downtime.' },
    ],
    technologies: ['OWASP Top 10', 'Burp Suite', 'Wireshark', 'Cloudflare WAF', 'SSL/TLS', 'RBAC & IAM', 'Nessus'],
    keyBenefits: [
      'Proactive identification and patching of exploitable security vulnerabilities',
      'Assurance of sensitive client and financial data privacy',
      'Compliance-ready posture for enterprise vendor evaluations',
      'Mitigates risk of ransomware, data breaches, and reputational damage',
    ],
    iconName: 'ShieldCheck',
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics',
    pillar: 'INTELLIGENCE',
    tagline: 'Transform raw data into clear, actionable business decisions.',
    shortDescription: 'Clean data pipelines, centralized warehouses, and real-time business intelligence dashboards.',
    overview:
      'Unlock the full potential of your operational and commercial data. We build robust data ingestion pipelines and interactive executive dashboards that provide real-time visibility into sales, operations, customer behavior, and financial KPIs.',
    whatWeOffer: [
      { title: 'Automated Data Pipelines (ETL)', description: 'Connect fragmented data sources into a clean, automated, reliable pipeline.' },
      { title: 'Interactive BI Dashboards', description: 'Custom Power BI, Tableau, and web dashboards visualizing real-time metrics.' },
      { title: 'Data Cleaning & Warehousing', description: 'Deduplicate, validate, and organize business data into a high-performance central warehouse.' },
      { title: 'Customer & Revenue Analytics', description: 'Deep-dive segmentation, cohort analysis, and sales funnel performance tracking.' },
      { title: 'KPI & Performance Reporting', description: 'Automated scheduled reports delivered directly to management inboxes.' },
    ],
    technologies: ['Python', 'SQL', 'Power BI', 'Tableau', 'PostgreSQL', 'Pandas', 'Google Data Studio', 'BigQuery'],
    keyBenefits: [
      'A single, trustworthy source of truth for executive decision making',
      'Eliminates hours of manual spreadsheet compiling every week',
      'Real-time alerts on operational anomalies and sales shifts',
      'Provides the data foundation required for future AI integrations',
    ],
    iconName: 'BarChart3',
  },

  // ── MARKETING & GROWTH PILLAR ──
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    pillar: 'MARKETING',
    tagline: 'Data-driven marketing campaigns that accelerate customer acquisition.',
    shortDescription: 'Targeted Google Ads, paid campaigns, conversion rate optimization, and multi-channel acquisition funnels.',
    overview:
      'Sushiv’s digital marketing services are tailored to meet the unique growth goals of each business. We design and manage performance marketing campaigns across search and social channels that drive qualified traffic, generate high-intent leads, and maximize your return on ad spend.',
    whatWeOffer: [
      { title: 'Pay-Per-Click Advertising (PPC)', description: 'High-converting Google Ads and search campaigns focused on commercial buyer intent.' },
      { title: 'Lead Generation Campaigns', description: 'Targeted landing pages and ad funnels optimized for maximum inquiry conversion.' },
      { title: 'Conversion Rate Optimization (CRO)', description: 'A/B testing, user journey audits, and form optimizations that turn clicks into clients.' },
      { title: 'Performance Analytics & Tracking', description: 'Transparent conversion tracking setup via Google Analytics 4 and Tag Manager.' },
      { title: 'Multi-Channel Growth Strategy', description: 'Holistic digital acquisition strategies across paid search, display, and social media.' },
    ],
    technologies: ['Google Ads', 'Meta Ads Manager', 'Google Analytics 4', 'Google Tag Manager', 'HubSpot', 'Landing Page Builders'],
    keyBenefits: [
      'Immediate qualified traffic and inbound lead flow',
      'Targeted bidding that keeps cost-per-acquisition (CPA) low',
      'Complete transparency on ad spend, conversions, and ROI',
      'Continuous campaign optimization based on conversion data',
    ],
    iconName: 'TrendingUp',
  },
  {
    slug: 'seo',
    title: 'SEO (Search Engine Optimization)',
    pillar: 'MARKETING',
    tagline: 'Dominate organic search rankings and attract qualified buyers.',
    shortDescription: 'Technical SEO, high-authority keyword optimization, on-page architecture, and local search visibility.',
    overview:
      'Achieve sustainable, compounding business growth with organic search engine optimization. We optimize your website architecture, content, and backlinks to ensure you rank on the first page of Google for the high-intent keywords your potential clients are searching for.',
    whatWeOffer: [
      { title: 'Comprehensive SEO Audits', description: 'Deep technical analysis of crawlability, site speed, indexing, and meta architecture.' },
      { title: 'High-Intent Keyword Research', description: 'Identify commercial keywords that buyers use when searching for your exact services.' },
      { title: 'On-Page SEO & Content Optimization', description: 'Structure titles, headings, schema markup, and internal linking for maximum search visibility.' },
      { title: 'Technical SEO & Core Web Vitals', description: 'Fix indexing issues, mobile responsiveness bottlenecks, and slow load times.' },
      { title: 'Local SEO & Google Business Profile', description: 'Optimize your Google Map listings to dominate local service searches.' },
    ],
    technologies: ['Google Search Console', 'Ahrefs', 'Semrush', 'Google Analytics 4', 'Schema.org JSON-LD', 'Screaming Frog'],
    keyBenefits: [
      'Compounding inbound organic traffic without ongoing per-click ad costs',
      'Higher credibility and trust from prospective clients searching online',
      'Dominance on regional and local search queries in target markets',
      'Clear monthly ranking reports and keyword progression visibility',
    ],
    iconName: 'Search',
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    pillar: 'MARKETING',
    tagline: 'Engage your target audience and build a loyal brand community.',
    shortDescription: 'Social media strategy, brand storytelling, creative design, and community management across LinkedIn, Instagram, and Facebook.',
    overview:
      'Build an active, authoritative online presence that resonates with your audience and drives commercial growth. We craft targeted content, creative visuals, and strategic campaigns that showcase your expertise and keep your brand top-of-mind.',
    whatWeOffer: [
      { title: 'Social Media Strategy & Calendar', description: 'Structured monthly content plans aligned with your business objectives and industry trends.' },
      { title: 'Creative Design & Copywriting', description: 'Eye-catching graphics, carousels, video reels, and compelling copy that spark engagement.' },
      { title: 'Platform Management', description: 'Consistent publishing and active engagement across LinkedIn, Instagram, Facebook, and Twitter/X.' },
      { title: 'Paid Social Campaigns', description: 'Targeted demographic and retargeting ads to re-engage website visitors.' },
      { title: 'Community & Reputation Management', description: 'Prompt responses to messages, comments, and reviews to maintain a positive brand reputation.' },
    ],
    technologies: ['LinkedIn Campaign Manager', 'Meta Business Suite', 'Canva Pro', 'Figma', 'Hootsuite / Buffer', 'Analytics Dashboards'],
    keyBenefits: [
      'Positions your business as a modern, trustworthy industry authority',
      'Keeps your brand engaged with past clients and warm prospects',
      'Generates direct inbound inquiries through social messaging',
      'Consistent, cohesive visual branding across every digital touchpoint',
    ],
    iconName: 'Share2',
  },

  // ── DESIGN & BRANDING PILLAR ──
  {
    slug: 'logo-designing',
    title: 'Logo Designing',
    pillar: 'DESIGN',
    tagline: 'Distinctive visual identities that command trust and recognition.',
    shortDescription: 'Memorable brand identity systems, vector logos, typography guidelines, and complete corporate stationery kits.',
    overview:
      'Your logo and visual identity are the foundational mark of your brand. We design thoughtful, iconic logos and cohesive brand style guidelines that communicate your core values, stand out against competitors, and create instant credibility.',
    whatWeOffer: [
      { title: 'Custom Vector Logo Design', description: 'Original, timeless logo concepts crafted with scalability for print, web, and mobile app icons.' },
      { title: 'Brand Style Guidelines', description: 'Complete documentation on logo usage, spacing, clear zones, and color codes (RGB/CMYK/HEX).' },
      { title: 'Typography & Color Palettes', description: 'Curated corporate typography pairings and harmonious color systems.' },
      { title: 'Corporate Stationery Collateral', description: 'Business cards, letterheads, email signatures, and corporate presentation templates.' },
      { title: 'Social Media Kit & Vector Export', description: 'High-resolution SVG, EPS, PNG, and PDF exports optimized for all social platforms.' },
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Vector Graphics', 'Design Tokens'],
    keyBenefits: [
      'Instant professional credibility when pitching to clients and investors',
      '100% original, trademark-ready vector files with full copyright transfer',
      'Unified visual aesthetic across your website, apps, and documents',
      'Versatile assets ready for physical printing and high-res digital screens',
    ],
    iconName: 'Palette',
  },
]

export const servicePillars = [
  { id: 'DEVELOPMENT', name: 'Development', description: 'Custom software, websites, and mobile apps built to scale.' },
  { id: 'INTELLIGENCE', name: 'Intelligence & Security', description: 'AI-ML applications, data analytics, and cyber protection.' },
  { id: 'MARKETING', name: 'Marketing & Growth', description: 'Digital marketing, SEO, and social media campaigns.' },
  { id: 'DESIGN', name: 'Design & Branding', description: 'Distinctive logo design and corporate visual identity.' },
] as const
