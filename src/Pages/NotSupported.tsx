import React, { Component } from 'react';
import styled from "styled-components";
import { Text } from "../Components/Text";
import { Colors } from "../Helpers/Enums";

export default class NotSupported extends Component {
    render(){
        const Wrapper = styled.div`
            background: ${Colors.LtSunsetOrange};
            display: flex;
            flex-direction: row;
            gap: 10px;
            padding: 10px;
        `;
        return(
            <Wrapper>
                <Text className="not-supported-text" color={Colors.DkGray}>
                    <b>Warning!</b> This site uses code that may not be supported by your browser. <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">You can download a supported browser here</a>.
                </Text>
            </Wrapper>
        )
    }
}