import React, { Component } from 'react';
import { Colors } from "../../Helpers/EColors";

export default class PageWrapper extends Component {
    render(){
        const pageWrapper = {
            background: `linear-gradient(258.8deg, ${Colors.DkGray} 23.68%, ${Colors.MdGray} 106.16%)`
            , height: "100vh"
        }
        return (
            <div style={pageWrapper}>
                {this.props.children}
            </div>
        )
    }
}