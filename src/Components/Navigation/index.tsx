import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { pageUrls } from "../../Resources/strings";

class Navigation extends Component {
    render(){
        return (
            <ul>
                <li><Link to={pageUrls.home}>Home</Link></li>
            </ul>
        )
    }
}

export default Navigation;
