import React from "react";

const RecordAddress = ({ mainAddress, addressDetails, className }) => {
  return (
    <div className={className}>
      <span>{mainAddress}</span>{" "}
      <span className="smaller-text">{addressDetails}</span>
    </div>
  );
};

export default RecordAddress;
