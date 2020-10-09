import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StyleHelper, { Colors } from "../Helpers/StyleHelper"; 
import TimelineItem from "../Components/TimelineItem";
import SkillMeter from "../Components/SkillMeter";

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
                        <SkillMeter
                            skill={"UX Research"}
                            percentage={90}
                            color={Colors.DkGray}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}
