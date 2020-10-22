import React, { Component } from 'react';
import { Colors } from "../../Helpers/Enums";
import { Text, TextType } from "../Text";
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
            gap: 5px;
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
                <Text type={TextType.h4} color={Colors.LtMintGreen}>
                    {this.props.skill}
                </Text>
               <div className="meter-container">
                   <div className="meter-fill"></div>
               </div>
            </SkillContainer>
        )
    }
}
