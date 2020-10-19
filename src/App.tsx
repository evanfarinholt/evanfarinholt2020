import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import { detect } from "detect-browser";
import NotSupported from "./Pages/NotSupported";

export default class App extends Component {

    isBrowserSupported(name: string, version: string){
        const splitVersion: string = `${version.split(".")[0]}.${version.split(".")[1]}`;
        const intVersion: number = parseInt(splitVersion);
        
        let supported: boolean = false;

        switch(name){
            case "firefox":
                supported = intVersion > 51;
                break;
            case "chrome":
                supported = intVersion > 56;
                // FOR TESTING BROWSER DETECTION:
                // supported = intVersion > 90;
                break;
            case "safari":
                supported = intVersion > 10;
                break;
            case "edge":
                supported = intVersion > 15;
                break;
            case "opera":
                supported = intVersion > 43;
                break;
            default:
                supported = false;
        }
        return supported;
    }
    
    render(){
        const browser = detect();
        return (
            <>
                {browser && browser.version && this.isBrowserSupported(browser.name, browser.version) ?
                    <BrowserRouter>
                        <Switch>
                            <Route exact path={"/"} render={() => <Home />} />
                            <Route path={"*"} render={() => <Home />} />
                        </Switch>
                    </BrowserRouter>
                    :
                    <NotSupported />
                }
            </>
        )
    }
}