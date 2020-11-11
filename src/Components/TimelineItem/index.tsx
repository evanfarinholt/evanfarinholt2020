import React, { Component } from 'react';
import { Text, TextType } from "../Text";
import styled from "styled-components";
import { Colors } from '../../Helpers/Enums';

interface ITimelineItem {
    dateRange: string;
    narrative: string;
    skills: string[];
    isLast: boolean;
}

export default class TimelineItem extends Component<ITimelineItem> {
    render(){
        const TimelineWrapper = styled.div`
            display: grid;
            grid-template-columns: 30px auto;
            
            .timeline-square {
                p {
                    position: relative;
                    z-index: 2;
                    padding: 0px 3px;
                }
                .timeline-track {
                    position: relative;
                    left: -12px;
                    top: 15px;
                    width: 4px;
                    background: ${Colors.LtGray};
                    z-index: 1;
                    height: 110%;
                }
            }
            .timeline-content {
                > * {
                    margin-bottom: 10px
                }
                ul {
                    list-style-type: none;
                    padding: unset;
                    li {
                        margin: 0 10px 10px 0;
                    }
                }
            }
        `;
        return (
            <TimelineWrapper>
                <div className="timeline-square d-flex">
                    <Text color={Colors.SunsetOrange}>
                        &#x25A0;
                    </Text>
                    { !this.props.isLast && <div className="timeline-track"></div>} 
                </div>
                <div className="timeline-content d-flex flex-column">
                    <Text type={TextType.h4} color={Colors.SunsetOrange}>
                        {this.props.dateRange}
                    </Text>
                    <Text type={TextType.p}>
                        {this.props.narrative}
                    </Text>
                    <ul className="d-inline-flex flex-wrap">
                        {this.props.skills.map((skill: string, i: number) => {
                            return (
                                <li key={i}>
                                    <Text type={TextType.pill}>
                                        {skill}
                                    </Text>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </TimelineWrapper>
        )
    }
}