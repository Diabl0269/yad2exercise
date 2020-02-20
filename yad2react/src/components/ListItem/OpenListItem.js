import React from "react";
import RecordImage from "./RecordImage";
import RecordAddress from "./RecordAddress";
import CoreDetails from "./CoreDetails";
import DetailsDropdown from "./DetailsDropDown";
import Description from "./Description";

const OpenListItem = ({
  numOfRecordImagesMinusOne,
  src,
  mainAddress,
  addressDetails,
  assetDetails,
  formatedPrice,
  listingUser,
  attributes
}) => {
  const { rooms, floor, totalSquareMeters } = assetDetails;
  const { agencyName = "" } = listingUser.userDetails;
  
  return (
    <div>
      <div className="record-container record-container__open">
        <RecordImage
          numOfRecordImagesMinusOne={numOfRecordImagesMinusOne}
          src={src}
        />

        <div className="open-listing--middle-container">
          <RecordAddress
            className="align-column"
            mainAddress={mainAddress}
            addressDetails={addressDetails}
          />
          <br />
          <CoreDetails
            className="middle-container"
            rooms={rooms}
            floor={floor}
            totalSquareMeters={totalSquareMeters}
          />
        </div>

        <div className="push-left">
          <div className="left-container">
            {formatedPrice || "לא צוין מחיר"}
          </div>
          <DetailsDropdown listingUser={listingUser} />
        </div>
      </div>

      <Description
        assetDetails={assetDetails}
        agencyName={agencyName}
        attributes={attributes}
      />

      <div class='open-listing--footer'><div>פרטי התקשרות</div><div>מצאתי טעות</div></div>
    </div>
  );
};

export default OpenListItem;
