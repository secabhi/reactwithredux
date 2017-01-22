import React from 'react';
import { Link } from 'react-router';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="well">
                <h1>HOME PAGE</h1>
                <p>Demo React with Redux Using ES6 modules</p>
                <Link to="about" className="btn btn-primary">About</Link>
            </div>
        )
    }
}