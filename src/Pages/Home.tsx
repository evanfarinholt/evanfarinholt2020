import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TimelineItem, { ITimelineItem } from "../Components/TimelineItem";
import SkillMeter, { ISkillMeterItem } from "../Components/SkillMeter";
import { Colors } from "../Helpers/EColors";
import { Text, TextType } from "../Components/Text";
import PageWrapper from "../Components/PageWrapper";
import ContactLinks from "../Components/ContactLinks";

export default class Home extends Component {
    render(){
        const skillMeterItems: ISkillMeterItem[] = [
            {skill: "UX Reasearch", percentage: 90, color: Colors.MintGreen} 
            , {skill: "UI Design", percentage: 80, color: Colors.MintGreen} 
            , {skill: "Design Ops", percentage: 65, color: Colors.MintGreen} 
            , {skill: "Creative Direction", percentage: 40, color: Colors.MintGreen} 
        ]
        const timelineItems: ITimelineItem[] = [
            {dateRange: "2011", narrative: "Graduated from the School of Visual Art & Design at University of South Carolina with a B.S. Degree in Photography", skills: ["Photoshop", "Digital Photography", "Film Photography"]}
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
                            <ContactLinks showLinkText={false} iconColor={Colors.White} />
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col xl={6}>
                            <Text type={TextType.h3}>
                                Experienced Creative Technologist with a broad background in UX Research, UI Design, and more
                            </Text>
                            <Text>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </Text>
                        </Col>
                        <Col xl={6}>
                            {skillMeterItems.map((item: ISkillMeterItem) => {
                                return(
                                    <SkillMeter
                                        skill={item.skill}
                                        percentage={item.percentage}
                                        color={item.color}
                                    />
                                )
                            })}
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
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
