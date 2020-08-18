import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home";

class App extends Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} render={() => <Home />} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
