import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StyleHelper from "../Helpers/StyleHelper";

class Home extends Component {
    render(){
        return (
            <Container fluid={true} style={StyleHelper.Template.pageWrapper()}>
                <Row>
                    <Col>
                        <h1 style={StyleHelper.Text.header()}>Creative Technologist</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;
