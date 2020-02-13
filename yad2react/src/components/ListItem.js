import React from "react";
import numeral from "numeral";
import moment from "moment";

const ListItem = ({ record }) => {
  const defaultStreet = "לא צוין רחוב";
  const { address, assetDetails, saleDetails, updatedAt } = record;
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
  const formatedPrice = price
    ? "₪" + numeral(price).format("0,00")
    : "לא צויין מחיר";
  const hasUpdatedToday = moment().isSame(updatedAt, "day");
  return (
    <li className="record-container">
      <div className="img-container">
        <img className="record__image" src={src} alt="img" />
      </div>
      <div className="record__inside-container right-container">
        <span>{mainAddress}</span>{" "}
        <span className="smaller-text">{addressDetails}</span>
      </div>

      <div className="record__inside-container middle-container">
        <div>
          {rooms}
          <span>חדרים</span>
        </div>
        <div>
          {floor}
          <span>קומה</span>
        </div>
        <div>
          {squareMeters}
          <span>מ"ר</span>
        </div>
      </div>

      <div className='record__inside-container left-container'>
        <span>טאב חדש</span>
        {formatedPrice}
        <span>{hasUpdatedToday ? "עודכן היום" : ""}</span>
      </div>
    </li>
  );
};

export default ListItem;
