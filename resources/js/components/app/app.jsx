import React, { Component } from 'react';
import Home from '../home';
import Header from '../header';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ReactDOM from 'react-dom';
export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Router>
                    <Route exact path='/' component={Home}></Route>
                </Router>
            </div>
        );  
    }
}