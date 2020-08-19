import React, { Component } from 'react';
import { FontSizes } from "../../Helpers/StyleHelper";

interface IProps {
    instance: FontSizes;
}

class Text extends Component<IProps> {
    render(){
        let DOM = <></>;
        switch(this.props.instance){
            case FontSizes.Header:
                DOM = <h1>{this.props.children}</h1>;
            break;
            default:
                DOM = <p>{this.props.children}</p>
            
        }
        return (
            {DOM}
        )
    }
}

export default Text;
