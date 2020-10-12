import React, { Component } from 'react';
import { Text, TextType } from "../Text";

export interface ITimelineItem {
    dateRange: string;
    narrative: string;
    skills: string[];
}

export default class TimelineItem extends Component<ITimelineItem> {
    render(){
        return (
            <div>
                <Text type={TextType.h3}>{this.props.dateRange}</Text>
                <Text type={TextType.p}>{this.props.narrative}</Text>
                <ul>
                    {this.props.skills.map((skill: string, i: number) => {
                        return (
                            <li key={i}>{skill}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}