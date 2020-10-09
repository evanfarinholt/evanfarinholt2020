import React, { Component } from 'react';

interface IProps {
    dateRange: string;
    narrative: string;
    skills: string[];
}

class TimelineItem extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div>
                <h3>{this.props.dateRange}</h3>
                <p>{this.props.narrative}</p>
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

export default TimelineItem;
