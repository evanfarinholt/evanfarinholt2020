import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { pageUrls } from "./Resources/strings";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";

class App extends Component {
    render(){
        return (
            <BrowserRouter>
                <Navigation />
                <Switch>
                    <Route exact path={pageUrls.home} render={() => <Home />} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
