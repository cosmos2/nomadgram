import React from 'react';
import propTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import './styles.scss';
import Footer from 'components/Footer';
import Auth from 'components/Auth';

const App = props => [
    // Nav,
    props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoute key={2} />,
    <Footer key={3} />
]

App.propTypes = {
    isLoggedIn: propTypes.bool.isRequired
};

const PrivateRoutes = props => (
    <Switch>
        <Route exact path="/" render={() => "feed"} />
        <Route exact path="/explore" render={() => "explore"} />
    </Switch>
)

const PublicRoute = props => (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/forget" render={() => "password"} />
    </Switch> 
)

export default App;
