export interface Review {
  id: string
  name: string
  role: string
  business: string
  city: string
  /** Must match a service title in lib/data/services.ts */
  service: string
  rating: 4 | 5
  quote: string
  /**
   * true  = placeholder written by us while we collect client feedback (shown with a "Sample" label).
   * false = a real review from a real client who agreed to it being published.
   * Only set this to false for genuine reviews. Publishing invented reviews as real is misleading
   * and against consumer-protection rules in India (CCPA guidelines) and Google's review policies.
   */
  isSample: boolean
}

export const reviewsData: Review[] = [
  {
    id: 'r1',
    name: 'Rohan M.',
    role: 'Owner',
    business: 'textile trading firm',
    city: 'Surat',
    service: 'Software Development',
    rating: 5,
    quote:
      'We tracked textile orders in ledgers for years, and the custom ERP they built now handles stock, dispatch and invoices all in one place. The demos along the way kept us in the loop, and we own every line of the code, which mattered to me.',
    isSample: true,
  },
  {
    id: 'r2',
    name: 'Kavya R.',
    role: 'Director',
    business: 'coaching institute for competitive exams',
    city: 'Coimbatore',
    service: 'Website Designing',
    rating: 4,
    quote:
      'The new website loads quickly and looks far more professional than our old one. Our content came in later than planned, which pushed launch back a few weeks, but they kept us posted throughout.',
    isSample: true,
  },
  {
    id: 'r3',
    name: 'Vikram T.',
    role: 'Fleet Manager',
    business: 'regional transport company',
    city: 'Nashik',
    service: 'App Development',
    rating: 5,
    quote:
      'Drivers now capture signatures and photos on their phones at drop-off, and our customers get status updates automatically. The Android app held up well in the field, and the developers took care of the app store submission for us.',
    isSample: true,
  },
  {
    id: 'r4',
    name: 'Meera J.',
    role: 'Marketing Head',
    business: 'jewellery retail chain',
    city: 'Jaipur',
    service: 'Digital Marketing',
    rating: 4,
    quote:
      'Honestly, the first month of ads ran slower than I expected while tracking was being set up. Once analytics and conversion tracking were right, the enquiries became much more useful, and the monthly reports are clear. I would have liked a written plan before the first campaign went live.',
    isSample: true,
  },
  {
    id: 'r5',
    name: 'Priya K.',
    role: 'Sales Director',
    business: 'real estate brokerage',
    city: 'Hyderabad',
    service: 'Software Development',
    rating: 5,
    quote:
      'Before, our agents chased leads through scattered chats and spreadsheets. Now the CRM assigns each enquiry, schedules follow-ups, and shows the whole pipeline on a single screen. Our project manager joined every sprint review and explained trade-offs clearly, which made the decisions easy for us.',
    isSample: true,
  },
  {
    id: 'r6',
    name: 'Lakshmi N.',
    role: 'Owner',
    business: 'boutique guesthouse',
    city: 'Munnar',
    service: 'SEO (Search Engine Optimization)',
    rating: 5,
    quote:
      'Our site had become a mess, and the team cleaned up the structure and fixed our local business listing. The monthly keyword report is simple to scan, and it always explains what changed and why.',
    isSample: true,
  },
  {
    id: 'r7',
    name: 'Daniel K.',
    role: 'Clinic Operations Manager',
    business: 'multi-location clinic group',
    city: 'Toronto',
    service: 'AI-ML App Development',
    rating: 4,
    quote:
      'Patients now get quick answers to routine questions from the chatbot, which frees our front desk for harder calls. It still hands off some unusual questions more clumsily than I would like, so we asked for a few phrasing tweaks after launch, and those were sorted out right away.',
    isSample: true,
  },
  {
    id: 'r8',
    name: 'Suresh P.',
    role: 'Plant Manager',
    business: 'auto parts manufacturer',
    city: 'Chennai',
    service: 'Data Analytics',
    rating: 5,
    quote:
      'Since the dashboards went live, our monthly production reviews need much less preparation. When a sensor feed changed last quarter and the numbers stopped matching, someone replied within an hour and had it fixed by the same week.',
    isSample: true,
  },
]
