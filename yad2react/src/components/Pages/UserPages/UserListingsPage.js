import React from "react";
import PageTemplate from "../PageTemplate";
import UserListingsForm from '../../Forms/UserForm/UserListingsForm';

const NewListingPage = () => {
  return (
    <PageTemplate
      Component={UserListingsForm}
    />
  );
};

export default NewListingPage;
