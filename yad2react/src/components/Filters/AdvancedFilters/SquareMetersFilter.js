import React, { useContext } from "react";
import FiltersContext from "../../../context/FiltersContext";

const SquareMetersFilter = () => {
  const { squareMetersTotal, setSquareMetersTotal } = useContext(
    FiltersContext
  );
  const handleSetSquareMeters = ({ id, value }) => {
    if (value === "" || !isNaN(value[value.length - 1]))
      setSquareMetersTotal({ ...squareMetersTotal, [id]: value });
  };
  return (
    <div className="filters--field-container">
      גודל דירה (במ"ר)
      <div className="filters__price-container">
        <input
          type="text"
          id="min"
          value={squareMetersTotal.min}
          onChange={e => handleSetSquareMeters(e.target)}
          className="filters__price-inner-container"
        />
        <input
          type="text"
          value={squareMetersTotal.max}
          onChange={e => handleSetSquareMeters(e.target)}
          id="max"
          className="filters__price-inner-container"
        />
      </div>
    </div>
  );
};

export default SquareMetersFilter;
