import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Colors } from "../Helpers/Enums";
//import { Text, TextType } from "../Components/Text";
import styled from "styled-components";
import Gallery from "react-photo-gallery";

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
        
        const photos = [
            {
              src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
              width: 4,
              height: 3,
              name: "testing"

            },
            {
              src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
              width: 1,
              height: 1
            },
        ]



        const openLightbox = (event: any, photo: any) => {
            console.log(photo)
            // setCurrentImage(index);
            // setViewerIsOpen(true);
        }; 

        return (
            <>
            <Container>
                <Row>
                    <Col>
                        <h1>photo</h1>
                        <Gallery 
                            photos={photos} 
                            onClick={openLightbox} 
                        />
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}
