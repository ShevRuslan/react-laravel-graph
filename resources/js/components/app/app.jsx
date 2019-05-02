import React, { Component } from 'react';
import Home from '../home'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ReactDOM from 'react-dom';
export default class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Home}></Route>
            </Router>
        );  
    }
}