import React from "react";

const Description = ({ agencyName, assetDetails, attributes }) => {
  const {
    assetState,
    assetType,
    balconies,
    entranceDate = "",
    furnitureDescription = "",
    parking,
    squareMetersBuilt,
    squareMetersGarden,
    totalFloors
  } = assetDetails;
  const displayEntranceDate = entranceDate || "לא צוין תאריך כניסה";

  const arrayAttributes = Object.values(attributes);
  const displayArrayAttributes = () =>
    arrayAttributes.map(
      attribute =>
        Object.keys(attribute).length === 2 && (
          <div key={attribute.text}
            className={
              "open-listing__description__details-item " +
              (!attribute.exists && "dosent-exist")
            }
          >
            {attribute.text}
          </div>
        )
    );

  return (
    <div className="open-listing__description-container smaller-text">
      <div className="open-listing__description--ad">כאן תהיה פרסומת</div>
      <div className="open-listing__description-sub-container">
        {agencyName && (
          <div className="open-listing__description--agency">
            משרד התיווך: <b>{agencyName}</b>
          </div>
        )}
        <br />
        <div>
          <b>תיאור הנכס</b> <p>{assetDetails.description}</p>
          <div className="smallest-text">
            {assetType !== "מגרשים" && (
              <div className="open-listing__description__details-container">
                <div className="open-listing__description__details-item">
                  מצב הנכס <b>{assetState}</b>
                </div>
                <div className="open-listing__description__details-item">
                  תאריך כניסה <b>{displayEntranceDate}</b>
                </div>
                <div className="open-listing__description__details-item">
                  קומות בבניין <b>{totalFloors}</b>
                </div>
                <div className="open-listing__description__details-item">
                  חניות <b>{parking ? parking : "ללא"}</b>
                </div>
                {balconies && (
                  <div className="open-listing__description__details-item">
                    מרפסות <b>{balconies}</b>
                  </div>
                )}
                {squareMetersGarden && (
                  
                    <div className="open-listing__description__details-item">
                      מ"ר גינה <b>{squareMetersGarden}</b>
                    </div>
                    // <div className="open-listing__description__details-item">
                    //   מ"ר בנוי <b>{squareMetersBuilt}</b>
                    // </div>
                  
                )}
              </div>
            )}
          </div>
        </div>
        <br />
        <b>מה יש בנכס?</b>
        <div className="open-listing__description__details-container no-border">
          <div className="open-listing__description__details-container no-border smallest-text">
            {displayArrayAttributes()}
          </div>
          {furnitureDescription && (
            <div>
              <b>פירוט ריהוט</b>
              <p className="smallest-text">{furnitureDescription}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Description;
