import React from "react";
import LoginPage from "../components/Pages/LoginPage";
import MainPage from "../components/Pages/MainPage";
import NewListingPage from "../components/Pages/UserPages/NewListingPage";
import NotFoundPage from "../components/Pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import SignUpPage from "../components/Pages/SignUpPage";
import UserDetailsPage from "../components/Pages/UserPages/UserDetailsPage";
import UserListingsPage from "../components/Pages/UserPages/UserListingsPage";
import UserUpdatePage from "../components/Pages/UserPages/UserUpdatePage";

const routes = {
  "/": () => <MainPage />,
  "/login": () => <LoginPage />,
  "/signup": () => <SignUpPage />,

  "/user": () => <PrivateRoute Component={UserDetailsPage} />,
  "/user/new-listing": () => <PrivateRoute Component={NewListingPage} />,
  "/user/user-listings": () => <PrivateRoute Component={UserListingsPage} />,
  "/user/update": () => <PrivateRoute Component={UserUpdatePage} />,
  "/*": () => <NotFoundPage />
};

export default routes;
