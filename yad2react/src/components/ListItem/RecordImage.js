import React from "react";

const RecordImage = ({ src, numOfRecordImagesMinusOne }) => {
  return (
    <div className="img-container">
      <img src={src} alt="img" />
      {numOfRecordImagesMinusOne !== null && (
        <div className="img-icon-container">
          <div className="img-icon smaller-text">
            {numOfRecordImagesMinusOne}+
          </div>
        </div>
      )}
    </div>
  );
};

export default RecordImage;
