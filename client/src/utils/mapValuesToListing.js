export default values => ({
  listingType: values.listingType,
  address: {
    city: values.city,
    street: values.street,
    streetNumber: values.streetNumber,
    entrance: values.entrance,
    neighborhood: values.neighborhood,
    area: values.area
  },
  assetDetails: {
    assetState: values.assetState,
    assetType: values.assetType,
    balconies: values.balconies,
    description: values.description,
    floor: values.floor,
    furnitureDescription: values.furnitureDescription,
    parking: values.parking,
    rooms: values.rooms,
    roomMates: values.roomMates,
    squareMetersBuilt: values.squareMetersBuilt,
    squareMetersGarden: values.squareMetersGarden,
    totalFloors: values.totalFloors
  },
  saleDetails: {
    price: values.price,
    entranceDate: values.entrance
  },
  attributes: {
    exclusivity: values.exclusivity,
    airConditioned: values.airConditioned,
    kitchen: values.kitchen,
    kosherKithecn: values.kosherKithecn,
    lift: values.lift,
    bars: values.bars,
    renovated: values.renovated,
    disabledAccess: values.disabledAccess,
    safeSpace: values.safeSpace,
    pandorDoor: values.pandorDoor,
    warehouse: values.warehouse,
    tadiranAirConditioned: values.tadiranAirConditioned,
    furniture: values.furniture,
    livingUnit: values.livingUnit
  },
  media: {
    images: values.images,
    videos: values.videos
  }
})
