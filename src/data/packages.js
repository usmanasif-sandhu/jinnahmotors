import { DEFAULT_CAR_IMAGE } from '../constants/carImages'

export const PACKAGES = [
  {
    id: 'barat',
    title: 'Barat Package',
    subtitle: 'Royal convoy arrival & departure',
    fromPrice: 45000,
    image: DEFAULT_CAR_IMAGE,
    features: [
      'Decorated flagship sedan / SUV convoy options',
      'Uniform chauffeur with route planning',
      'Cool cabin prep + bottled water amenity kit',
      'Flexible timings for bride & groom events',
      'Dedicated coordinator on WhatsApp',
    ],
    accent: 'from-amber-200/80 via-amber-100/60 to-transparent',
  },
  {
    id: 'mehndi',
    title: 'Mehndi Package',
    subtitle: 'Vibrant arrivals for festivities',
    fromPrice: 28000,
    image: DEFAULT_CAR_IMAGE,
    features: [
      'Priority booking for Mehndi evenings',
      'Family-friendly fleet with extra luggage space',
      'Optional coordinated colour ribbons',
      'Multiple pickup points around Gujrat',
      'Driver familiar with marquee & farm-house venues',
    ],
    accent: 'from-yellow-100/70 via-white/70 to-transparent',
  },
  {
    id: 'vip-groom',
    title: 'VIP Groom Entry',
    subtitle: 'Cinematic entrance choreography',
    fromPrice: 65000,
    image: DEFAULT_CAR_IMAGE,
    features: [
      'Signature luxury SUV spotlight entry',
      'Red-carpet ready cabin detailing',
      'Extended standby hours during baraat line-up',
      'Coordination with event photographers',
      'Optional second escort vehicle for groom squad',
    ],
    accent: 'from-amber-300/85 via-yellow-50/65 to-transparent',
  },
  {
    id: 'full-wedding',
    title: 'Full Wedding Transport',
    subtitle: 'End-to-end guest & family logistics',
    fromPrice: 125000,
    image: DEFAULT_CAR_IMAGE,
    features: [
      'Multi-day routing across Mehndi / Barat / Walima',
      'Mixed fleet sedan + SUV combos',
      'Guest shuttle scheduling assistance',
      '24/7 hotline coordination with family POC',
      'Transparent milestone billing & invoices',
    ],
    accent: 'from-amber-200/75 via-orange-50/60 to-transparent',
  },
]
