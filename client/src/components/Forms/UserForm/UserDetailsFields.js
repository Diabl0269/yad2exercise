import React, { useContext } from 'react'
import UserContext from '../../../context/UserContext'
import Loader from '../../utils/Loader'

const UserDetailsFields = () => {
  const [user] = useContext(UserContext)
  const { userDetails } = user
  
  const Field = ({ text, value }) => (
    <div id="userField">
      {text}
      <div>{value}</div>
    </div>
  )

  return userDetails ? (
    <div>
      <Field text="שם" value={userDetails.firstName + ' ' + userDetails.lastName} />
      <Field text="פלאפון" value={userDetails.phone} />
      {userDetails.phone2 && <Field text="פלאפון2" value={userDetails.phone2} />}
      <Field text="אימייל" value={userDetails.email} />
      {userDetails.agencyName && <Field text="סוכנות" value={userDetails.agencyName} />}
    </div>
  ) : (
    <Loader />
  )
}

export default UserDetailsFields
