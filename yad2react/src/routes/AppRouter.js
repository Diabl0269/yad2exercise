import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import {createBrowserHistory}  from 'history';
import MainPage from '../components/Pages/MainPage';

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path='/' component={MainPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;