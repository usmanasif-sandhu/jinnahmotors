import { CAR_IMAGES } from '../constants/carImages'

/** @typedef {'ultra-luxury' | 'suv' | 'sedan' | 'economy' | 'limousine' | 'pickup' | 'van'} CarCategory */

/**
 * @typedef {Object} Car
 * @property {string} id
 * @property {string} name
 * @property {CarCategory} category
 * @property {number} pricePerDay
 * @property {string} image
 * @property {string} alt
 * @property {string} [note]
 * @property {boolean} [featured]
 */

/** @type {Car[]} */
export const CARS = [
  {
    id: 'mercedes-g-brabus',
    name: 'Mercedes G Wagon Brabus',
    category: 'ultra-luxury',
    pricePerDay: 120000,
    image: CAR_IMAGES.mercedesGBrabus,
    alt: 'Mercedes-Benz G-Class W463 luxury SUV — Brabus style rental Pakistan',
    featured: true,
  },
  {
    id: 'bmw-i8',
    name: 'BMW i8',
    category: 'ultra-luxury',
    pricePerDay: 250000,
    image: CAR_IMAGES.bmwI8,
    alt: '2015 BMW i8 I12 coupe hybrid sports car rental Pakistan',
    featured: true,
  },
  {
    id: 'porsche-taycan',
    name: 'Porsche Taycan',
    category: 'ultra-luxury',
    pricePerDay: 230000,
    image: CAR_IMAGES.porscheTaycan,
    alt: 'Porsche Taycan 4S electric luxury sedan rental Pakistan',
    featured: true,
  },
  {
    id: 'bentley-flying-spur',
    name: 'Bentley Flying Spur',
    category: 'ultra-luxury',
    pricePerDay: 220000,
    image: CAR_IMAGES.bentleyFlyingSpur,
    alt: '2020 Bentley Flying Spur First Edition luxury sedan rental Pakistan',
    featured: true,
  },
  {
    id: 'lexus-limousine',
    name: 'Lexus Limousine',
    category: 'limousine',
    pricePerDay: 160000,
    image: CAR_IMAGES.lexusLimousine,
    alt: 'Stretch limousine wedding and VIP transport rental Pakistan',
    featured: true,
  },
  {
    id: 'gmc-limousine',
    name: 'GMC Limousine',
    category: 'limousine',
    pricePerDay: 180000,
    image: CAR_IMAGES.gmcLimousine,
    alt: '2015 GMC Yukon Denali luxury SUV limousine rental Pakistan',
    featured: true,
  },
  {
    id: 'tundra-limousine',
    name: 'Tundra Limousine',
    category: 'limousine',
    pricePerDay: 180000,
    image: CAR_IMAGES.tundraLimousine,
    alt: 'Toyota Tundra based stretch limousine rental Pakistan',
  },
  {
    id: 'bmw-7-series',
    name: 'BMW 7 Series',
    category: 'ultra-luxury',
    pricePerDay: 120000,
    image: CAR_IMAGES.bmw7Series,
    alt: '2022 BMW 740i xDrive G11 executive sedan rental Pakistan',
    featured: true,
  },
  {
    id: 'range-rover-vogue',
    name: 'Range Rover Vogue',
    category: 'ultra-luxury',
    pricePerDay: 100000,
    image: CAR_IMAGES.rangeRoverVogue,
    alt: '2018 Range Rover Vogue SDV6 Autobiography luxury SUV rental Pakistan',
    featured: true,
  },
  {
    id: 'mercedes-maybach',
    name: 'Mercedes Maybach S Class',
    category: 'ultra-luxury',
    pricePerDay: 100000,
    image: CAR_IMAGES.mercedesMaybach,
    alt: 'Mercedes-Maybach S680 4MATIC ultra luxury sedan rental Pakistan',
    featured: true,
  },
  {
    id: 'mercedes-amg-c',
    name: 'Mercedes AMG C Class',
    category: 'ultra-luxury',
    pricePerDay: 45000,
    image: CAR_IMAGES.mercedesAmgC,
    alt: 'Mercedes-AMG C63 S W205 performance sedan rental Pakistan',
  },
  {
    id: 'land-cruiser-zx',
    name: 'Toyota Land Cruiser ZX V8',
    category: 'suv',
    pricePerDay: 30000,
    image: CAR_IMAGES.landCruiserZx,
    alt: '2022 Toyota Land Cruiser 300 ZX GRJ300 V8 SUV rental Pakistan',
  },
  {
    id: 'toyota-lc300',
    name: 'Toyota LC300',
    category: 'suv',
    pricePerDay: 30000,
    image: CAR_IMAGES.landCruiser300,
    alt: '2022 Toyota Land Cruiser 300 GR Sport SUV rental Pakistan',
  },
  {
    id: 'audi-a6',
    name: 'Audi A6',
    category: 'sedan',
    pricePerDay: 40000,
    image: CAR_IMAGES.audiA6,
    alt: 'Audi A6 C8 50 TDI quattro executive sedan rental Pakistan',
  },
  {
    id: 'audi-a5',
    name: 'Audi A5',
    category: 'sedan',
    pricePerDay: 30000,
    image: CAR_IMAGES.audiA5,
    alt: 'Audi A5 Sportback F5 premium sedan rental Pakistan',
  },
  {
    id: 'toyota-tundra',
    name: 'Toyota Tundra',
    category: 'pickup',
    pricePerDay: 20000,
    image: CAR_IMAGES.toyotaTundra,
    alt: '2022 Toyota Tundra Limited pickup truck rental Pakistan',
  },
  {
    id: 'toyota-prado-tx',
    name: 'Toyota Prado TX',
    category: 'suv',
    pricePerDay: 17000,
    image: CAR_IMAGES.toyotaPradoTx,
    alt: '2015 Toyota Land Cruiser Prado TRJ150W TX wagon rental Pakistan',
    featured: true,
  },
  {
    id: 'toyota-fortuner',
    name: 'Toyota Fortuner',
    category: 'suv',
    pricePerDay: 16000,
    image: CAR_IMAGES.toyotaFortuner,
    alt: '2017-2018 Toyota Fortuner AN160 SUV rental Pakistan',
  },
  {
    id: 'toyota-revo',
    name: 'Toyota Revo',
    category: 'pickup',
    pricePerDay: 15000,
    image: CAR_IMAGES.toyotaRevo,
    alt: '2018 Toyota Hilux Revo pickup truck rental Pakistan',
  },
  {
    id: 'hiace-high-roof',
    name: 'Toyota Hiace High Roof',
    category: 'van',
    pricePerDay: 13000,
    note: 'Without fuel',
    image: CAR_IMAGES.toyotaHiace,
    alt: 'Toyota Hiace Super Grandia high roof van rental Pakistan',
  },
  {
    id: 'honda-civic-11',
    name: 'Honda Civic 11th Gen',
    category: 'sedan',
    pricePerDay: 12000,
    image: CAR_IMAGES.hondaCivic11,
    alt: '2022 Honda Civic 11th generation sedan rental Pakistan',
  },
  {
    id: 'honda-civic-x',
    name: 'Honda Civic X',
    category: 'sedan',
    pricePerDay: 6000,
    image: CAR_IMAGES.hondaCivicX,
    alt: '2016 Honda Civic X tenth generation sedan rental Pakistan',
  },
  {
    id: 'toyota-grande',
    name: 'Toyota Grande',
    category: 'sedan',
    pricePerDay: 6000,
    image: CAR_IMAGES.toyotaGrande,
    alt: '2019 Toyota Corolla Altis Grande sedan rental Pakistan',
  },
  {
    id: 'toyota-altis-gli-xli',
    name: 'Toyota Altis / GLI / XLI',
    category: 'sedan',
    pricePerDay: 5000,
    image: CAR_IMAGES.toyotaAltis,
    alt: 'Toyota Corolla Altis GLI XLI sedan rental Pakistan',
  },
  {
    id: 'toyota-yaris',
    name: 'Toyota Yaris',
    category: 'economy',
    pricePerDay: 4500,
    image: CAR_IMAGES.toyotaYaris,
    alt: '2020 Toyota Yaris sedan rental Pakistan',
  },
  {
    id: 'suzuki-wagonr',
    name: 'Suzuki WagonR',
    category: 'economy',
    pricePerDay: 3500,
    image: CAR_IMAGES.suzukiWagonR,
    alt: 'Maruti Suzuki WagonR 2019 hatchback rental Pakistan',
  },
  {
    id: 'suzuki-alto',
    name: 'Suzuki Alto',
    category: 'economy',
    pricePerDay: 3500,
    image: CAR_IMAGES.suzukiAlto,
    alt: 'Suzuki Alto HA36 660cc hatchback rental Pakistan',
  },
  {
    id: 'suzuki-cultus',
    name: 'Suzuki Cultus',
    category: 'economy',
    pricePerDay: 3500,
    image: CAR_IMAGES.suzukiCultus,
    alt: 'Suzuki Cultus Swift hatchback rental Pakistan',
  },
]

export const CATEGORIES = [
  { id: 'all', label: 'All Fleet' },
  { id: 'ultra-luxury', label: 'Ultra Luxury' },
  { id: 'limousine', label: 'Limousine' },
  { id: 'suv', label: 'SUV' },
  { id: 'sedan', label: 'Sedan' },
  { id: 'pickup', label: 'Pickup' },
  { id: 'economy', label: 'Economy' },
  { id: 'van', label: 'Van' },
]

export const FEATURED_CARS = CARS.filter((c) => c.featured)

export const formatPkr = (n) =>
  `PKR ${n.toLocaleString('en-PK', { maximumFractionDigits: 0 })}`
