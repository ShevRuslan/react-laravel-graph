import React, { Component } from 'react';
import Home from '../home';
import Header from '../header';
import Footer from '../footer';
import {Route, Switch} from 'react-router-dom'
export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                </Switch>
                <Footer/>
            </div>
        );  
    }
}