import React, { useState } from "react";
import numeral from "numeral";
import moment from "moment";
import ClosedListItem from "./ClosedListItem";
import OpenListItem from "./OpenListItem";

const ListItem = ({ record }) => {
  const defaultStreet = "לא צוין רחוב";
  const { address, assetDetails, saleDetails, listingUser, updatedAt } = record;
  const {
    assetType,
    city,
    street = defaultStreet,
    streetNumber = "",
    neighborhood = "",
    area = ""
  } = address;
  const { floor, rooms, squareMeters } = assetDetails;
  const { price } = saleDetails;
  const mainAddress = `${street} ${streetNumber}`;
  const addressDetails = `${assetType}, ${area}, ${neighborhood}, ${city}`;
  const src = "data:image/png;base64," + record.media.imageBase64[0];
  const numOfRecordImagesMinusOne = record.media.imageBase64.length - 1;
  const formatedPrice = price
    ? "₪" + numeral(price).format("0,00")
    : "לא צויין מחיר";
  const hasUpdatedToday = moment().isSame(updatedAt, "day");
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => setIsOpen(!isOpen);
  return (
    <li onClick={clickHandler}>
      {isOpen ? (
        <OpenListItem
          src={src}
          numOfRecordImagesMinusOne={numOfRecordImagesMinusOne}
          mainAddress={mainAddress}
          addressDetails={addressDetails}
          rooms={rooms}
          floor={floor}
          squareMeters={squareMeters}
          formatedPrice={formatedPrice}
        />
      ) : (
        <ClosedListItem
          src={src}
          addressDetails={addressDetails}
          rooms={rooms}
          floor={floor}
          squareMeters={squareMeters}
          formatedPrice={formatedPrice}
          hasUpdatedToday={hasUpdatedToday}
          mainAddress={mainAddress}
          numOfRecordImagesMinusOne={numOfRecordImagesMinusOne}
        />
      )}
    </li>
  );
};

export default ListItem;
