import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { pageUrls } from "./Resources/strings";
import Home from "./Pages/Home";

class App extends Component {
    render(){
        return (
            <BrowserRouter>
            <ul>
                <li><Link to={pageUrls.home}>Home</Link></li>
            </ul>
                <Switch>
                    <Route exact path={pageUrls.home} render={() => <Home />} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
