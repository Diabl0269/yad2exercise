import React from "react";
import PageTemplate from "../PageTemplate";
import UserListingsForm from '../../Forms/UserForm/UserListingsForm';
import closeDropDownsHandler from '../../../utils/closeDropDownsHandler';

const NewListingPage = () => {
  window.onclick = e => closeDropDownsHandler(e);

  return (
    <PageTemplate
      Component={UserListingsForm}
    />
  );
};

export default NewListingPage;
