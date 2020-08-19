import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { pageUrls } from "./Resources/strings";
import Home from "./Pages/Home";

class App extends Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={pageUrls.home} render={() => <Home />} />
                    <Route path={"*"} render={() => <Home />} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
