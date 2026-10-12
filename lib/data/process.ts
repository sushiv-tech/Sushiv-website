export interface ProcessStep {
  step: string
  number: string
  title: string
  description: string
  deliverables: string[]
  iconName: string
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    number: 'Step 1',
    title: 'Discover',
    description:
      'Understand your commercial goals, user personas, and technical constraints. We define clear scope and milestone timelines.',
    deliverables: ['Requirement specification (SRS)', 'Milestone roadmap', 'Transparent cost estimate'],
    iconName: 'Compass',
  },
  {
    step: '02',
    number: 'Step 2',
    title: 'Design',
    description:
      'Plan architecture, data models, user flows, and modern interfaces. Interactive clickable prototypes validated before code is written.',
    deliverables: ['Interactive Figma prototype', 'System architecture blueprint', 'Design tokens & system'],
    iconName: 'Layout',
  },
  {
    step: '03',
    number: 'Step 3',
    title: 'Develop',
    description:
      'Build in agile two-week sprints with regular demos, clean code craftsmanship, and continuous integration feedback loops.',
    deliverables: ['Bi-weekly sprint demos', 'Clean, documented source code', 'Progress status reports'],
    iconName: 'Code2',
  },
  {
    step: '04',
    number: 'Step 4',
    title: 'Deploy',
    description:
      'Test thoroughly across performance, responsiveness, and security edge cases, followed by a smooth, zero-downtime production launch.',
    deliverables: ['QA & Security test audit', 'Zero-downtime cloud deployment', 'App Store / Play Store release'],
    iconName: 'Rocket',
  },
  {
    step: '05',
    number: 'Step 5',
    title: 'Support',
    description:
      'Monitor, maintain, and grow the product. We provide ongoing uptime monitoring, OS upgrades, and feature iterations after launch.',
    deliverables: ['SLA-backed maintenance plan', 'Automated health alerts', 'Iterative feature scaling'],
    iconName: 'LifeBuoy',
  },
]

export const communicationPillars = [
  {
    title: 'Dedicated Project Manager',
    description: 'A single point of technical and management contact who knows every nuance of your build.',
    iconName: 'UserCheck',
  },
  {
    title: 'Weekly Demos & Transparent Boards',
    description: 'Live sprint walk-throughs and real-time Jira / ClickUp access so you never guess current progress.',
    iconName: 'Tv',
  },
  {
    title: 'Direct Engineer Slack / Teams Channel',
    description: 'Immediate feedback and quick question turnarounds in a dedicated communication channel.',
    iconName: 'MessageSquare',
  },
  {
    title: 'Timezone-Aligned Overlap',
    description: 'Flexible scheduling ensuring 4+ hours of active real-time overlap across Americas, Europe, and APAC.',
    iconName: 'Clock',
  },
]
