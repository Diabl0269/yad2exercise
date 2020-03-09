import React from "react";

export default ({ value, group, className }) => (
  <div className='checkbox__list-item'>
    <input type="radio" name={group} value={value} className={className} />
    <label>{value}</label>
  </div>
);
