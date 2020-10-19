import React, { Component } from 'react';
import { Colors } from "../../Helpers/EColors";
import { TextType } from "./ETextType";
import styled from "styled-components";

interface IProps {
    type?: TextType;
    color?: Colors;
}

class Text extends Component<IProps> {
    render(){
        const textColor: Colors = this.props.color || Colors.White;
        const Paragraph = styled.p`
            font-size: 1rem;
            color: ${textColor};
            margin: unset;
        `;
        const Header1 = styled.h1`
            font-size: 2rem;
            font-weight: 300;
            letter-spacing: -.1rem;
            color: ${textColor};
            margin: unset;
        `;
        const Header2 = styled.h2`
            font-size: 3rem;
            font-weight: 900;
            letter-spacing: -.2rem;
            color: ${textColor};
            margin: unset;
        `;
        const Header3 = styled.h3`
            font-size: 2rem;
            font-weight: 900;
            letter-spacing: -.1rem;
            color: ${textColor};
            margin: unset;
        `;
        const Header4 = styled.h4`
            font-size: 1rem;
            font-weight: 900;
            text-transform: uppercase;
            color: ${textColor};
            margin: unset;
        `;
        const Pill = styled.span`
            font-size: 1rem;
            font-weight: 900;
            color: ${textColor};
            background: ${Colors.LtGray};
            padding: 5px 10px;
            margin: unset;
        `;
        const DOM = () => {
            switch(this.props.type){
                case TextType.p:
                case TextType.span:
                    return ( <Paragraph>{this.props.children}</Paragraph> )
                case TextType.h1:
                    return ( <Header1>{this.props.children}</Header1> )
                case TextType.h2:
                    return ( <Header2>{this.props.children}</Header2> )
                case TextType.h3:
                    return ( <Header3>{this.props.children}</Header3> )
                case TextType.h4:
                    return ( <Header4>{this.props.children}</Header4> )
                case TextType.pill:
                    return ( <Pill>{this.props.children}</Pill> )
                default:
                    return ( <Paragraph>{this.props.children}</Paragraph> )
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