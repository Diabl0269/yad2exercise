import React, { useState, useContext, useEffect } from 'react'
import { navigate } from 'hookrouter'
import UserContext from '../../../context/UserContext'
import DeleteDialog from '../../Mui/DeleteDialog'
import varsObj from '../../../data/deleteUserDialogVars.json'
import deleteUser from '../../../communication/deleteUser'

export default () => {
  const [, setUser] = useContext(UserContext)
  const [deleted, setDeleted] = useState(false)

  const exitPage = () => {
    localStorage.setItem('token', '')
    localStorage.setItem('id', '')
    setUser({})
    navigate('/', true)
  }

  useEffect(() => {
    if (deleted) exitPage()
  }, [deleted])

  const logOut = () => {
    exitPage()
  }

  return (
    <div className="align-column">
      <div id="userDetailsTopContainer">
        <button onClick={() => navigate('/user/update')}>עדכן נתונים</button>
        <button onClick={() => navigate('/user/listings/add')}>מודעה חדשה</button>
        <button onClick={() => navigate('/user/listings')}>הצג מודעות</button>
        <DeleteDialog varsObj={varsObj} deleteFunc={deleteUser} setDeleted={setDeleted} />
      </div>
      <button onClick={logOut}>התנתק</button>
    </div>
  )
}
