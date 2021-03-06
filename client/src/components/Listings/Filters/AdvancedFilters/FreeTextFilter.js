import React, { useContext } from "react";
import FiltersContext from "../../../../context/FiltersContext";

const FreeTextFilter = () => {
  const  [freeText, setFreeText ] = useContext(FiltersContext).queryObj.freeText;

  return (
    <div className="margin-bottom-m border-bottom width-full">
      <div className="">
        טקסט חופשי
        <input
          type="text"
          className="filters__field-box-container margin-bottom-m"
          value={freeText}
          onChange={e => setFreeText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FreeTextFilter;
