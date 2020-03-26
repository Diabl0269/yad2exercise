import React, { useContext } from 'react'
import ListItemContext from '../../context/ListItemContext'

const RecordAddress = ({ className }) => {
  const defaultStreet = 'לא צוין רחוב'
  const {
    address: {
      city,
      street = defaultStreet,
      streetNumber = '',
      neighborhood = '',
      area = ''
    },
    assetDetails: { assetType }
  } = useContext(ListItemContext)
  const mainAddress = `${street} ${streetNumber}`
  const addressDetails = `${assetType}, ${area}, ${neighborhood}, ${city}`
  return (
    <div className={className}>
      <span>{mainAddress}</span>{' '}
      <span className="smaller-text">{addressDetails}</span>
    </div>
  )
}

export default RecordAddress
