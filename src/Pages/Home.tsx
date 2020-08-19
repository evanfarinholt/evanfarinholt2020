import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
    render(){
        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <h1>Home</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;
