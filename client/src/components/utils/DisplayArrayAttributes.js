import React from 'react'

export default ({attributesArray}) => { 
    return attributesArray.map(
      (attribute, index) =>
         (
          <div
            key={index}
            className={
              "open-listing__description__details-item " +
              (!attribute.exists && "dosent-exist")
            }
          >
            {attribute.text}
          </div>
        )
    );

}