import React from "react";
import LoginPage from '../components/Pages/LoginPage';
import MainPage from "../components/Pages/MainPage";
import SignUpPage from "../components/Pages/SignUpPage";
import UserDetailsPage from '../components/Pages/UserPages/UserDetailsPage';
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "../components/Pages/NotFoundPage";
import UserUpdatePage from '../components/Pages/UserPages/UserUpdatePage';

const routes = {
    '/': () => <MainPage />,
    '/login': () => <LoginPage />,
    '/signup': () => <SignUpPage />,

    '/user/:id': () => <PrivateRoute Component={UserDetailsPage} />,
    '/user/:id/update': () => <PrivateRoute Component={UserUpdatePage} />,
    '/*': () => <NotFoundPage />
}

export default routes;