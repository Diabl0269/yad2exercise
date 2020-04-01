const dictonary = require('../data/attributesDictionary.json')

module.exports = (req, res, next) => {
  const { body } = req

  const {
    citySearchValue,
    entranceDate,
    floor,
    price,
    listingType,
    onlyWithPhotos,
    onlyWithPrice,
    rooms,
    roomMates,
    selectedAssetTypes,
    selectedAttributes,
    squareMetersTotal
  } = body

  const convertEdges = obj => {
    const { min, max } = obj
    const edgesObj = {}
    if (min) edgesObj.$gte = min
    if (max) edgesObj.$lte = max
    return edgesObj
  }
  const filtersQuery = { listingType }
  if (!!citySearchValue) filtersQuery['address.city'] = citySearchValue
  if (price.min || price.max) filtersQuery['saleDetails.price'] = convertEdges(price)
  if (floor.min || floor.max) filtersQuery['assetDetails.floor'] = convertEdges(floor)
  if (entranceDate) filtersQuery['saleDetails.entranceDate'] = { $gte: entranceDate }

  if (rooms.min || rooms.max) filtersQuery['assetDetails.rooms'] = convertEdges(rooms)
  if (roomMates && (roomMates.min || roomMates.max))
    filtersQuery['assetDetails.roomMates'] = convertEdges(roomMates)
  if (selectedAssetTypes.length > 0)
    filtersQuery['assetDetails.assetType'] = { $in: selectedAssetTypes }

  selectedAttributes.forEach(attribute => {
    filtersQuery[`attributes.${dictonary[attribute]}.exists`] = true
  })

  if (squareMetersTotal.min || squareMetersTotal.max)
    filtersQuery['assetDetails.squareMetersTotal'] = convertEdges(squareMetersTotal)

  if (onlyWithPhotos) filtersQuery['media.images.0'] = { $exists: true }
  
  console.log(filtersQuery)

  req.query = filtersQuery
  next()
}
