import React, { Component } from 'react';
import Colors from "../../Helpers/StyleHelper";

interface IProps {
    skill: string;
    percentage: number;
    color: typeof Colors;
}

export default class SkillMeter extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    render(){
        const meterWidth: number = this.props.percentage < 100
            ? this.props.percentage
            : 100;
        return (
            <div>
               <h3>{this.props.skill}</h3>
               <div>
                   <div style={{width: `${meterWidth}%`}}></div>
               </div>
            </div>
        )
    }
}
