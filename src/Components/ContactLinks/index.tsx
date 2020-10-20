import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Colors, urls } from '../../Helpers/Enums';
import { Text } from "../Text";
import styled from "styled-components";

interface IContactLinks {
    showLinkText: boolean;
}

export default class ContactLinks extends Component<IContactLinks> {
    render(){
        const LinkList = styled.ul`
            display: inline-flex;
            gap: ${this.props.showLinkText ? "20px" : "10px"};
            list-style-type: none;
            padding: unset;
            margin: unset;
            li {
                display: inline-flex;
                flex-direction: row;
                a {
                    display: inline-flex;
                    gap: 10px;
                    text-decoration: none;
                    .link-icon {
                        color: ${Colors.White};
                    }
                }
                &:hover {
                    a * {
                        color: ${Colors.MintGreen};
                    }
                }
            }
        `;
        return(
            <LinkList>
                <li>
                    <a href={urls.mailtoUrl}>
                        <FontAwesomeIcon className="link-icon" icon={faEnvelope} /> 
                        {this.props.showLinkText && <Text>efarinholt@gmail.com</Text>}
                    </a>
                </li>
                <li>
                    <a href={urls.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="link-icon" icon={faLinkedinIn} /> 
                        {this.props.showLinkText && <Text>linkedin.com/in/evanfarinholt</Text>}
                    </a>
                </li>
                <li>
                    <a href={urls.githubUrl} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="link-icon" icon={faGithub} /> 
                        {this.props.showLinkText && <Text>github.com/evanfarinholt</Text>}
                    </a>
                </li>
            </LinkList>
        )
    }
}