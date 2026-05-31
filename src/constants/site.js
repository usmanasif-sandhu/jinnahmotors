export const SITE = {
  name: 'Jinnah Motors Rent A Car',
  shortName: 'Jinnah Motors',
  tagline: "Pakistan's Trusted Luxury & Executive Car Rental Service",
  heroHeading: 'Premium Luxury Car Rental Services Across Pakistan',
  whatsappDigits: '923232002999',
  phoneDisplay: '+92 323 2002999',
  email: 'akmalwarraich986@gmail.com',
  addressLine:
    'Rehman Shaheed Road, Shell Pump Chowk, Shadman Colony, Gujrat',
  mapEmbedQuery: 'Shell+Pump+Chowk+Shadman+Colony+Gujrat+Pakistan',
  url: 'https://jinnahmotors.pk',
  cities: ['Gujrat', 'Lahore', 'Islamabad', 'Gujranwala'],
}

export const SEO = {
  title:
    'Jinnah Motors | Luxury Car Rental Pakistan — VIP, Wedding & Executive Transport',
  description:
    'Rent luxury cars across Pakistan with Jinnah Motors. Prado, Land Cruiser, Mercedes, BMW, Bentley, limousines & wedding fleets. Serving Gujrat, Lahore, Islamabad & Karachi. Book via WhatsApp.',
  keywords: [
    'luxury car rental Pakistan',
    'rent luxury cars in Pakistan',
    'wedding car rental Pakistan',
    'VIP car rental services',
    'executive transport Pakistan',
    'Prado rental Pakistan',
    'limousine rental Pakistan',
    'luxury vehicle hire Pakistan',
    'car rental Gujrat',
    'car rental Lahore',
    'car rental Islamabad',
    'car rental Karachi',
    'Mercedes rental Pakistan',
    'Bentley rental Pakistan',
    'Jinnah Motors',
  ].join(', '),
  ogImage:
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
}

export const whatsappHref = (
  body = `Hi ${SITE.name}, I would like to book a car.`,
) =>
  `https://wa.me/${SITE.whatsappDigits}?text=${encodeURIComponent(body)}`

export const SOCIAL = {
  instagram: 'https://www.instagram.com/jinnah_motors_gujrat/?hl=en',
  facebook: 'https://www.facebook.com/p/Jinnah-motors-100064184340651/',
  tiktok: 'https://www.tiktok.com/@jinnah_motors_gujrat',
}
