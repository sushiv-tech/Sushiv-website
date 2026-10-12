export interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'Services' | 'Pricing' | 'Process' | 'Security & Support'
}

export const faqData: FAQItem[] = [
  {
    id: 'services-offered',
    question: 'What services does Sushiv Technologies offer?',
    answer:
      'We offer end-to-end digital engineering: custom software development (ERPs, CRMs, web apps), mobile app development (iOS & Android), AI & automation (chatbots, RAG agents, workflow tools), cloud & DevOps (AWS/GCP/Azure migrations & CI/CD), data analytics & BI, UI/UX design, and fintech platforms (payment gateways, GST e-invoicing).',
    category: 'Services',
  },
  {
    id: 'project-cost',
    question: 'How much does a project cost?',
    answer:
      'Cost depends on feature scope, technical complexity, third-party integrations, and timeline requirements. After a complimentary discovery consultation, we provide a detailed, itemized estimate with milestone breakdowns so you know exactly where every rupee or dollar is invested with zero hidden charges.',
    category: 'Pricing',
  },
  {
    id: 'timeline-estimate',
    question: 'How long does it take to build an app or website?',
    answer:
      'A focused business website or proof of concept typically takes 2 to 4 weeks. A full custom web platform, mobile application, or multi-tenant SaaS generally requires 2 to 5 months from discovery to App Store / cloud launch. We commit to firm sprint milestones following our initial technical scoping.',
    category: 'Process',
  },
  {
    id: 'code-ownership',
    question: 'Who owns the source code and intellectual property?',
    answer:
      'You do. You retain 100% full intellectual property and commercial ownership of all source code, design assets, database schemas, and documentation created for your project. Upon project settlement, all repository ownership is transferred directly to your organization.',
    category: 'Security & Support',
  },
  {
    id: 'nda-policy',
    question: 'Do you sign a Non-Disclosure Agreement (NDA)?',
    answer:
      'Yes, absolutely. We sign a strict mutual Non-Disclosure Agreement before any confidential business discussions, architectural reviews, or proprietary project specifications are exchanged.',
    category: 'Security & Support',
  },
  {
    id: 'post-launch-support',
    question: 'Do you provide support and maintenance after launch?',
    answer:
      'Yes. Every production deployment comes with a post-launch warranty window. Beyond launch, we offer flexible Monthly SLA Maintenance packages covering 24/7 uptime monitoring, security patching, third-party API updates, OS version upgrades, and ongoing feature rollouts.',
    category: 'Security & Support',
  },
  {
    id: 'existing-team-augmentation',
    question: 'Can you work with our existing in-house team or product?',
    answer:
      'Yes. Through our Staff Augmentation and Co-Development models, our senior engineers seamlessly integrate into your internal Jira, GitHub, and Slack workflows. We also frequently audit, refactor, and modernize existing codebases built by prior vendors.',
    category: 'Process',
  },
  {
    id: 'project-communication',
    question: 'How will we communicate during the project lifecycle?',
    answer:
      'You receive a designated Project Manager as your direct point of contact. We run bi-weekly sprint reviews, provide live staging preview URLs, maintain transparent task boards (Jira/ClickUp), and connect directly on your preferred communication channel (Slack, Microsoft Teams, or WhatsApp).',
    category: 'Process',
  },
  {
    id: 'international-clients',
    question: 'Do you work with international clients across time zones?',
    answer:
      'Yes. We build software for clients across India, North America, Europe, and Southeast Asia. Our engineering schedules provide guaranteed 4+ hours of daily overlap with your business hours for synchronous standups and reviews.',
    category: 'Process',
  },
  {
    id: 'getting-started',
    question: 'How do we get started on our project?',
    answer:
      'Simply fill out our project enquiry form or drop us a message on WhatsApp (+91 95799 28503). Our solution architect will schedule an introductory 30-minute discovery call within 24 hours to understand your technical requirements and outline the next steps.',
    category: 'Process',
  },
]
