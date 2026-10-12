export interface EngagementModel {
  id: string
  title: string
  tagline: string
  bestFor: string
  howItWorks: string
  features: string[]
  isPopular?: boolean
}

export const engagementModels: EngagementModel[] = [
  {
    id: 'fixed-scope',
    title: 'Fixed-Scope Project',
    tagline: 'Guaranteed milestones and price for defined requirements.',
    bestFor: 'Clear requirements, defined budget, and a hard completion deadline (e.g. MVPs, website launches, specific tool builds).',
    howItWorks: 'We agree on the exact requirements document, milestone schedule, and total fixed price upfront, then deliver the verified product on time.',
    features: [
      'Milestone-based payment schedule',
      'Detailed scope specification & timeline lock',
      'No surprise billing or cost overruns',
      'Post-launch 30-day warranty included',
    ],
  },
  {
    id: 'dedicated-team',
    title: 'Dedicated Development Squad',
    tagline: 'An agile, full-time engineering team aligned to your vision.',
    bestFor: 'Long-running SaaS platforms, multi-phase product roadmaps, and companies requiring high development velocity.',
    howItWorks: 'A handpicked squad of full-stack engineers, UI/UX designers, and QA specialists works exclusively on your product, managed with your input.',
    features: [
      '100% dedicated to your product',
      'Direct sprint planning & daily standup participation',
      'Flexible team scaling up or down with 2 weeks notice',
      'Seamless knowledge retention across sprints',
    ],
    isPopular: true,
  },
  {
    id: 'staff-augmentation',
    title: 'Staff Augmentation',
    tagline: 'Plug senior software engineers directly into your in-house team.',
    bestFor: 'Engineering leaders needing immediate specialized talent (React, Next.js, AI/ML, Python, Cloud DevOps) without lengthy hiring cycles.',
    howItWorks: 'Our vetted senior engineers plug directly into your internal team, using your repositories, Slack, and existing agile workflows.',
    features: [
      'Immediate candidate interviews & rapid onboarding (< 5 days)',
      'Engineers follow your internal tools, PR reviews, and ceremonies',
      'Zero recruitment fees or long-term employment overhead',
      'Full timesheet and commit transparency',
    ],
  },
  {
    id: 'time-and-material',
    title: 'Time & Material (Agile)',
    tagline: 'Dynamic engineering capacity for evolving product backlogs.',
    bestFor: 'Exploratory projects, R&D pilots, and continuous feature enhancements where scope changes based on user data.',
    howItWorks: 'You pay for the verified hours and talent allocated, reviewing task breakdowns and priority queues every sprint.',
    features: [
      'Complete flexibility to change directions between sprints',
      'Pay only for actual hours and specialized resources used',
      'Detailed bi-weekly timesheets and deliverable logs',
      'Ideal for AI R&D and rapid product prototyping',
    ],
  },
]

export const universalGuarantees = [
  { title: 'Full IP & Code Ownership', description: 'You own 100% of all intellectual property, source code, designs, and assets created.' },
  { title: 'Signed Strict Mutual NDA', description: 'Your concepts, data, and commercial trade secrets remain strictly confidential before any chat.' },
  { title: 'Single Point of Contact', description: 'Clear accountability with an assigned delivery lead who eliminates coordination headaches.' },
  { title: 'Transparent Sprint Tracking', description: 'Unrestricted access to Jira/ClickUp task boards, staging preview URLs, and GitHub repos.' },
]
