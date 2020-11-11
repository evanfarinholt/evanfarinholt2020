import React, { Component } from 'react';
import styled from "styled-components";
import { Colors } from "../../Helpers/Enums";

interface IProps {
    bannerContent: JSX.Element;
    backgroundColor: Colors;
}
export default class Banner extends Component<IProps> {
    render(){
        const Wrapper = styled.div`
            background: ${this.props.backgroundColor};
            padding: 10px;
        `;
        return(
            <Wrapper className="d-flex flex-row">
                {this.props.bannerContent}
            </Wrapper>
        )
    }
}