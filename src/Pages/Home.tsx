import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StyleHelper from "../Helpers/StyleHelper";
import TimelineItem from "../Components/TimelineItem";

export default class Home extends Component {
    render(){
        return (
            <Container fluid={true} style={StyleHelper.Template.pageWrapper()}>
                <Row>
                    <Col>
                        <h1 style={StyleHelper.Text.header()}>Creative Technologist</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TimelineItem
                            dateRange={"2011"}
                            narrative={"Graduated from the School of Visual Art & Design at University of South Carolina with a BS Degreen in Photography"}
                            skills={["Photoshop", "Digital Photography", "Film Photography"]}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}
