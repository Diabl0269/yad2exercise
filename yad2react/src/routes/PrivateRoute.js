import React from "react";
import LoginPage from "../components/Pages/LoginPage";

const PrivateRoute = ({ Component }) => {
  const jwtRegex = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/
  
  return jwtRegex.test(localStorage.token) ? <Component /> : <LoginPage />;
};

export default PrivateRoute;
