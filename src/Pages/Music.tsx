
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { events } from '../Helpers/Enums';

interface IProps {}
interface IState {
    isLightboxOpen: boolean;
    currentImage: number;
}
export default class Photography extends Component<IProps, IState>  {
    render(){

        const handleBookingButtonClick = (url: string) => {
            window.open(url, "_blank");
        }

        const socialLink = (icon: JSX.Element, label: string, url: string) => 
            <div className="social-link-container d-flex flex-row">
                <a href={url} target="_blank" rel="noopener noreferrer" className="link-primary d-flex flex-row pr-3">
                    <div className="pr-2">{icon}</div>
                    <span className="text-white special-link">{label}</span>
                </a>
            </div>;

        const bookingButton = (label: string, url: string) => 
            <button className="btn btn-lg btn-primary" onClick={() => handleBookingButtonClick(url)}>
                <FontAwesomeIcon className="mr-3" icon={faCalendar} /> 
                {label}
            </button>
        
        const eventItem = (date: string, time: string, title: string, venue: string, address: string, cityState: string) => 
            <div className="d-flex flex-row">
                <div className="w-25 p-2 date-time-block d-flex flex-column">
                    <span><strong>{date}</strong></span>
                    <span>{time}</span>
                </div>
                <div className="w-50 p-2 title-block d-flex flex-column">
                    <span><strong>{title}</strong></span>
                    <span>{venue}</span>
                </div>
                <div className="w-25 p-2 address-block d-flex flex-column">
                    <span>{address}</span>
                    <span>{cityState}</span>
                </div>
            </div>

        return (
            <>
                <Container>
                    <Row className="pt-5 pb-5">
                        <Col md={9} className="d-flex flex-column justify-content-center"> 
                            <h1>Evan Farinholt</h1>
                            <h2>Musician &amp; Educator</h2>
                            <div className="d-flex flex-row pt-2 pb-2">
                                {socialLink(
                                    <FontAwesomeIcon className="text-primary" icon={faInstagram} /> 
                                    , "evanfarinholt"
                                    , "https://www.instagram.com/evanfarinholt/"
                                )}
                                {socialLink(
                                    <FontAwesomeIcon className="text-primary" icon={faEnvelope} /> 
                                    , "efarinholt@gmail.com"
                                    , "mailto:efarinholt@gmail.com"
                                )}
                            </div>
                        </Col>
                        <Col md={3} className="d-none d-md-flex justify-content-end d-sm-none hidden-xs-down">
                            <img alt="" className="img-fluid" src="/maine-circle-graphic.svg" />
                        </Col>
                    </Row>
                    <Row className="pt-3 pb-3">
                        <Col md={12} lg={10}>
                            <h3>I’m a <strong>drummer</strong>, <strong>drum teacher</strong>, and <strong>music maker</strong> based out of Kittery Maine.</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} lg={8}>
                            <p>I’m available for <strong>teaching</strong>, <strong>performing</strong>, and <strong>song writing projects</strong> in the Seacoast region. Book a session with me if you’re interested.</p>
                        </Col>
                    </Row>
                    <Row className="pt-3 pb-3">
                        <Col className="d-flex flex-column flex-start align-items-start">
                            <div className="pb-3">{bookingButton("Schedule a Drum Lesson", "https://calendly.com/")}</div>
                            <div className="pb-3">{bookingButton("Book a Gig", "https://calendly.com/")}</div>
                        </Col>
                    </Row>
                    <Row className="pt-3 pb-3">
                        <Col>
                            <h4>Upcoming Events</h4>
                            <span className="special-label">Summer/Fall '21</span>
                        </Col>
                    </Row>
                    <Row className="pt-3 pb-3">
                        <Col>
                            <ul className="list-unstyled">
                                {events.map((event: any, i: number) => {
                                    return(
                                        <li key={i}>
                                            {eventItem(
                                                event.date
                                                , event.time
                                                , event.title
                                                , event.venue
                                                , event.address
                                                , event.cityState
                                            )}
                                        </li>
                                    )
                                })}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
