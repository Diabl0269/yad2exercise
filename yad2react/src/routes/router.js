import React from "react";
import MainPage from "../components/Pages/MainPage";
import LoginPage from '../components/Pages/LoginPage';

const routes = {
    '/': () => <MainPage />,
    '/login': () => <LoginPage />
}

export default routes;