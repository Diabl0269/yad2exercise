import React from 'react'

export default ({attributesArray}) => {
    console.log(attributesArray);
    
    return attributesArray.map(
      attribute =>
         (
          <div
            key={attribute.text}
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