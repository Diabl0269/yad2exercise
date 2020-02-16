import React from "react";
import RecordImage from "./RecordImage";
import RecordAddress from "./RecordAddress";
import CoreDetails from "./CoreDetails";

const OpenListItem = ({
  numOfRecordImagesMinusOne,
  src,
  mainAddress,
  addressDetails,
  assetDetails,
  formatedPrice,
  listingUser
}) => {
  const {rooms, floor, squareMeters} = assetDetails;
  const {firstName, phone, email} = listingUser;
  const openPhoneDropDown = e => {
    e.stopPropagation();
    document.getElementById("detailsDropDown").style.display = "flex";
  };
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
        <button className="details-button" onClick={openPhoneDropDown}>
          הצגת מספר טלפון
        </button>
        <div id="detailsDropDown" className="details__dropdown">
          <div className="details__dropdown-tab">{firstName}</div>
          <div className='details__dropdown-tab'>phone</div>

        </div>
      </div>
    </div>
  );
};

export default OpenListItem;
