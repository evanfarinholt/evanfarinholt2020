import React, { Component } from 'react';
import { Text, TextType } from "../Text";
import { Colors } from "../../Helpers/EColors";

export interface ITimelineItem {
    dateRange: string;
    narrative: string;
    skills: string[];
}

export default class TimelineItem extends Component<ITimelineItem> {
    render(){
        return (
            <div>
                <Text type={TextType.h4} overrides={{color: Colors.DkGray}}>{this.props.dateRange}</Text>
                <Text type={TextType.p}>{this.props.narrative}</Text>
                <ul>
                    {this.props.skills.map((skill: string, i: number) => {
                        return (
                            <li><Text type={TextType.pill} key={i}>{skill}</Text></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}