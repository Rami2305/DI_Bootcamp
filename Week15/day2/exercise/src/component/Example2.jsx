import { Component } from 'react';
import data2 from '../data2.json'
import dataList from '/src/dataList.json';


class Example2 extends Component {
    constructor() {
        super()
        this.state  = {
        data: {
            Skills: [] }
    }}

    componentDidMount() {
        this.setState({
            data: data2
        });
    }


    render() {

        const { Skills } = this.state.data
        return (        
            <div>
                {Skills.map((skillCategory, index) => (
                    <div key={index}>
                        <h2>{skillCategory.Area}</h2>
                        <ul>
                            {skillCategory.SkillSet.map((skill, skillIndex) => (
                                <li key={skillIndex}>{skill.Name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    }
}

export default Example2