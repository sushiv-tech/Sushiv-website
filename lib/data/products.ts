export interface ProductItem {
  id: string
  title: string
  description: string
  category: 'Enterprise' | 'Finance' | 'Retail' | 'Operations'
  iconName: string
  targetServiceUrl: string
  targetServiceName: string
  status: 'Ready Solution' | 'Custom Deployable'
}

export const productsData: ProductItem[] = [
  {
    id: 'erp-software',
    title: 'ERP Software',
    description: 'Centralized resource planning for multi-location manufacturing, inventory, procurement, and operations.',
    category: 'Enterprise',
    iconName: 'Building2',
    targetServiceUrl: '/contact?service=Software+Development&product=erp-software',
    targetServiceName: 'Software Development',
    status: 'Custom Deployable',
  },
  {
    id: 'crm-software',
    title: 'CRM Software',
    description: 'Intelligent lead management, sales pipeline visibility, client communications, and automated follow-ups.',
    category: 'Enterprise',
    iconName: 'Users',
    targetServiceUrl: '/contact?service=Software+Development&product=crm-software',
    targetServiceName: 'Software Development',
    status: 'Ready Solution',
  },
  {
    id: 'gst-billing',
    title: 'GST Billing & Invoicing',
    description: 'Automated tax calculations, e-invoicing, e-way bills, and recurring payment tracking compliant with Indian tax law.',
    category: 'Finance',
    iconName: 'Receipt',
    targetServiceUrl: '/contact?service=Software+Development&product=gst-billing',
    targetServiceName: 'Software Development',
    status: 'Ready Solution',
  },
  {
    id: 'e-commerce',
    title: 'e-Commerce Platform',
    description: 'High-conversion B2B and B2C digital storefronts with integrated payment gateways, cart recovery, and logistics sync.',
    category: 'Retail',
    iconName: 'ShoppingBag',
    targetServiceUrl: '/contact?service=Website+Designing&product=e-commerce',
    targetServiceName: 'Website Designing',
    status: 'Ready Solution',
  },
  {
    id: 'school-management',
    title: 'School Management System',
    description: 'Comprehensive portal for admissions, student records, fee collection, gradebooks, attendance, and parent apps.',
    category: 'Operations',
    iconName: 'GraduationCap',
    targetServiceUrl: '/contact?service=Software+Development&product=school-management',
    targetServiceName: 'Software Development',
    status: 'Ready Solution',
  },
  {
    id: 'franchise-management',
    title: 'Franchise Management',
    description: 'Multi-outlet governance, centralized supply chain fulfillment, royalty calculation, and brand KPI dashboards.',
    category: 'Operations',
    iconName: 'Network',
    targetServiceUrl: '/contact?service=Software+Development&product=franchise-management',
    targetServiceName: 'Software Development',
    status: 'Custom Deployable',
  },
  {
    id: 'online-exam-portal',
    title: 'Online Exam Portal',
    description: 'Secure testing platform with question bank curation, timer controls, AI-proctoring alerts, and automated instant grading.',
    category: 'Operations',
    iconName: 'FileCheck',
    targetServiceUrl: '/contact?service=Software+Development&product=online-exam-portal',
    targetServiceName: 'Software Development',
    status: 'Ready Solution',
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management (HMS)',
    description: 'End-to-end patient workflow, OPD/IPD scheduling, EHR records, pharmacy inventory, and lab report delivery.',
    category: 'Operations',
    iconName: 'Activity',
    targetServiceUrl: '/contact?service=Software+Development&product=hospital-management',
    targetServiceName: 'Software Development',
    status: 'Custom Deployable',
  },
  {
    id: 'garment-management',
    title: 'Garment & Apparel ERP',
    description: 'Specialized fabric inventory, size/color variant matrix, tailor job-work tracking, and barcode warehouse billing.',
    category: 'Retail',
    iconName: 'Shirt',
    targetServiceUrl: '/contact?service=Software+Development&product=garment-management',
    targetServiceName: 'Software Development',
    status: 'Ready Solution',
  },
]
