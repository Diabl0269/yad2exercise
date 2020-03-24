import React from "react";
import { navigate } from "hookrouter";

const PrivateRoute = ({ Component }) => {
  const loginPageURI= '/login'
  const jwtRegex = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/;
  const {token} = localStorage
  const jwtValid = jwtRegex.test(token) 
  if (!jwtValid) navigate(loginPageURI);
  return <Component />;
};

export default PrivateRoute;
