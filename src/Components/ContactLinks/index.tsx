import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopy } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Colors, urls } from '../../Helpers/Enums';
import { Text, TextType } from "../Text";
import styled from "styled-components";

interface IContactLinks {
    showLinkText: boolean;
}

export default class ContactLinks extends Component<IContactLinks> {
    handleCopyText(text: string) {
        navigator.clipboard.writeText(text);
    }
    render(){
        const LinkList = styled.ul`
            display: inline-flex;
            gap: ${this.props.showLinkText ? "20px" : "10px"};
            list-style-type: none;
            padding: unset;
            margin: unset;
            flex-wrap: wrap;
            li {
                display: inline-flex;
                flex-direction: row;
                a, button {
                    display: inline-flex;
                    gap: 10px;
                    text-decoration: none;
                    .link-icon {
                        color: ${Colors.White};
                        height: 22px;
                        width: 22px;
                    }
                }
                &:hover {
                    a * {
                        color: ${Colors.MintGreen};
                    }
                }
            }
        `;
        const CopyButton = styled.button`
            background: unset;
            border: unset;
            outline: unset;
            &:focus,
            &:active {
                border: unset;
                outline: unset;
            }
            .copy-icon,
            .copy-text {
                display: none;
            }
            &:hover {
                .copy-icon,
                .copy-text,
                p {
                    display: block;
                    color: ${Colors.MintGreen};
                }
                .envelope-icon {
                    display: none;
                }
                
            }           
        `;
        
        return(
            <LinkList>
                <li>
                    <CopyButton onClick={() => this.handleCopyText("efarinholt@gmail.com")}>
                        <FontAwesomeIcon className="link-icon envelope-icon" icon={faEnvelope} /> 
                        <FontAwesomeIcon className="link-icon copy-icon" icon={faCopy} /> 
                        {this.props.showLinkText && 
                            <div className="d-flex flex-column">
                                <Text>efarinholt@gmail.com</Text>
                                <Text type={TextType.sub} className="copy-text">Copy</Text>
                            </div>}
                    </CopyButton>
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