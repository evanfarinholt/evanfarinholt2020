import React, { Component } from 'react';
import { Colors } from "../../Helpers/EColors";
import { Text, TextType } from "../Text";
import Tooltip from "@material-ui/core/Tooltip";
import styled from "styled-components";

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
        const SkillContainer = styled.div`
            width: 100%;
            display: flex;
            flex-direction: column;
            .meter-container {
                background-color: ${Colors.DkGray};
                height: 25px;
                width: 100%;
                .meter-fill {
                    width: ${meterFillWidth}%;
                    background-color: ${this.props.color};
                    height: 100%;
                }
            }
        `;
        return (
            <SkillContainer>
                <Tooltip title="Delete">
                    <Text type={TextType.h4}>
                        {this.props.skill}
                    </Text>
                </Tooltip>
               <div className="meter-container">
                   <div className="meter-fill"></div>
               </div>
            </SkillContainer>
        )
    }
}
