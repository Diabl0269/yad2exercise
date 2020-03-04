import React from "react";

const PriceFilter = ({ price, setPrice }) => {
  const handleSetPrice = ({ id, value }) => {
    if (value === "" || !isNaN(value[value.length - 1])) {
      id = id.slice(0, 3);
      setPrice({ ...price, [id]: value });
    }
  };

  return (
    <div className="filters--field-container">
      מחיר בש"ח
      <div className="filters__price-container">
        <input
          type="text"
          id="minPrice"
          value={price.min}
          onChange={e => handleSetPrice(e.target)}
          className="filters__price-inner-container"
        />
        <input
          type="text"
          value={price.max}
          onChange={e => handleSetPrice(e.target)}
          id="maxPrice"
          className="filters__price-inner-container"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
