import React, { useContext } from 'react'
import ListItemContext from '../../context/ListItemContext'

export default () => {
  const {
    media: { images }
  } = useContext(ListItemContext)
  const numOfRecordImagesMinusOne = images.length - 1
  const src = images[0] ? process.env.REACT_APP_STORAGE_PATH + images[0] : '/images/noImgs.jpg'
  return (
    <div className="img-container">
      <img src={src} alt="img" />
      {numOfRecordImagesMinusOne !== -1 && (
        <div className="img-icon-container">
          <div className="img-icon smaller-text">{numOfRecordImagesMinusOne}+</div>
        </div>
      )}
    </div>
  )
}
