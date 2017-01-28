import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import configStore from './store/configStore';
import {Provider} from 'react-redux';
import {loadMovies} from './Actions/moviesAction'
import routes from './route';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configStore();
store.dispatch(loadMovies())

render(
    <Provider store={store}>
    <Router history={browserHistory} routes={routes} /></Provider>,
    document.getElementById('app')
);