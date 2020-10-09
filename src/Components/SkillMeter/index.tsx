import React, { Component } from 'react';
import { Colors } from "../../Helpers/StyleHelper";

interface IProps {
    skill: string;
    percentage: number;
    color: Colors;
}

export default class SkillMeter extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    render(){
        const meterFillWidth: number = this.props.percentage < 100
            ? this.props.percentage
            : 100;

        const meterContainer = {

        }
        const meterFill = {
            width: `${meterFillWidth}%`
        }
        return (
            <div>
               <h3>{this.props.skill}</h3>
               <div style={meterContainer}>
                   <div style={meterFill}></div>
               </div>
            </div>
        )
    }
}
