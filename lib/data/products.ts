export interface ProductItem {
  id: string
  title: string
  description: string
  category: 'Enterprise' | 'Finance' | 'Retail' | 'Operations'
  iconName: string
  targetServiceUrl: string
  targetServiceName: string
  status: 'Ready Solution' | 'Custom Deployable'
  /** Short page copy for /products */
  overview: string
  highlights: string[]
  idealFor: string
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
    overview:
      'Built for manufacturers, this ERP runs stock, buying and production across factories and warehouses. It is tailored to your plant workflows before it goes live, so owners can review stock, purchases and output for every plant.',
    highlights: [
      'Inventory levels across warehouses and plant stores',
      'Vendor purchase orders and goods receipt control',
      'Production planning for all manufacturing units',
      'Operations reporting for management review',
    ],
    idealFor: 'Manufacturers running two or more plants or warehouses',
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
    overview:
      'Every lead, deal and client conversation is tracked in this CRM, from first enquiry to closed sale. Sales staff pick up any lead with its notes and history, and managers see where every open opportunity sits in the pipeline.',
    highlights: [
      'Lead capture and assignment to sales owners',
      'Sales pipeline stages with visible deal status',
      'Client communication history in one record',
      'Follow-up tasks and reminders for each deal',
    ],
    idealFor: 'Sales teams that manage leads and client communication',
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
    overview:
      'GST is worked out on each invoice, and a running record of recurring payments is kept for every customer. Finance teams and business owners who issue invoices stop juggling separate tax tools and spreadsheets each month.',
    highlights: [
      'Automated GST calculation for CGST, SGST and IGST',
      'E-invoice and e-way bill generation',
      'Recurring payment tracking for every customer',
      'Invoice formats aligned with Indian tax law',
    ],
    idealFor: 'Indian businesses that issue GST invoices and track recurring payments',
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
    overview:
      'Sellers get a complete online store for wholesale and retail customers, with payments, checkout and shipping logistics kept in sync with each order placed. Cart recovery brings back shoppers who left their carts without paying.',
    highlights: [
      'B2B and B2C digital storefronts on one platform',
      'Integrated payment gateways for online checkout',
      'Cart recovery for abandoned shopping carts',
      'Logistics sync built into the storefront',
    ],
    idealFor: 'Businesses selling online to both wholesale and retail buyers',
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
    overview:
      'One system covers admissions, student records, fee collection, gradebooks and attendance for a school. Staff manage each area day to day from one portal, and parents can check receipts and attendance for each child through the parent app.',
    highlights: [
      'New student admission forms completed online',
      'Attendance tracking by class, section and subject',
      'Online fee collection and receipts',
      'Gradebooks generated from student marks',
    ],
    idealFor: 'Schools managing admissions, student records and fees',
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
    overview:
      'Brands manage many outlets from head office with this franchise system, configured around your franchise model before launch. Head office gets royalty figures and brand KPIs for its whole network, without chasing each franchisee for reports.',
    highlights: [
      'Central stock fulfilment for every outlet',
      'Royalty calculation for each franchise outlet',
      'Brand KPI dashboards split by location',
      'Head office control over operations at each site',
    ],
    idealFor: 'Brands running multiple franchise outlets across cities',
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
    overview:
      'Candidates sit online tests on a secure platform, backed by a curated question bank that institutes build over time. Institutes can schedule tests for each batch of candidates and set a timer on every paper they publish.',
    highlights: [
      'Question bank with topic tags and difficulty levels',
      'Timer controls for each timed paper',
      'Proctoring alerts for suspicious activity during exams',
      'Instant grading once a test is submitted',
    ],
    idealFor: 'Schools, colleges and training or coaching institutes running online tests',
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
    overview:
      'The patient journey from outpatient visits to inpatient stays is covered by this hospital system, adapted to your departments before go-live. Doctors, nurses and front-desk staff work from the same patient file for each visit, so less paperwork is repeated.',
    highlights: [
      'OPD and IPD scheduling for every department',
      'Electronic health records linked to each patient',
      'Pharmacy inventory levels for each medicine',
      'Lab report delivery within the patient record',
    ],
    idealFor: 'Hospitals and multi-speciality clinics running OPD and IPD',
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
    overview:
      'An apparel ERP for garment makers and sellers, covering fabric, sizes and tailoring work across the workshop. Owners can check what is left in each size and in each fabric roll without walking the godown.',
    highlights: [
      'Size and colour variant matrix for every style',
      'Fabric roll inventory with metre-level stock tracking',
      'Tailor job-work issue and receipt records',
      'Barcode scanning for warehouse billing',
    ],
    idealFor: 'Garment manufacturers and wholesale apparel traders',
  },
]
