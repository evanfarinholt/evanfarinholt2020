
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCalendar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { events, urls } from '../Helpers/Enums';

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
            <div className="social-link-container d-flex pb-1 pt-1">
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
            <div className="event-item d-flex flex-column flex-lg-row pb-2 pt-2">
                <div className="pr-4 d-flex flex-row align-items-center">
                    <FontAwesomeIcon className="text-primary mr-3" icon={faCalendar} /> 
                    <div className="d-flex flex-row flex-lg-column">
                        <span className="pr-2">{date}</span>
                        <span>{time}</span>
                    </div>
                </div>
                
                <div className="p-2 pr-4 title-block d-flex flex-column">
                    <span><strong>{title}</strong></span>
                    <span>{venue}</span>
                </div>
                <div className="p-2 d-flex flex-row align-items-center">
                    <FontAwesomeIcon className="text-primary mr-3" icon={faMapMarkerAlt} /> 
                    <div className="d-flex flex-row flex-lg-column flex-start align-items-start">
                        <span>{address}</span>
                        <span>{cityState}</span>
                    </div>
                </div>
                
            </div>

        return (
            <>
                <Container>
                    <Row className="pt-5 pb-5">
                        <Col md={12} lg={9} className="d-flex flex-column justify-content-center"> 
                            <h1>Evan Farinholt</h1>
                            <h2>Musician &amp; Educator</h2>
                            <div className="d-flex pt-2 pb-2 flex-lg-row flex-column">
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
                                {socialLink(
                                    <FontAwesomeIcon className="text-primary" icon={faSoundcloud} /> 
                                    , "evanfarinholt"
                                    , "https://soundcloud.com/evanfarinholt"
                                )}
                            </div>
                        </Col>
                        <Col md={3} className="d-none d-lg-flex justify-content-end d-sm-none hidden-xs-down">
                            <img alt="" className="img-fluid" src="/maine-circle-graphic.svg" />
                        </Col>
                    </Row>
                </Container>
                <div className="drumsticks-background">
                    <Container>
                        <Row className="pt-3 pb-3">
                            <Col md={12} lg={10}>
                                <h3>I’m a <strong>drummer</strong>, <strong>drum teacher</strong>, and <strong>music maker</strong> based out of Kittery, Maine.</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={8}>
                                <p>I’m available for <strong>teaching</strong>, <strong>performing</strong>, and <strong>song writing projects</strong> in the Seacoast region. Book a session with me if you’re interested.</p>
                            </Col>
                        </Row>
                        <Row className="pt-3 pb-3">
                            <Col className="d-flex flex-column flex-start align-items-start">
                                <div className="pb-3">{bookingButton("Schedule a Drum Lesson", urls.lessonBookingLink)}</div>
                                <div className="pb-3">{bookingButton("Book a Gig", urls.gigBookingLink)}</div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="d-md-none d-lg-flex">
                    <Row className="pt-3 pb-3">
                        <Col></Col>
                    </Row>
                </Container>
                <div className="plug-background"></div>
                <Container>
                    <Row className="pt-3 pb-3">
                        <Col>
                            <h4>Upcoming Events</h4>
                            <span className="special-label">Summer/Fall '21</span>
                        </Col>
                    </Row>
                </Container>
                
                <Container>
                    <Row className="pt-3 pb-5">
                        <Col>
                            <ul className="list-unstyled">
                                {events.length > 0
                                    ? events.map((event: any, i: number) => {
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
                                    })
                                    : 
                                    <div className="d-flex flex-column">
                                        <p className="text-secondary">
                                            No Upcoming Events. <a href={urls.gigBookingLink} target="_blank" rel="noopener noreferrer">Book a gig</a>.
                                        </p>
                                    </div>
                                }
                            </ul>
                        </Col>
                    </Row>
                </Container>
                
            </>
        )
    }
}
