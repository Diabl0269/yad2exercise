// import React, { useEffect, useState } from "react";
// import getUser from "../../../communication/getUser";
// import UserDetailsForm from "./UserDetailsForm";
// import UpdateUserDetailsForm from "./UpdateUserDetailsForm";

// const UserForm = () => {
//   const [user, dispatch] = useState(true);
//   const [update, toggleUpdate] = useState(false);
//   useEffect(() => {
//     getUser(dispatch);
//   }, []);
  
//   return (
//     <div className="user-page">
//       {user ? (
//         update ? (
//           <UpdateUserDetailsForm user={user} toggleUpdate={toggleUpdate} />
//         ) : (
//           <UserDetailsForm user={user} toggleUpdate={toggleUpdate} />
//         )
//       ) : (
//         <h2>תקלת שרת, אנא נסה להתחבר שנית</h2>
//       )}
//     </div>
//   );
// };

// export default UserForm;
