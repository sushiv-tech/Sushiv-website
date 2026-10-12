export interface NavLink {
  title: string
  href: string
  badge?: string
  hasDropdown?: boolean
  dropdownType?: 'services' | 'products'
}

export const siteConfig = {
  name: 'Sushiv Technologies',
  legalName: 'Sushiv Technologies LLP',
  url: 'https://sushiv.in',
  tagline: 'Software that grows with your business.',
  description:
    'Sushiv Technologies builds custom web, mobile, AI, and cloud solutions for startups, SMEs, and enterprises, with secure, scalable engineering and on-time delivery.',
  address: {
    street: 'J-606, 5th Floor, Mega Center, Magarpatta City',
    area: 'Hadapsar',
    city: 'Pune',
    state: 'Maharashtra',
    postalCode: '411028',
    country: 'India',
    display: 'J-606, 5th Floor, Mega Center, Magarpatta City, Hadapsar, Pune 411028',
  },
  contact: {
    whatsappNumber: '919579928503',
    whatsappDisplay: '+91 95799 28503',
    email: 'info@sushiv.in',
    workingHours: 'Mon to Sat, 10:00 AM to 7:00 PM IST',
  },
  social: {
    linkedin: 'https://linkedin.com/company/sushiv-technologies',
    github: 'https://github.com/Sushiv',
    twitter: 'https://twitter.com/SushivTech',
    instagram: 'https://instagram.com/sushivtechnologies',
  },
  navLinks: [
    { title: 'Services', href: '/services', hasDropdown: true, dropdownType: 'services' },
    { title: 'Products', href: '#products', hasDropdown: true, dropdownType: 'products' },
    { title: 'Industries', href: '/industries' },
    { title: 'How We Work', href: '/how-we-work' },
    { title: 'About Us', href: '/about-us' },
    { title: 'Careers', href: '/careers', badge: 'Hiring' },
  ] as NavLink[],
}
