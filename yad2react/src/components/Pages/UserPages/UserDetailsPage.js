import React from "react";
import PageTemplate from "../PageTemplate";
import UserDetailsForm from '../../Forms/UserForm/UserDetailsForm';

const UserDetailsPage = () => {
  return (
    <PageTemplate
      Component={UserDetailsForm}
    />
  );
};

export default UserDetailsPage;
