import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TimelineItem from "../Components/TimelineItem";
import SkillMeter, { ISkillMeterItem } from "../Components/SkillMeter";
import { Colors } from "../Helpers/EColors";
import { Text, TextType } from "../Components/Text";
import FooterWrapper from "../Components/FooterWrapper";
import ContactLinks from "../Components/ContactLinks";
import VectorDivider from "../Components/VectorDivider";
import styled from "styled-components";

export default class Home extends Component {
    render(){
        const skillMeterItems: ISkillMeterItem[] = [
            {skill: "UX Research", percentage: 90, color: Colors.MintGreen} 
            , {skill: "UI Design", percentage: 80, color: Colors.MintGreen} 
            , {skill: "Design Ops", percentage: 65, color: Colors.MintGreen} 
            , {skill: "Creative Direction", percentage: 40, color: Colors.MintGreen} 
        ]
        const timelineItems = [
            {dateRange: "2011", narrative: "Graduated from the School of Visual Art & Design at University of South Carolina with a B.S. Degree in Photography", skills: ["Photoshop", "Digital Photography", "Film Photography"]}
            , {dateRange: "2011 - 2015", narrative: "Worked at a number of Tech companies doing web development, design, and project management.", skills: ["Project Management", "HTML5", "CSS3", "PHP", "Wordpress"]}
            , {dateRange: "2015 - 2018", narrative: "Was hired on as Usability Manager at a Fortune 500 Company where I managed the design and development of the company’s Digital Workspace, which was used by over 60,000 employees.", skills: ["Sketch", "Mobile Design", "Axure", "Workday", "Sharepoint"]}
            , {dateRange: "2017", narrative: "Recieved a UX Certificate from Nielsen Norman Group after attending a 5-day intensive UX  course.", skills: ["Moderated Usability Studies", "Survey Design", "CoDesign", "Card Sorting", "Information Architecture"]}
            , {dateRange: "2018 - Present", narrative: "Helped design and build one of the leading Commercial Real Estate software platforms on the market.", skills: ["Design Ops", "Figma", "Agile", "Data Visualization"]}
        ];
        const Section1 = styled.div`
            background-image: linear-gradient(258.8deg, ${Colors.DkGray} 23.68%, ${Colors.MdGray} 106.16%);
            .inner-wrapper {
                background-image: url('/button-vector.svg');
                background-repeat: no-repeat;
                background-position: top right;
                background-size: 400px;
            }
        `;
        const Section2 = styled.div`
            background: ${Colors.DkGray};
            background-image: url("/map-profile-pic.svg");
            background-repeat: no-repeat;
            background-position: bottom left;
            background-size: 600px;
            padding: 50px 0;
            min-height: 620px;
            
        `;
        const Section3 = styled.div`
            background-image: linear-gradient(258.8deg, ${Colors.DkGray} 23.68%, ${Colors.MdGray} 106.16%);
        `;
        const HeroLayout = styled.div`
            display: flex;
            flex-direction: column;
            gap: 15px;
            height: 300px;
            justify-content: center;
        `;
        const TimeLineLayout = styled.div`
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin: 50px auto;
        `;
        const Pointer = styled.img`
            position: absolute;
            top: 55px;
            left: 190px;
            width: 25px;
        `;
        const SkillsLayout = styled.div`
            display: flex;
            flex-direction: column;
            gap: 20px;
            background: ${Colors.MdGray};
            padding: 30px;
        `;
        const xlCol = {span: 10, offset: 1}
        return (
            <>
                <Section1>
                    <div className="inner-wrapper">
                        <Container fluid={true}>
                            <Row>
                                <Col xl={xlCol}>
                                    <HeroLayout>
                                        <div>
                                            <Text type={TextType.h1}>Evan Farinholt</Text>
                                            <Pointer src="/pointer.svg" />
                                            <Text type={TextType.h2}>Creative Technologist</Text>
                                        </div>
                                        <VectorDivider />
                                        <ContactLinks showLinkText={false} iconColor={Colors.White} />
                                    </HeroLayout>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Section1>
                <Section2>
                    <Container fluid={true}>
                        <Row>
                            <Col xl={{span: 7, offset: 1}}>
                                <Text type={TextType.h3}>
                                    Experienced Creative Technologist with a broad background in UX Research, UI Design, and more
                                </Text>
                                <Text>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </Text>
                            </Col>
                            <Col xl={{span: 3}}>
                                <SkillsLayout>
                                    <Text type={TextType.h4} color={Colors.LtGray}>Core Skills</Text>
                                    {skillMeterItems.map((item: ISkillMeterItem, i: number) => {
                                        return(
                                            <div key={i}>
                                                <SkillMeter
                                                    skill={item.skill}
                                                    percentage={item.percentage}
                                                    color={item.color}
                                                />
                                            </div>
                                        )
                                    })}
                                </SkillsLayout>
                                
                            </Col>
                        </Row>
                    </Container>
                </Section2>
                <Section3>
                    <Container fluid={true}>
                        <Row>
                            <Col xl={xlCol}>
                                <TimeLineLayout>
                                    <Text type={TextType.h4} color={Colors.LtGray}>
                                        Resume
                                    </Text>
                                    {timelineItems.map((item: any, i: number) => {
                                        return(
                                            <div key={i}>
                                                <TimelineItem
                                                    dateRange={item.dateRange}
                                                    narrative={item.narrative}
                                                    skills={item.skills}
                                                    isLast={i === (timelineItems.length - 1)}
                                                />
                                            </div>
                                        )
                                    })}
                                </TimeLineLayout>
                            </Col>
                        </Row>
                    </Container>
                </Section3>
                <FooterWrapper>
                    <Container fluid={true}>
                        <Row>
                            <Col xl={xlCol}>
                                <ContactLinks showLinkText={true} iconColor={Colors.White} />
                            </Col>
                        </Row>
                    </Container>
                </FooterWrapper>
            </>
        )
    }
}
