import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
    render(){
        return (
            <Container fluid={true}>
                <Row>
                    <Col className="d-flex justify-content-center flex-column">
                        <h1 className="text-center">Evan Farinholt</h1>
                        <p className="text-center">Website Coming Soon</p>
                        <p className="text-center">efarinholt@gmail.com</p>
                        <p className="text-center">(201) 470-0402</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;
