import React from 'react'
import { navigate } from 'hookrouter';

const NotFoundForm = () => (
    <div className="login-form">
      המשתמש לא נמצא, אנא נסה להתחבר מחדש
      <button onClick={() => navigate("/login")} className="margin-top-m">
        התחבר
      </button>
    </div>
  );

  export default NotFoundForm;