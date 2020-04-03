export default queryObj => {
  const edgesObj = { min: '', max: '' }
  const defaultValues = {
    citySearchValue: '',
    entranceDate: '',
    floor: edgesObj,
    freeText: '',
    listingType: 'מכירה',
    onlyWithPhotos: false,
    onlyWithPrice: false,
    price: edgesObj,
    rooms: edgesObj,
    roomMates: edgesObj,
    selectedAssetTypes: [],
    selectedAttributes: [],
    squareMetersTotal: edgesObj,
    sortBy: '-updatedAt',
    skip: 0,
    count: 0
  }

  for (let [key, value] of Object.entries(defaultValues)) {
    queryObj[key][1](value)
  }
}
