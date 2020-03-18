import React from "react";
import UserDetailsFields from "./UserDetailsFields";
import UserDetailsButtons from './UserDetailsButtons';

const UserDetailsForm = () => {
  return (
    <div className="user-page">
      <div id="userDetailsFormContainer">
        <h1>פרטי משתמש</h1>
        <UserDetailsFields />
        <UserDetailsButtons />
        </div>
    </div>
  );
};

export default UserDetailsForm;
