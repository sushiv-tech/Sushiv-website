/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/product', destination: '/services', permanent: true },
      { source: '/erp-software', destination: '/services/software-development', permanent: true },
      { source: '/crm-software', destination: '/services/software-development', permanent: true },
      { source: '/gst-billing', destination: '/services/software-development', permanent: true },
      { source: '/e-commerce', destination: '/services/website-designing', permanent: true },
      { source: '/school-management', destination: '/services/software-development', permanent: true },
      { source: '/franchise-management', destination: '/services/software-development', permanent: true },
      { source: '/online-exam-portal', destination: '/services/software-development', permanent: true },
      { source: '/hospital-management', destination: '/services/software-development', permanent: true },
      { source: '/garment-management', destination: '/services/software-development', permanent: true },
      { source: '/software-development', destination: '/services/software-development', permanent: true },
      { source: '/website-designing', destination: '/services/website-designing', permanent: true },
      { source: '/app-development', destination: '/services/app-development', permanent: true },
      { source: '/ai-ml-app-development', destination: '/services/ai-ml-app-development', permanent: true },
      { source: '/cyber-security', destination: '/services/cyber-security', permanent: true },
      { source: '/data-analytics', destination: '/services/data-analytics', permanent: true },
      { source: '/digital-marketing', destination: '/services/digital-marketing', permanent: true },
      { source: '/seo', destination: '/services/seo', permanent: true },
      { source: '/social-media-marketing', destination: '/services/social-media-marketing', permanent: true },
      { source: '/logo-designing', destination: '/services/logo-designing', permanent: true },
      { source: '/internship', destination: '/careers', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/terms-and-conditions', destination: '/terms-of-use', permanent: true },
    ]
  },
};

export default nextConfig;
