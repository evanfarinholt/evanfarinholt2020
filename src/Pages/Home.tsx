import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
    render(){
        return (
            <Container fluid={true}>
                <Row>
                    <Col style={{"height": "100vh"}} className="d-flex justify-content-center flex-column">
                        <h1 style={{"color": "#3DABAE"}} className="text-center">Evan Farinholt</h1>
                        <h2 style={{"color": "#3DABAE"}} className="text-center">Website Coming Soon</h2>
                        <p className="text-center">efarinholt@gmail.com</p>
                        <p className="text-center">(201) 470-0402</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;
