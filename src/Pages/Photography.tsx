import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Colors } from "../Helpers/Enums";
import { Text, TextType } from "../Components/Text";
import styled from "styled-components";

export default class Photography extends Component {
    render(){
        const Section1 = styled.header`
            background-image: linear-gradient(258.8deg, ${Colors.DkGray} 23.68%, ${Colors.MdGray} 106.16%);
            .inner-wrapper {
                background-image: url('/button-vector.svg');
                background-repeat: no-repeat;
                background-position: top right;
                background-size: 400px;
            }
            @media (max-width: 872px) {
                .inner-wrapper {
                    background-image: none;
                }
            }
        `;
        
        return (
            <>
                
                <h1>photo</h1>
            </>
        )
    }
}
