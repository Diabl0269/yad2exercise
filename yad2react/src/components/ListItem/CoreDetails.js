import React, { useContext } from "react";
import ListItemContext from "../../context/ListItemContext";

export default ({ className }) => {
  const {assetDetails: { rooms, floor, totalSquareMeters}} = useContext(ListItemContext);
  return (
    <div className={className}>
      <div>
        {rooms}
        <span>חדרים</span>
      </div>
      <div>
        {floor}
        <span>קומה</span>
      </div>
      <div>
        {totalSquareMeters}
        <span>מ"ר</span>
      </div>
    </div>
  );
};