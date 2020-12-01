import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

/** Components */
import { NavBar } from './NavBar';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';

/** Functional Component */
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={ HomePage } />
                    <Route exact path="/about" component={ AboutPage } />
                    <Route exact path="/login" component={ LoginPage } />
                    <Redirect to="/" />        {/* 404 */}
                </Switch>
            </div>
        </Router>
    )
}
