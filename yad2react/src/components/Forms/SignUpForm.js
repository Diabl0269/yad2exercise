import React, { useState } from "react";
import useUserDetails from '../../hooks/useUserDetails';
import { navigate } from "hookrouter";
import signUp from '../../communication/signUp';


const SignUpForm = () => {
  const [attemptFailed, dispatch] = useState(false);
  const userDetails = useUserDetails();
  const { firstName, lastName, phone, phone2, email, password } = userDetails;
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
  );
  const submitHandler = async e => {
    e.preventDefault();
    const user = await signUp(userDetails);
    if (!user) return dispatch(true);
    alert("משתמש נוצר בהצלחה");
    localStorage.setItem('token',user.tokens[0].token);
    navigate(`/user/${user._id}`);
  };
  return (
    <div className="sign-up--form">
      <h2 className="align-self-center">הרשמה</h2>
      <form onSubmit={e => submitHandler(e)}>
        {attemptFailed && <p>יש למלא את כל השדות המסומנים ב *</p>}
        {input("text", firstName, "*שם פרטי")}
        {input("text", lastName, "*שם משפחה")}
        {input("text", phone, "*פלאפון")}
        {input("text", phone2, "פלאפון 2")}
        {input("text", email, "*אימייל")}
        {input("password", password, "*סיסמה", "לפחות שמונה תווים")}
        <button tabIndex="0">הרשם</button>
      </form>
    </div>
  );
};

export default SignUpForm;
