import React, { Component, CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Colors } from '../../Helpers/EColors';
import { Text } from "../Text"

interface IContactLinks {
    showLinkText: boolean;
    iconColor: Colors;
}

export default class ContactLinks extends Component<IContactLinks> {
    render(){
        const linkList: CSSProperties = {
            display: "inline-flex"
            , gap: "10px"
            , listStyleType: "none"
            , padding: "unset"
        }
        const linkContainer: CSSProperties = {
            display: "inline-flex"
            , flexDirection: "row"
        }
        const link: CSSProperties = {
            display: "inline-flex"
            , gap: "10px"
        }
        const linkIcon: CSSProperties = {
            color: this.props.iconColor
        }
        return(
            <ul style={linkList}>
                <li style={linkContainer}>
                    <a style={link} href="mailto:efarinholt@gmail.com">
                        <FontAwesomeIcon style={linkIcon} icon={faEnvelope} /> {this.props.showLinkText && <Text>efarinholt@gmail.com</Text>}
                    </a>
                </li>
                <li style={linkContainer}>
                    <a style={link} href="https://www.linkedin.com/in/evanfarinholt/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon style={linkIcon} icon={faLinkedinIn} /> {this.props.showLinkText && <Text>linkedin.com/in/evanfarinholt</Text>}
                    </a>
                </li>
                <li style={linkContainer}>
                    <a style={link} href="https://github.com/evanfarinholt" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon style={linkIcon} icon={faGithub} /> {this.props.showLinkText && <Text>github.com/evanfarinholt</Text>}
                    </a>
                </li>
            </ul>
        )
    }
}