import React, { useContext } from "react";
import { navigate } from "hookrouter";
import UserContext from '../../../context/UserContext';

const UserDetailsButtons = () => {
  const user = useContext(UserContext)
  const logOut = () => {
    localStorage.setItem('token', '')
    localStorage.setItem('id', '')
    user[1]({})
    navigate('/')
  }
  const handleDelete = () => {
    alert('will delete')
  }
  return (
    <div className="align-column">
      <div className="align-row">
        <button onClick={() => navigate('/user/update')}>עדכן נתונים</button>
        <button onClick={() => navigate('/user/new-listing')}>מודעה חדשה</button>
        <button onClick={() => navigate('/user/listings')}>הצג מודעות</button>
        <button onClick={() => handleDelete()}>מחק משתמש</button>
      </div>
      <button onClick={logOut}>התנתק</button>
    </div>
  );
};

export default UserDetailsButtons;
