import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { events } from '../Helpers/Enums';

interface IProps {}
interface IState {
    isLightboxOpen: boolean;
    currentImage: number;
}
export default class Photography extends Component<IProps, IState>  {
    constructor(props: IProps){
        super(props);
    }
    render(){

        const handleBookingButtonClick = (url: string) => {
            window.open(url, "_blank");
        }

        const socialLink = (icon: JSX.Element, label: string, url: string) => 
            <div className="social-link-container d-flex flex-row">
                <a href={url} target="_blank" rel="noopener noreferrer" className="d-flex flex-row">
                    {icon}
                    {label}
                </a>
            </div>;

        const bookingButton = (label: string, url: string) => 
            <button onClick={() => handleBookingButtonClick(url)}>
                {label}
            </button>
        
        const eventItem = (date: string, time: string, title: string, venue: string, address: string) => 
            <div className="event-container">
                <div className="date-time-block">
                    <span>{date}</span>
                    <span>{time}</span>
                </div>
                <div className="title-block">
                    <span>{title}</span>
                    <span>{venue}</span>
                </div>
                <div className="address-block">
                    <span>{address}</span>
                </div>
            </div>

        return (
            <Container>
                <Row>
                    <Col> 
                        <h1 className="header-1">Evan Farinholt</h1>
                        <h2 className="header-2">Musician &amp; Educator</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex flex-row">
                        {socialLink(
                            <FontAwesomeIcon className="link-icon" icon={faInstagram} /> 
                            , "evanfarinholt"
                            , "https://www.instagram.com/evanfarinholt/"
                        )}
                        {socialLink(
                            <FontAwesomeIcon className="link-icon" icon={faEnvelope} /> 
                            , "efarinholt@gmail.com"
                            , "mailto:efarinholt@gmail.com"
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={9}>
                        <h3 className="header-3">I’m a <strong>drummer</strong>, <strong>drum teacher</strong>, and <strong>music maker</strong> based out of Kittery Maine.</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={6}>
                        <p>I’m available for <strong>teaching</strong>, <strong>performing</strong>, and <strong>song writing projects</strong> in the Seacoast region. Book a session with me if you’re interested.</p>
                        {bookingButton("Schedule a Drum Lesson", "https://calendly.com/")}
                        {bookingButton("Book a Gig", "https://calendly.com/")}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Upcoming Events</h4>
                        <span>Summer/Fall '21</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul>
                            {events.map((event: any, i: number) => {
                                return(
                                    <li key={i}>
                                        {eventItem(
                                            event.date
                                            , event.time
                                            , event.title
                                            , event.venue
                                            , event.address
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </Col>
                </Row>
            </Container>
        )
    }
}
