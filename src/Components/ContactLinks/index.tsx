import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Colors } from '../../Helpers/EColors';
import { Text } from "../Text";
import styled from "styled-components";

interface IContactLinks {
    showLinkText: boolean;
    iconColor?: Colors;
}

export default class ContactLinks extends Component<IContactLinks> {
    render(){
        const iconColor: Colors = this.props.iconColor || Colors.White;
        const LinkList = styled.ul`
            display: inline-flex;
            gap: 10px;
            list-style-type: none;
            padding: unset;
            li {
                display: inline-flex;
                flex-direction: row;
                a {
                    display: inline-flex;
                    gap: 10px;
                    text-decoration: none;
                    .link-icon {
                        color: ${iconColor}
                    }
                }
                &:hover {
                    a .link-icon {
                        color: ${Colors.MintGreen};
                    }
                }
            }
        `;
        return(
            <LinkList>
                <li>
                    <a href="mailto:efarinholt@gmail.com">
                        <FontAwesomeIcon className="link-icon" icon={faEnvelope} /> 
                        {this.props.showLinkText && <Text>efarinholt@gmail.com</Text>}
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/evanfarinholt/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="link-icon" icon={faLinkedinIn} /> 
                        {this.props.showLinkText && <Text>linkedin.com/in/evanfarinholt</Text>}
                    </a>
                </li>
                <li>
                    <a href="https://github.com/evanfarinholt" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="link-icon" icon={faGithub} /> 
                        {this.props.showLinkText && <Text>github.com/evanfarinholt</Text>}
                    </a>
                </li>
            </LinkList>
        )
    }
}