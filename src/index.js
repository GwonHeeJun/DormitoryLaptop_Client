import {createBrowserHistory} from "history";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from "./store/configure"

const initialState = window.__INITIAL_STATE__;
const history = createBrowserHistory();

const store = configureStore(initialState, history);

ReactDOM.render(<App store={store} history={history}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
