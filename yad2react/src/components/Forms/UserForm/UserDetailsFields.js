import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";
import Loader from "../../utils/Loader";

const UserDetailsFields = () => {
  
  const  user  = useContext(UserContext);

  const Field = ({ text, value }) => (
    <div id="userField">
      {text}
      <div>{value}</div>
    </div>
  );

  return (user[0].userDetails ?  
    <UserContext.Consumer >
      {(user) => {
        return <div>
        <Field
          text="שם"
          value={user[0].userDetails.firstName + " " + user[0].userDetails.lastName}
        />
        <Field text="פלאפון" value={user[0].userDetails.phone} />
        {user[0].userDetails.phone2 && (
          <Field text="פלאפון2" value={user[0].userDetails.phone2} />
        )}
        <Field text="אימייל" value={user[0].userDetails.email} />
      </div> 
      }}
    </UserContext.Consumer>
    : <Loader />
  );
};

export default UserDetailsFields;