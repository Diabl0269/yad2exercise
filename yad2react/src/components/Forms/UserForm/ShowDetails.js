import React from 'react'

const ShowDetails = ({user, toggleUpdate}) => {
    const Field = ({ text, value }) => (
        <div id="userField">
          {text}
          <div>{value}</div>
        </div>
      );

    return (
        <div id="formContainer">
          <h1>פרטי משתמש</h1>
          <div>
            <Field text="שם" value={user.firstName + " " + user.lastName} />
            <Field text='פלאפון' value={user.phone} />
            {user.phone2 && 
            <Field text='פלאפון2' value={user.phone2} />}
            <Field text='אימייל' value={user.email} />
          </div>
          <button onClick={toggleUpdate}>עדכן נתונים</button>
        </div>
    )
}

export default ShowDetails;