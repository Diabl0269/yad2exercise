import React from "react";
import MainPage from "../components/Pages/MainPage";
import LoginPage from '../components/Pages/LoginPage';
import SignUpPage from "../components/Pages/SignUpPage";

const routes = {
    '/': () => <MainPage />,
    '/login': () => <LoginPage />,
    '/signup': () => <SignUpPage />
}

export default routes;