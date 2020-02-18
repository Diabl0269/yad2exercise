import React from "react";
import CoreDetails from "./CoreDetails";
import RecordImage from "./RecordImage";
import RecordAddress from "./RecordAddress";

const ClosedListItem = ({
  addressDetails,
  assetDetails,
  formatedPrice,
  hasUpdatedToday,
  mainAddress,
  numOfRecordImagesMinusOne,
  src,
}) => {
  const { rooms, floor, totalSquareMeters} = assetDetails;  
  const openNewTab = e => {
    e.stopPropagation();
    alert("כאן יפתח טאב חדש");
  };
  return (
    <div className="record-container">
      <RecordImage
        numOfRecordImagesMinusOne={numOfRecordImagesMinusOne}
        src={src}
      />
      <RecordAddress
        addressDetails={addressDetails}
        className="record__inside-container"
        mainAddress={mainAddress}
      />
      <CoreDetails
        className="record__inside-container middle-container"
        floor={floor}
        rooms={rooms}
        totalSquareMeters={totalSquareMeters}
      />

      <div className="record__inside-container">
        <div className="left-container">
          <div className="align-column">
            <span className="smaller-text" onClick={openNewTab}>
              טאב חדש
            </span>
            {formatedPrice}
            <span>{hasUpdatedToday ? "עודכן היום" : ""}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosedListItem;
