import React, { useEffect, useState } from "react";
import getUser from "../../../communication/getUser";
import ShowDetails from "./ShowDetails";
import UpdateDetails from './UpdateDetails';

const UserForm = () => {
  const [user, dispatch] = useState(true);
  const [update, toggleUpdate] = useState(false)
  useEffect(() => {
    getUser(dispatch);
  }, []);

  return (
    <div className="user-form">
      {user ? ( update ? <UpdateDetails user={user} toggleUpdate={toggleUpdate}/> :
        <ShowDetails user={user} toggleUpdate={toggleUpdate}/>  
      ) : (
        <h2>תקלת שרת, אנא נסה להתחבר שנית</h2>
      )}
    </div>
  );
};

export default UserForm;
