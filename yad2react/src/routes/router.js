import React from "react";
import LoginPage from '../components/Pages/LoginPage';
import MainPage from "../components/Pages/MainPage";
import SignUpPage from "../components/Pages/SignUpPage";
import UserPage from '../components/Pages/UserPage';
import PrivateRoute from "./PrivateRoute";

const routes = {
    '/': () => <MainPage />,
    '/login': () => <LoginPage />,
    '/signup': () => <SignUpPage />,
    '/user/:id': () => <PrivateRoute Component={UserPage} />
}

export default routes;