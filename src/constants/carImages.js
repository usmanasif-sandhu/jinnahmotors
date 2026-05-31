/**
 * Real vehicle photos via Wikimedia Commons Special:FilePath.
 * Public, CC-licensed images — browser resolves to optimized thumbnails.
 * @param {string} fileName - Commons file name with underscores
 * @param {number} [width=960]
 */
export function wikiFile(fileName, width = 960) {
  const safe = fileName.trim().replace(/ /g, '_')
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURI(safe)}?width=${width}`
}

/** Verified Commons filenames matching each fleet vehicle */
export const CAR_IMAGE_FILES = {
  mercedesGBrabus: 'Brabus_G800_(51893654357).jpg',
  bmwI8: '2015_BMW_i8_(I12)_coupe_(25955907275).jpg',
  porscheTaycan: 'Porsche_Taycan_4S_IMG_4881.jpg',
  bentleyFlyingSpur: '2020_Bentley_Flying_Spur_First_Edition_6.0_Front.jpg',
  lexusLimousine: 'Stretch_Limo.jpg',
  gmcLimousine: '2015_GMC_Yukon_Denali_(United_States)_front_view.jpg',
  tundraLimousine: '2022_Toyota_Tundra_Limited_(United_States)_front_view.jpg',
  bmw7Series: '2022_BMW_740i_xDrive_(G11),_front_3.17.22.jpg',
  rangeRoverVogue:
    '2018_Land_Rover_Range_Rover_Vogue_SDV6_Autobiography_4.4_Front.jpg',
  mercedesMaybach: 'Mercedes-Maybach_S680_4MATIC_IMG_7404.jpg',
  mercedesAmgC:
    'Mercedes-AMG_C_63_S_(W205)_–_Frontansicht,_20._Juli_2016,_Düsseldorf.jpg',
  landCruiserZx: '2022_Toyota_Land_Cruiser_300_ZX_(GRJ300),_front_8.31.22.jpg',
  landCruiser300:
    '2022_Toyota_Land_Cruiser_300_GR_Sport_(GRJ300),_front_8.31.22.jpg',
  audiA6: 'Audi_A6_50_TDI_quattro_S_line_(C8)_–_f_05032019.jpg',
  audiA5: 'Audi_A5_Sportback_40_TDI_quattro_S_line_(F5)_–_f_16122018.jpg',
  toyotaTundra: '2022_Toyota_Tundra_Limited_(United_States)_front_view.jpg',
  toyotaPradoTx:
    '2015_Toyota_Land_Cruiser_Prado_(TRJ150W)_TX_wagon_(2016-01-01)_01.jpg',
  toyotaFortuner: '2017-2018_Toyota_Fortuner_(AN160)_2.4_V_SUV_(22-03-2018)_04.jpg',
  toyotaRevo: '2018_Toyota_Hilux_Revo_(Thailand)_front.jpg',
  toyotaHiace: 'Toyota_Hiace_Super_Grandia_(Philippines)_front.jpg',
  hondaCivic11: '2022_Honda_Civic_EX_(United_States)_front_view_02.jpg',
  hondaCivicX: '2016_Honda_Civic_Touring_(United_States)_front_view.jpg',
  toyotaGrande: '2019_Toyota_Corolla_Altis_1.8_G_(Thailand)_front_view.jpg',
  toyotaAltis: '2014_Toyota_Corolla_(E170)_Ascent_sedan_(2015-07-09)_01.jpg',
  toyotaYaris: '2020_Toyota_Yaris_(Thailand)_front_view.jpg',
  suzukiWagonR: 'Maruti_Suzuki_WagonR_(2019)_front.jpg',
  suzukiAlto: 'Suzuki_Alto_(HA36),_front_2019.jpg',
  suzukiCultus: 'Maruti_Suzuki_Celerio_(2014)_front.jpg',
}

export const CAR_IMAGES = Object.fromEntries(
  Object.entries(CAR_IMAGE_FILES).map(([key, file]) => [
    key,
    wikiFile(file),
  ]),
)

export const heroImage = wikiFile(CAR_IMAGE_FILES.mercedesMaybach, 1280)

export const aboutImage = wikiFile(CAR_IMAGE_FILES.mercedesMaybach, 960)
