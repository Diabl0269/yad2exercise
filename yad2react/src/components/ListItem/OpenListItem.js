import React from "react";
import RecordImage from "./RecordImage";
import RecordAddress from "./RecordAddress";
import CoreDetails from "./CoreDetails";

const OpenListItem = ({
  numOfRecordImagesMinusOne,
  src,
  mainAddress,
  addressDetails,
  rooms,
  floor,
  squareMeters,
  formatedPrice,
  firstName, lastName
}) => {
  const openPhoneDropDown = e => {
    e.stopPropagation();
    document.getElementById("phoneDropDown").style.display = "flex";
  };
  const displayName = firstName + ' ' + lastName;
  return (
    <div className="record-container record-container__open">
      <RecordImage
        numOfRecordImagesMinusOne={numOfRecordImagesMinusOne}
        src={src}
      />

      <div className="open-details--middle-container">
        <RecordAddress
          className="align-cloumn"
          mainAddress={mainAddress}
          addressDetails={addressDetails}
        />
        <br />
        <CoreDetails
          className="middle-container"
          rooms={rooms}
          floor={floor}
          squareMeters={squareMeters}
        />
      </div>

      <div className="align-column">
        <div className="left-container">{formatedPrice}</div>
        <button className="phone-button" onClick={openPhoneDropDown}>
          הצגת מספר טלפון
        </button>
        <div id="phoneDropDown" className="phone-dropdown">
          בלה בלה בלה
          <br />
          ננסה ככה
        </div>
      </div>
    </div>
  );
};

export default OpenListItem;
