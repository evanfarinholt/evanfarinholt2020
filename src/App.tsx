import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home";

class App extends Component {
    render(){
        return (
            <BrowserRouter>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
            </ul>
                <Switch>
                    <Route exact path={'/'} render={() => <Home />} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
