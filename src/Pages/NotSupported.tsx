import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components";
import { Text, TextType } from "../Components/Text";
import { Colors } from "../Helpers/EColors";

export default class NotSupported extends Component {
    render(){
        const Wrapper = styled.div`
            background: ${Colors.DkGray};
            height: 100vh;
            .container {
                height: 100vh;
                .main-content {
                    margin-top: 17%;
                }
            }
        `;
        return(
            <Wrapper>
                <Container>
                    <Row>
                        <Col className="main-content" xs={{span: 4, offset: 4}}>
                            <Text type={TextType.h3}>
                                Sorry,
                            </Text>
                            <Text>
                                this site uses code that isn't supported by your browser.
                            </Text>
                            <Text>
                                You can still download my resume <a href="#">here</a>.
                            </Text>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        )
    }
}