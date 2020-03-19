import React from "react";
import PageTemplate from "../PageTemplate";
import NewListingForm from '../../Forms/UserForm/NewListingForm';

const NewListingPage = () => {
  return (
    <PageTemplate
      Component={NewListingForm}
    />
  );
};

export default NewListingPage;
