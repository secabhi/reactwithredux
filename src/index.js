import React from 'react';
import { render } from 'react-dom';
import { Route, browserHistory } from 'react-router';
import routes from './route';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);