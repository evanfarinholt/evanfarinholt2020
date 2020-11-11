import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import { detect } from "detect-browser";
import Banner from "./Components/Banner";
import { Colors } from './Helpers/Enums';
import { Text } from "./Components/Text";
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
            case "ios":
                supported = intVersion >= 10;
                break;
            default:
                supported = false;
        }
        return supported;
    }
    
    render(){
        const browser = detect();
        console.log(browser)
        const bannerContent = () => 
            <Text color={Colors.DkGray}>
                <b>Warning!</b> This site uses code that may not be supported by your browser. <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">You can download a supported browser here</a>.
            </Text>

        return (
            <>
                {browser && browser.version && !this.isBrowserSupported(browser.name, browser.version) &&
                    <Banner
                        backgroundColor={Colors.SunsetOrange} 
                        bannerContent={bannerContent()}
                    />
                }
                <BrowserRouter>
                    <Switch>
                        <Route exact path={"/"} render={() => <Home />} />
                        <Route path={"*"} render={() => <Home />} />
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}