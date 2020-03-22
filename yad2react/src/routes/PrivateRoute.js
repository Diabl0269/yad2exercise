import React from "react";
import { navigate } from "hookrouter";

const PrivateRoute = ({ Component }) => {
  const jwtRegex = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/
  
  return jwtRegex.test(localStorage.token) ? <Component /> : navigate('/login');
};

export default PrivateRoute;
