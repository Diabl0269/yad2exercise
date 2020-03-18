import React from "react";
import { navigate } from "hookrouter";

const UserDetailsButtons = () => {
    const toggleUpdate = () => {
        navigate('/user/:id/update')
    }
  return (
    <div className="align-row">
      <button onClick={toggleUpdate}>עדכן נתונים</button>
      <button onClick={toggleUpdate}>מודעה חדשה</button>
      <button onClick={toggleUpdate}>הצג מודעות</button>
      <button onClick={toggleUpdate}>מחק משתמש</button>
    </div>
  );
};

export default UserDetailsButtons;