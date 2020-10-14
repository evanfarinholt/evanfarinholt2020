import React, { Component, CSSProperties } from 'react';
import { Colors } from "../../Helpers/EColors";
import { Text, TextType } from "../Text";
import Tooltip from "@material-ui/core/Tooltip";


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
        const skillContainer: CSSProperties = {
            width: "100%"
            , display: "flex"
            , flexDirection: "column"
        }
        const meterContainer: CSSProperties = {
            backgroundColor: Colors.DkGray
            , height: "25px"
            , width: "100%"
        }
        const meterFill: CSSProperties = {
            width: `${meterFillWidth}%`
            , backgroundColor: this.props.color
            , height: "100%"
        }
        return (
            <div style={skillContainer}>
                <Tooltip title="Delete">
                    <Text type={TextType.h4} overrides={{color: Colors.LtMintGreen}}>
                        {this.props.skill}
                    </Text>
                </Tooltip>
               <div style={meterContainer}>
                   <div style={meterFill}></div>
               </div>
            </div>
        )
    }
}
