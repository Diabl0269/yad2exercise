import React, { useState } from "react";
import login from '../../communication/login';
import useLogin from '../../hooks/useLogin';
import { navigate } from "hookrouter";

const LoginForm = () => {
  const [loginFail, dispatchLoginFail] = useState(false);
  const {email, password} = useLogin();

  const loginHandler = async (e) => {
    e.preventDefault();
    const id = await login({email: email[0], password: password[0]});        
    if (!id) return dispatchLoginFail(true);
    navigate(`/user/${id}`)
  };
  return (
    <div className="login-form">
      <h1>עמוד התחברות</h1>
      {loginFail && <p>שם משתמש או סיסמה אינם נכונים</p>}
      <form className="align-column" onSubmit={e => loginHandler(e)}>
        <input
          className="filters__field-box-container"
          type="text"
          placeholder="אימייל"
          onChange={e => email[1](e.target.value)}
        />
        <input
          className="filters__field-box-container"
          type="password"
          placeholder="סיסמה"
          onChange={e => password[1](e.target.value)}
        />
        <button className="margin-top-bottom-l login-button">
          התחברות
        </button>
        <button className="login--new-user-button" onClick={() => navigate('/signup')} >יצירת משתמש</button>
      </form>
    </div>
  );
};

export default LoginForm;