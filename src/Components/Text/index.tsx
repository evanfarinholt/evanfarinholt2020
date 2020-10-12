import React, { Component } from 'react';
import { Colors } from "../../Helpers/EColors";
import { TextType } from "./ETextType";

interface IProps {
    type: TextType;
}

class Text extends Component<IProps> {
    baseTextStyle(){
        return {
            margin: 0
            , padding: 0
            , fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont"
        }
    }
    baseHeaderStyle(){
        return {
            letterSpacing: "-.2rem"
            , lineHeight: "1.5"
        }
    }
    paragraph(){
        return {
            fontSize: "1rem"
            , color: Colors.White
            , ...this.baseTextStyle()
        }
    }
    header1(){
        return {
            fontSize: "3rem"
            , fontWeight: 100
            , color: Colors.White
            , ...this.baseHeaderStyle()
            , ...this.baseTextStyle()
        }
    }
    header2(){
        return {
            fontSize: "3rem"
            , fontWeight: 900
            , color: Colors.White
            , ...this.baseHeaderStyle()
            , ...this.baseTextStyle()
        }
    }
    header3(){
        return {
            fontSize: "2.5rem"
            , fontWeight: 900
            , letterSpacing: "-.2rem"
            , color: Colors.White
            , ...this.baseTextStyle()
        }
    }
    header4(){
        return {
            fontSize: "2rem"
            , fontWeight: 900
            , letterSpacing: "-.2rem"
            , color: Colors.White
            , ...this.baseTextStyle()
        }
    }
    pill(){
        return {
            fontSize: "1rem"
            , fontWeight: 400
            , ...this.baseTextStyle()
        }
    }
    render(){
        const DOM = () => {
            switch(this.props.type){
                case TextType.p:
                    return ( <p style={this.paragraph()}>{this.props.children}</p> )
                case TextType.span:
                    return ( <span style={this.paragraph()}>{this.props.children}</span> )
                case TextType.h1:
                    return ( <h1 style={this.header1()}>{this.props.children}</h1> )
                case TextType.h2:
                    return ( <h2 style={this.header2()}>{this.props.children}</h2> )
                case TextType.h3:
                    return ( <h3 style={this.header3()}>{this.props.children}</h3> )
                
                default:
                    return ( <p style={this.paragraph()}>{this.props.children}</p> )
            }
        }
        return (
            <DOM />
        )
    }
}

export {
    Text
    , TextType
}