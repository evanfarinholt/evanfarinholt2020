import React, { Component } from 'react';
import { Colors } from "../../Helpers/EColors";
import { Text, TextType } from "../Text";

export interface ISkillMeterItem {
    skill: string;
    percentage: number;
    color: Colors;
}

export default class SkillMeter extends Component<ISkillMeterItem> {
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
               <Text type={TextType.h2}>{this.props.skill}</Text>
               <div style={meterContainer}>
                   <div style={meterFill}></div>
               </div>
            </div>
        )
    }
}
