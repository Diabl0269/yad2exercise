import { useState } from 'react'

const useQuery = () => {
  const edgesObj = { min: '', max: '' }
  const query = {
    citySearchValue: useState(''),
    entranceDate: useState(new Date().getTime()),
    floor: useState(edgesObj),
    freeText: useState(''),
    listingType: useState('מכירה'),
    onlyWithPhotos: useState(false),
    onlyWithPrice: useState(false),
    price: useState(edgesObj),
    rooms: useState(edgesObj),
    roomMates: useState(edgesObj),
    selectedAssetTypes: useState([]),
    selectedAttributes: useState([]),
    squareMetersTotal: useState(edgesObj),
    sortBy: useState('-updatedAt'),
    skip: useState(0),
    count: useState(0)
  }
  return query
}

export default useQuery
