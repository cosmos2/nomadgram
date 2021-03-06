import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import { i18nState } from 'redux-i18n';
import thunk from 'redux-thunk';
import user from 'redux/modules/user';

const env = process.env.NODE_ENV;

const history = createHistory()

const middlewears = [thunk, routerMiddleware(history)];

if (env === 'development') {
    const { logger } = require('redux-logger');
    middlewears.push(logger);
}

const reducer = combineReducers({
    user,
    routing: routerReducer,
    i18nState
});

let store;

if (env === 'development') {
    store = initialState =>
        createStore(reducer, composeWithDevTools(applyMiddleware(...middlewears))); 
} else {
    store = initialState =>
        createStore(reducer, applyMiddleware(...middlewears));
}





export { history };

export default store();