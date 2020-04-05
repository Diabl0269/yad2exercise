import React, { useContext } from 'react'
import { navigate } from 'hookrouter'
import UserContext from '../../../context/UserContext'
import AlertDialog from '../../Mui/AlertDialog'
import varsObj from '../../../data/deleteUserDialogVars.json'
import deleteUser from '../../../communication/deleteUser';

export default () => {
  const user = useContext(UserContext)

  const logOut = () => {
    localStorage.setItem('token', '')
    localStorage.setItem('id', '')
    user[1]({})
    navigate('/', true)
  }

  return (
    <div className="align-column">
      <div id='userDetailsTopContainer'>
        <button onClick={() => navigate('/user/update')}>עדכן נתונים</button>
        <button onClick={() => navigate('/user/listings/add')}>מודעה חדשה</button>
        <button onClick={() => navigate('/user/listings')}>הצג מודעות</button>
        <AlertDialog varsObj={varsObj} deleteFunc={deleteUser} />
      </div>
      <button onClick={logOut}>התנתק</button>
    </div>
  )
}
