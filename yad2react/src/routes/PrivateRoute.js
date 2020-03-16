import React from "react";
import { navigate } from "hookrouter";
import UserNotFoundPage from "../components/Pages/UserNotFoundPage";

const PrivateRoute = ({ Component }) => {
  return localStorage.token ? <Component /> : <UserNotFoundPage />;
};

export default PrivateRoute;
