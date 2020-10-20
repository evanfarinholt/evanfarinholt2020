import React, { Component } from 'react';
import { Colors } from "../../Helpers/EColors";
import styled from "styled-components";

export default class PageWrapper extends Component {
    render(){
        const PageWrapper = styled.div`
            background-image: linear-gradient(258.8deg, ${Colors.DkGray} 23.68%, ${Colors.MdGray} 106.16%);
            .inner-wrapper {
                background-image: url('/button-vector.svg');
                background-repeat: no-repeat;
                background-position: top right;
                background-size: 400px;
            }
        `;
        return (
            <PageWrapper>
                <div className="inner-wrapper">
                    {this.props.children}
                </div>
            </PageWrapper>
        )
    }
}