import React, { Component } from 'react';
import { Colors } from "../../Helpers/EColors";
import styled from "styled-components";

export default class FooterWrapper extends Component {
    render(){
        const FooterWrapper = styled.div`
            background: ${Colors.Black}
        `;
        return (
            <FooterWrapper>
                {this.props.children}
            </FooterWrapper>
        )
    }
}