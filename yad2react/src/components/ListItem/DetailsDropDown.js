import React from "react";
import openDropDown from '../../utils/openDropDown';

const DetailsDropDown = ({ listingUser }) => {
  const { userDetails } = listingUser;
  const {firstName, phone, phone2 } = userDetails;

  return (
    <div>
      <button className="details-button" onClick={e => openDropDown(e, 'detailsDropDown')}>
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
