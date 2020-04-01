import React from 'react'
import OnlyWithButton from './OnlyWithButton'

export default () => {
  return (
    <div className="align-row ">
      הצג מודעות
      <OnlyWithButton text="עם מחיר" only={'onlyWithPrice'} />
      <OnlyWithButton text="עם תמונה" only={'onlyWithPhotos'} />
    </div>
  )
}
