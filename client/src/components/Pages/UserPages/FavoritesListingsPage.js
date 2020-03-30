import React from "react";
import PageTemplate from "../PageTemplate";
import closeDropDownsHandler from '../../../utils/closeDropDownsHandler';
import ListingsContainer from "../../Listings/ListingsContainer";

export default () => {
  window.onclick = e => closeDropDownsHandler(e);

  return (
    <PageTemplate
      Component={ListingsContainer}
    />
  );
};
