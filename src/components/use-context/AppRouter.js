import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

/** Components */
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';

/** Functional Component */
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ HomePage } />
                    <Route exact path="/about" component={ AboutPage } />
                    <Route exact path="/login" component={ LoginPage } />
                </Switch>
            </div>
        </Router>
    )
}
