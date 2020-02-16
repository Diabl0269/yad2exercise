import React from "react";
import CoreDetails from "./CoreDetails";

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
  return (
    <div className="record-container">
      <div className="img-container">
        <img src={src} alt="img" />
        <div className="img-icon-container">
  <div className="img-icon smaller-text">{numOfRecordImagesMinusOne}+</div>
        </div>
      </div>
      <div className="record__inside-container right-container">
        <span>{mainAddress}</span>{" "}
        <span className="smaller-text">{addressDetails}</span>
      </div>

      <CoreDetails
        className="record__inside-container middle-container"
        rooms={rooms}
        floor={floor}
        squareMeters={squareMeters}
      />

      <div className="record__inside-container">
        <div className="left-container">
          <div className="test">
            <span
              className="smaller-text"
              onClick={() => alert("כאן יפתח טאב חדש")}
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
