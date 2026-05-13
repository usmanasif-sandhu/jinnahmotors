export const SITE = {
  name: 'Jinnah Motors Rent A Car',
  shortName: 'Jinnah Motors',
  whatsappDigits: '923232002999',
  phoneDisplay: '+92 323 2002999',
  email: 'akmalwarraich986@gmail.com',
  addressLine:
    'Rehman Shaheed Road, Shell Pump Chowk, Shadman Colony, Gujrat',
  mapEmbedQuery: 'Shell+Pump+Chowk+Shadman+Colony+Gujrat+Pakistan',
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
