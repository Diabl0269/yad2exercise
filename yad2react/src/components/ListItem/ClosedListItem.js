import React from "react";
import CoreDetails from "./CoreDetails";
import RecordImage from "./RecordImage";
import RecordAddress from "./RecordAddress";

const ClosedListItem = ({
  src,
  addressDetails,
  rooms,
  floor,
  squareMeters,
  formatedPrice,
  hasUpdatedToday,
  mainAddress,
  numOfRecordImagesMinusOne
}) => {
  const openNewTab = (e) => {
    e.stopPropagation();
    alert('כאן יפתח טאב חדש')
  } 
  return (
    <div className="record-container">
      <RecordImage
        numOfRecordImagesMinusOne={numOfRecordImagesMinusOne}
        src={src}
      />
      <RecordAddress
        className="record__inside-container"
        mainAddress={mainAddress}
        addressDetails={addressDetails}
      />
      <CoreDetails
        className="record__inside-container middle-container"
        rooms={rooms}
        floor={floor}
        squareMeters={squareMeters}
      />

      <div className="record__inside-container">
        <div className="left-container">
          <div className="align-cloumn">
            <span
              className="smaller-text"
              onClick={openNewTab}
            >
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
