import React from "react";

const DetailsDropDown = ({ listingUser }) => {
  const { userDetails } = listingUser;
  const {firstName, phone, phone2 } = userDetails;
  const openDetailsDropDown = e => {
    
    e.stopPropagation();
    document.getElementById("detailsDropDown").style.display = "flex";
  };
  return (
    <div>
      <button className="details-button" onClick={openDetailsDropDown}>
        הצגת מספר טלפון
      </button>
      <div id="detailsDropDown" className="details__dropdown">
        <div className="details__dropdown-tab">{firstName}</div>
        <div className="details__dropdown-tab">{phone}</div>
        {phone2 && <div className="details__dropdown-tab">{phone2}</div>}
        <div
          className="details__dropdown-tab"
          onClick={() => alert("כאן ישלח מייל למפרסם")}
        >
          שליחת דוא"ל למפרסם
        </div>
      </div>
    </div>
  );
};

export default DetailsDropDown;
