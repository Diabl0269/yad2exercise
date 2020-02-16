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
  formatedPrice
}) => {
  return (
    <div>
      <div className="record-container record-container__open">
        <RecordImage
          numOfRecordImagesMinusOne={numOfRecordImagesMinusOne}
          src={src}
        />

        <div className="open-details--middle-container">
          <RecordAddress
          className='align-cloumn'
            mainAddress={mainAddress}
            addressDetails={addressDetails}
          />
          <br />
          <CoreDetails
          className=' middle-container'
            rooms={rooms}
            floor={floor}
            squareMeters={squareMeters}
          />
        </div>

      <div className='align-column'>
          {formatedPrice}
      </div>
      </div>
    </div>
  );
};

export default OpenListItem;
