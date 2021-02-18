import React, { Component } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Colors } from "../Helpers/Enums";
//import { Text, TextType } from "../Components/Text";
import styled from "styled-components";
import Gallery from "react-photo-gallery";


interface IProps {}
interface IState {
    isLightboxOpen: boolean;
    currentImage: number;
}
export default class Photography extends Component<IProps, IState>  {
    constructor(props: IProps){
        super(props);
        this.state = {
            isLightboxOpen: false,
            currentImage: 0
        }
    }
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
              title: "testing"
            },
            {
              src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
              width: 1,
              height: 1,
              title: "testing 2"
            }
        ]



        const handleOpenLightbox = (event: any, photo: any) => {
            //console.log(photo)
            this.setState({
                isLightboxOpen: true,
                currentImage: photo.index
            });
        }; 
        const handleCloseLightbox = () => {
            this.setState({
                isLightboxOpen: false
            });
        }
        const handleCarouselSelect = (index: number) => {
            this.setState({
                currentImage: index
            });
        }
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <h1>photo</h1>
                            <Gallery 
                                photos={photos} 
                                onClick={handleOpenLightbox} 
                                direction={"column"}
                            />
                            {this.state.isLightboxOpen &&
                                <Carousel
                                    activeIndex={this.state.currentImage}
                                    onSelect={handleCarouselSelect}
                                    indicators={false}
                                >
                                    {photos.map((photo: any, i: number) => {
                                        return(
                                            <Carousel.Item key={i}>
                                                <img
                                                    className="d-block w-100"
                                                    src={photo.src}
                                                    alt={photo.title}
                                                />
                                                <Carousel.Caption>
                                                    <p>{photo.title}</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        )
                                    })}
                                </Carousel>
                            }
                            
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
