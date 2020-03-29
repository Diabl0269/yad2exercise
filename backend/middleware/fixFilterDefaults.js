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
    squareMetersTotal,
    sortBy
  } = body

  const convertEdges = obj => {
    const { min, max } = obj
    const edgesObj = {}
    edgesObj.$gte = (!!min && min) || undefined
    edgesObj.$lte = (!!max && max) || undefined
  }
  const filtersQuery = { listingType, sortBy }
  filtersQuery['address.city'] = citySearchValue ? citySearchValue : undefined
  filtersQuery['assetDetails.floor'] = convertEdges(floor)
  filtersQuery['saleDetails.entranceDate'] = { $gte: entranceDate }
  if (onlyWithPrice) filtersQuery['saleDetails.price'] = { $exists: true }
  filtersQuery['saleDetails.price'] = convertEdges(price)
  filtersQuery['assetDetails.rooms'] = convertEdges(rooms)
  filtersQuery['assetDetails.roomMates'] = convertEdges(roomMates)
  filtersQuery['assetDetails.assetType'] = { $in: selectedAssetTypes }
  selectedAttributes.forEach(attribute => {
    filtersQuery[`attributes.${attribute}.exists`] = true
  })
  if (onlyWithPhotos) filtersQuery['media.images'] = { $where: 'this.media.images.length > 0' }
  filtersQuery['assetDetails.squareMetersTotal'] = convertEdges(squareMetersTotal)

  req.query = filtersQuery
  next()
}
