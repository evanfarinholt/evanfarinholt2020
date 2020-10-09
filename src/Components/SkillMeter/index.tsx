import React, { Component } from 'react';
import Colors from "../../Helpers/StyleHelper";

interface IProps {
    skill: string;
    pecentage: number;
    color: typeof Colors;
}

class SkillMeter extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div>
               <h3>{this.props.skill}</h3>
               <div>
                   <div style={{width: `${this.props.pecentage}%`}}></div>
               </div>
            </div>
        )
    }
}

export default SkillMeter;
