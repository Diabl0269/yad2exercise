import React, { useContext } from 'react'
import { navigate } from 'hookrouter'
import UserContext from '../../../context/UserContext'
import AlertDialog from '../../Mui/AlertDialog'

export default () => {
  const user = useContext(UserContext)

  const logOut = () => {
    localStorage.setItem('token', '')
    localStorage.setItem('id', '')
    user[1]({})
    navigate('/', true)
  }

  const handleDelete = () => {
  }

  return (
    <div className="align-column">
      <div className="align-row">
        <button onClick={() => navigate('/user/update')}>עדכן נתונים</button>
        <button onClick={() => navigate('/user/listings/add')}>מודעה חדשה</button>
        <button onClick={() => navigate('/user/listings')}>הצג מודעות</button>
        {/* <button onClick={() => handleDelete()}>מחק משתמש</button> */}
        <AlertDialog />
      </div>
      <button onClick={logOut}>התנתק</button>
    </div>
  )
}
