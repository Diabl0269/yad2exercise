module.exports = (req, res, next) => {
  req.body = JSON.parse(req.body.fields)

  const { body } = req
  req.body = {
    listingType: body.listingType,
    address: {
      city: body.city,
      street: body.street,
      streetNum: body.streetNum,
      entrance: body.entrance,
      neighborhood: body.neighborhood,
      area: body.area
    },
    assetDetails: {
      assetType: body.assetType,
      assetState: body.assetState,
      balconies: body.balconies,
      description: body.description,
      floor: body.floor,
      furnitureDescription: body.furnitureDescription,
      parking: body.parking,
      rooms: body.rooms,
      squareMetersBuilt: body.squareMetersBuilt,
      squareMetersGarden: body.squareMetersGarden,
      totalFloors: body.totalFloors
    },
    saleDetails: {
      price: body.price,
      entranceDate: body.entranceDate
    },
    attributes: {
      exclusivity: { exists: !!body.exclusivity },
      airConditioned: { exists: !!body.airConditioned },
      kitchen: { exists: !!body.kitchen },
      kosherKithecn: { exists: !!body.kosherKithecn },
      lift: { exists: !!body.lift },
      bars: { exists: !!body.bars },
      renovated: { exists: !!body.renovated },
      disabledAccess: { exists: !!body.disabledAccess },
      safeSpace: { exists: !!body.safeSpace },
      pandorDoor: { exists: !!body.pandorDoor },
      warehouse: { exists: !!body.warehouse },
      tadiranAirConditioned: { exists: !!body.tadiranAirConditioned },
      furniture: { exists: !!body.furniture },
      livingUnit: { exists: !!body.livingUnit }
    },
    media: {
      images: [],
      videos: []
    },
    listingUser: req.userID
  }

  next()
}
