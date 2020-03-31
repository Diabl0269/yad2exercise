import React, { useState, useContext } from 'react'
import useUserDetails from '../../hooks/useUserDetails'
import { navigate } from 'hookrouter'
import signUp from '../../communication/signUp'
import UserContext from '../../context/UserContext'

export default () => {
  const setUser = useContext(UserContext)[1]
  const [attemptFailed, dispatch] = useState(false)
  const userDetails = useUserDetails()
  const {
    firstName,
    lastName,
    phone,
    phone2,
    email,
    password,
    agencyName
  } = userDetails
  const input = (type, state, text, placeholder = text) => (
    <div className="align-row">
      <span>{text}:</span>
      <input
        type={type}
        onChange={e => state[1](e.target.value)}
        value={state[0]}
        placeholder={placeholder}
        className="filters__field-box-container"
      />
    </div>
  )
  const submitHandler = async e => {
    e.stopPropagation()
    const user = await signUp(userDetails)
    if (!user) return dispatch(true)
    alert('משתמש נוצר בהצלחה')
    setUser(user)
    navigate(`/user`)
  }
  return (
    <div className="sign-up--form">
      <h2 className="align-self-center">הרשמה</h2>
      <form onSubmit={e => submitHandler(e)}>
        {attemptFailed && <p>יש למלא את כל השדות המסומנים ב *</p>}
        {input('text', firstName, '*שם פרטי')}
        {input('text', lastName, '*שם משפחה')}
        {input('text', phone, '*פלאפון')}
        {input('text', phone2, 'פלאפון 2')}
        {input('text', email, '*אימייל')}
        {input('password', password, '*סיסמה', 'לפחות שמונה תווים')}
        {input('text', agencyName, 'שם סוכנות')}
        <button tabIndex="0">הרשם</button>
      </form>
    </div>
  )
}
