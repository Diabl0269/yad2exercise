import React, { useState } from "react";
import login from "../utils/login";
import useLogin from "../hooks/useLogin";
import { navigate } from "hookrouter";

const LoginForm = () => {
  const [loginFail, dispatch] = useState(false);
  const loginObj = useLogin();

  const login = () => {
    // const token = login(loginObj);
    // if (!token) return dispatch(true);
    navigate('/user')
  };
  return (
    <div className="login-form">
      <h1>עמוד התחברות</h1>
      {loginFail && <p>שם משתמש או סיסמה אינם נכונים</p>}
      <form className="align-column">
        <input
          className="filters__field-box-container"
          type="text"
          placeholder="אימייל"
          onChange={e => loginObj.email[1](e.target.value)}
        />
        <input
          className="filters__field-box-container"
          type="password"
          placeholder="סיסמה"
          onChange={e => loginObj.password[1](e.target.value)}
        />
        <button className="margin-top-bottom-l login-button" onClick={login}>
          התחברות
        </button>
        <button className="login--new-user-button">יצירת משתמש</button>
      </form>
    </div>
  );
};

export default LoginForm;
