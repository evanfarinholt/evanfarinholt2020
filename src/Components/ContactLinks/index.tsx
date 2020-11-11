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
interface IState {
    copyText: string;
}
export default class ContactLinks extends Component<IContactLinks, IState> {

    constructor(props: IContactLinks){
        super(props);
        this.state = {
            copyText: "Copy"
        }
    }
    handleCopyText(text: string) {
        navigator.clipboard.writeText(text);
        this.setState({
            copyText: "Copied!"
        });
    }
    render(){
        const LinkList = styled.ul`
            list-style-type: none;
            padding: unset;
            margin: unset;
            li {
                margin-right: ${this.props.showLinkText ? "20px" : "10px"};
                a, button {
                    text-decoration: none;
                    .link-icon {
                        color: ${Colors.White};
                        height: 22px;
                        width: 22px;
                        margin-right: 10px;
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
            padding: unset;
            
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
            <LinkList className="d-flex flex-row flex-wrap">
                {this.props.showLinkText && 
                    <li className="d-flex flex-row">
                        <CopyButton onClick={() => this.handleCopyText("efarinholt@gmail.com")} className="d-flex flex-row">
                            <FontAwesomeIcon className="link-icon envelope-icon" icon={faEnvelope} /> 
                            <FontAwesomeIcon className="link-icon copy-icon" icon={faCopy} /> 
                            
                                <div className="d-flex flex-column">
                                    <Text>efarinholt@gmail.com</Text>
                                    <Text type={TextType.sub} className="copy-text">
                                        {this.state.copyText}
                                    </Text>
                                </div>
                        </CopyButton>
                    </li>
                }
                <li>
                    <a href={urls.linkedinUrl} target="_blank" rel="noopener noreferrer" className="d-flex flex-row">
                        <FontAwesomeIcon className="link-icon" icon={faLinkedinIn} /> 
                        {this.props.showLinkText && <Text>linkedin.com/in/evanfarinholt</Text>}
                    </a>
                </li>
                <li>
                    <a href={urls.githubUrl} target="_blank" rel="noopener noreferrer" className="d-flex flex-row">
                        <FontAwesomeIcon className="link-icon" icon={faGithub} /> 
                        {this.props.showLinkText && <Text>github.com/evanfarinholt</Text>}
                    </a>
                </li>
            </LinkList>
        )
    }
}