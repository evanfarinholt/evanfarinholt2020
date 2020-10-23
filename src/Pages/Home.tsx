import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TimelineItem from "../Components/TimelineItem";
import SkillMeter, { ISkillMeterItem } from "../Components/SkillMeter";
import { Colors, urls } from "../Helpers/Enums";
import { Text, TextType } from "../Components/Text";
import ContactLinks from "../Components/ContactLinks";
import VectorDivider from "../Components/VectorDivider";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

export default class Home extends Component {
    render(){
        const skillMeterItems: ISkillMeterItem[] = [
            {skill: "UI Design", percentage: 95, color: Colors.MintGreen} 
            , {skill: "UX Research", percentage: 90, color: Colors.MintGreen} 
            , {skill: "Design Ops", percentage: 80, color: Colors.MintGreen} 
            , {skill: "Creative Direction", percentage: 70, color: Colors.MintGreen} 
        ]
        const timelineItems = [
            {dateRange: "2011", narrative: "Graduated from the School of Visual Art & Design at University of South Carolina with a B.S. Degree in Photography.", skills: ["Photoshop", "Digital Photography", "Film Photography", "Color Theory", "Typography", "Graphic Design"]}
            , {dateRange: "2011 - 2015", narrative: "Worked at a number of Tech companies doing web development, design, and project management.", skills: ["Project Management", "HTML5", "CSS3", "PHP", "Wordpress"]}
            , {dateRange: "2015 - 2018", narrative: "Was hired on as Usability Manager at a Fortune 500 Company where I managed the design and development of the company’s Digital Workspace, which was used by over 60,000 employees worldwide.", skills: ["Sketch", "Mobile Design", "Axure", "Workday", "Sharepoint"]}
            , {dateRange: "2017", narrative: "Recieved a UX Certificate from Nielsen Norman Group after attending a 5-day intensive UX  course.", skills: ["Moderated Usability Studies", "Card Sorting", "Information Architecture"]}
            , {dateRange: "2018 - 2019", narrative: "Did contract work for a leading UX Design & Research agency in New York.", skills: ["Survey Design", "CoDesign", "User Journey Analysis"]}
            , {dateRange: "2019 - Present", narrative: "Helped design and build one of the leading Commercial Real Estate software platforms on the market.", skills: ["Design Ops", "Figma", "Agile", "Data Visualization"]}
        ];
        const Section1 = styled.header`
            background-image: linear-gradient(258.8deg, ${Colors.DkGray} 23.68%, ${Colors.MdGray} 106.16%);
            .inner-wrapper {
                background-image: url('/button-vector.svg');
                background-repeat: no-repeat;
                background-position: top right;
                background-size: 400px;
            }
            @media (max-width: 872px) {
                .inner-wrapper {
                    background-image: none;
                }
            }
        `;
        const Section2 = styled.section`
            background: ${Colors.DkGray};
            background-image: url("/map-profile-pic.svg");  
            background-repeat: no-repeat;
            background-position: bottom left;
            background-size: 600px;
            padding: 50px 0;
            min-height: 640px;

            @media (max-width: 991px) {
                background-image: none;
                min-height: auto;
            }
        `;
        const Section3 = styled.section`
            background-image: linear-gradient(258.8deg, ${Colors.DkGray} 23.68%, ${Colors.MdGray} 106.16%);
            .inner-wrapper {
                padding: 20px 0;
            }
        `;
        const FooterWrapper = styled.footer`
            background: ${Colors.Black};
            .inner-wrapper {
                padding: 20px 0;
            }
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
            margin: 20px auto;
        `;
        const Pointer = styled.img`
            position: relative;
            width: 25px;
            top: -20px;
            left: 10px;
        `;
        const SkillsLayout = styled.div`
            display: flex;
            flex-direction: column;
            gap: 20px;
            background: ${Colors.MdGray};
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 0 20px ${Colors.Black};

            @media (max-width: 991px) {
                background: unset;
                box-shadow: unset;
                padding: 30px 0px;
            }
        `;
        const ResumeButton = styled.a`
            display: inline-flex;
            align-items: center;
            flex-direction: row;
            gap: 10px;
            background: ${Colors.LtGray};
            padding: 5px 10px;
            &:hover {
                text-decoration: none;
                background: ${Colors.MdGray};
            }
            .link-icon {
                color: ${Colors.SunsetOrange};
            }
        `;
        
        return (
            <>
                <Section1>
                    <div className="inner-wrapper">
                        <Container fluid={true}>
                            <Row>
                                <Col xl={{span: 10, offset: 1}}>
                                    <HeroLayout>
                                        <div>
                                            <Text type={TextType.h1}>
                                                Evan Farinholt
                                                <Pointer src="/pointer.svg" />
                                            </Text>
                                            
                                            <Text type={TextType.h2}>Creative Technologist</Text>
                                        </div>
                                        <VectorDivider />
                                        <ContactLinks showLinkText={false} />
                                    </HeroLayout>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Section1>
                <Section2>
                    <Container fluid={true}>
                        <Row>
                            <Col lg={8} xl={{span: 6, offset: 1}}>
                                <Text type={TextType.h3}>
                                    Experienced Creative Technologist with a broad background in UX Research, UI Design, and more
                                </Text>
                                <Text>
                                    Evan Farinholt is looking to make the next generation of digital products more usable, accessible, and beautiful.
                                </Text>
                            </Col>
                            <Col lg={4} xl={{span: 3, offset: 1}}>
                                <SkillsLayout>
                                    <Text type={TextType.h4} color={Colors.XltGray}>
                                        Core Skills
                                    </Text>
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
                    <div className="inner-wrapper">
                        <Container fluid={true}>
                            <Row>
                                <Col xs={9} sm={6} md={6} lg={6} xl={{span: 4, offset: 2}} className="d-flex align-items-center">
                                    <Text type={TextType.h4} color={Colors.XltGray}>
                                        My Professional Journey
                                    </Text>
                                </Col>
                                <Col xs={3} sm={6} md={6} lg={6} xl={{span: 3, offset: 1}} className="d-flex justify-content-end">
                                    <ResumeButton href={urls.resumeUrl} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className="link-icon" icon={faFilePdf} /> 
                                        <Text color={Colors.SunsetOrange} type={TextType.button} className="d-none d-sm-block">Download Resume</Text>
                                    </ResumeButton>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={{span: 8, offset: 2}}>
                                    <TimeLineLayout>
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
                    </div>
                </Section3>
                <FooterWrapper>
                    <Container fluid={true}>
                        <Row>
                            <Col xl={{span: 10, offset: 1}}>
                                <div className="inner-wrapper">
                                    <ContactLinks showLinkText={true} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </FooterWrapper>
            </>
        )
    }
}
