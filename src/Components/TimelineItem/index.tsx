import React, { Component } from 'react';
import { Text, TextType } from "../Text";
import styled from "styled-components";
import { Colors } from '../../Helpers/EColors';

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
                display: flex;
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
                ul {
                    display: inline-flex;
                    gap: 10px;
                    list-style-type: none;
                    padding: unset;
                    li {
                        display: flex;
                    }
                }
            }
        `;
        return (
            <TimelineWrapper>
                <div className="timeline-square">
                    <Text color={Colors.SunsetOrange}>
                        &#x25A0;
                    </Text>
                    { !this.props.isLast && <div className="timeline-track"></div>} 
                </div>
                <div className="timeline-content">
                    <Text type={TextType.h4} color={Colors.SunsetOrange}>
                        {this.props.dateRange}
                    </Text>
                    <Text type={TextType.p}>
                        {this.props.narrative}
                    </Text>
                    <ul>
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