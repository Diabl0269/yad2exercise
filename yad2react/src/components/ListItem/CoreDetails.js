import React from "react";

const CoreDetails = ({ rooms, floor, squareMeters, className }) => {
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
        {squareMeters}
        <span>מ"ר</span>
      </div>
    </div>
  );
};

export default CoreDetails;