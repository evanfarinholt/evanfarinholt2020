import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Text from "../Components/Text";
import { FontSizes } from "../Helpers/StyleHelper";

class Home extends Component {
    render(){
        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Text instance={FontSizes.Header}>Home</Text>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;
