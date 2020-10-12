import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TimelineItem, { ITimelineItem } from "../Components/TimelineItem";
import SkillMeter, { ISkillMeterItem } from "../Components/SkillMeter";
import { Colors } from "../Helpers/EColors";
import { Text, TextType } from "../Components/Text";
import PageWrapper from "../Components/PageWrapper";

export default class Home extends Component {
    render(){
        const skillMeterItems: ISkillMeterItem[] = [
            {skill:"", percentage: 90, color: Colors.DkGray} 
        ]
        const timelineItems: ITimelineItem[] = [
            {dateRange: "2011", narrative: "Graduated from the School of Visual Art & Design at University of South Carolina with a BS Degreen in Photography", skills: ["Photoshop", "Digital Photography", "Film Photography"]}
            , {dateRange: "2011 - 2015", narrative: "Worked at a number of Tech companies doing web development, design, and project management.", skills: ["Project Management", "HTML5", "CSS3", "PHP", "Wordpress"]}
            , {dateRange: "2015 - 2018", narrative: "Was hired on as Usability Manager at a Fortune 500 Company where I managed the design and development of the company’s Digital Workspace, which was used by over 60,000 employees.", skills: ["Sketch", "Mobile Design", "Axure", "Workday", "Sharepoint"]}
            , {dateRange: "2017", narrative: "Recieved a UX Certificate from Nielsen Norman Group after attending a 5-day intensive UX  course.", skills: ["Moderated Usability Studies", "Survey Design", "CoDesign", "Card Sorting", "Information Architecture"]}
            , {dateRange: "2018 - Present", narrative: "Helped design and build one of the leading Commercial Real Estate software platforms on the market.", skills: ["Design Ops", "Figma", "Agile", "Data Visualization"]}
        ]
        return (
            <PageWrapper>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <Text type={TextType.h1}>Evan Farinholt</Text>
                            <Text type={TextType.h2}>Creative Technologist</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            {skillMeterItems.map((item: ISkillMeterItem) => {
                                return(
                                    <SkillMeter
                                        skill={item.skill}
                                        percentage={item.percentage}
                                        color={item.color}
                                    />
                                )
                            })}
                            {timelineItems.map((item: ITimelineItem) => {
                                return(
                                    <TimelineItem
                                        dateRange={item.dateRange}
                                        narrative={item.narrative}
                                        skills={item.skills}
                                    />
                                )
                            })}
                            
                        </Col>
                    </Row>
                </Container>
            </PageWrapper>
        )
    }
}
