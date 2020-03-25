module.exports = (req, res, next) => {   
  req.body = JSON.parse(req.body.fields);
  const { body } = req;
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
      exclusivity: body.exclusivity,
      airConditioned: body.airConditioned,
      kitchen: body.kitchen,
      kosherKithecn: body.kosherKithecn,
      lift: body.lift,
      bars: body.bars,
      renovated: body.renovated,
      disabledAccess: body.disabledAccess,
      safeSpace: body.safeSpace,
      pandorDoor: body.pandorDoor,
      warehouse: body.warehouse,
      tadiranAirConditioned: body.tadiranAirConditioned,
      furniture: body.furniture,
      livingUnit: body.livingUnit
    },
    media: {
      images: [],
      videos: []
    },
    listingUser: req.userID
  };
  next()
};
