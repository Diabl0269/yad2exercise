import { useState } from 'react'

const useQuery = () => {
  const edgesObj = { min: '', max: '' }
  const query = {
    citySearchValue: useState(''),
    count: useState(0),
    entranceDate: useState(),
    floor: useState(edgesObj),
    freeText: useState(''),
    listingType: useState('מכירה'),
    onlyWithPhotos: useState(false),
    onlyWithPrice: useState(false),
    price: useState(edgesObj),
    roomMates: useState(edgesObj),
    rooms: useState(edgesObj),
    selectedAssetTypes: useState([]),
    selectedAttributes: useState([]),
    selectedDealTypes: useState([]),
    skip: useState(0),
    sortBy: useState('-updatedAt'),
    squareMetersTotal: useState(edgesObj),
  }
  return query
}

export default useQuery
