import React, { Component } from 'react';
import styled from "styled-components";
import { Colors } from "../../Helpers/Enums";

export default class VectorDivider extends Component {
    render(){
        const Divider = styled.div`
            display: grid;
            width: 100%;
            grid-template-columns: 5px auto 5px;
            .end-dot {
                background: ${Colors.White};
                height: 5px;
                width: 5px;
            }
            .center-line {
                background: ${Colors.ElectricBlue};
                height: 3px;
                margin-top: 1px;
            }
        `;
        return (
            <Divider>
                <div className="end-dot"></div>
                <div className="center-line"></div>
                <div className="end-dot"></div>
            </Divider>
        )
    }
}