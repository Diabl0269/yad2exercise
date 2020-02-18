import React from "react";

const CoreDetails = ({ rooms, floor, totalSquareMeters, className }) => {
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

export default CoreDetails;