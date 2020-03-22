import React, { useState } from "react";
import numeral from "numeral";
import moment from "moment";
import ClosedListItem from "./ClosedListItem";
import OpenListItem from "./OpenListItem";

const ListItem = ({ record }) => {
  const defaultStreet = "לא צוין רחוב";
  const {
    attributes,
    address,
    assetDetails,
    saleDetails,
    listingUser,
    updatedAt
  } = record;
  const { assetType } = assetDetails;
  const {
    city,
    street = defaultStreet,
    streetNumber = "",
    neighborhood = "",
    area = ""
  } = address;
  const { price, entranceDate } = saleDetails;
  const mainAddress = `${street} ${streetNumber}`;
  const addressDetails = `${assetType}, ${area}, ${neighborhood}, ${city}`;
  const src = record.media.imageBase64
    ? "data:image/png;base64," + record.media.imageBase64[0]
    : "/images/noImgs.jpg";
  const numOfRecordImagesMinusOne = record.media.imageBase64
    ? record.media.imageBase64.length - 1
    : null;
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
          attributes={attributes}
          src={src}
          numOfRecordImagesMinusOne={numOfRecordImagesMinusOne}
          mainAddress={mainAddress}
          addressDetails={addressDetails}
          assetDetails={assetDetails}
          formatedPrice={formatedPrice}
          entranceDate={entranceDate}
          listingUser={listingUser}
        />
      ) : (
        <ClosedListItem
          src={src}
          addressDetails={addressDetails}
          assetDetails={assetDetails}
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
