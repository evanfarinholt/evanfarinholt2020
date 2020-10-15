import React, { Component } from 'react';
import { Colors } from "../../Helpers/EColors";
import styled from "styled-components";

export default class PageWrapper extends Component {
    render(){
        const PageWrapper = styled.div`
            background: linear-gradient(258.8deg, ${Colors.DkGray} 23.68%, ${Colors.MdGray} 106.16%)
        `;
        return (
            <PageWrapper>
                {this.props.children}
            </PageWrapper>
        )
    }
}