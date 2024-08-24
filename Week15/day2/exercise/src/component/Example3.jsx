import { Component } from 'react';
import data2 from '../data2.json'
import dataList from '/src/dataList.json';


class Example3 extends Component {
    constructor() {
        super()
        this.state  = {
        data: {
            Experiences: [] }
    }}

    componentDidMount() {
        this.setState({
            data: data2
        });
    }


    render() {

        const { Experiences } = this.state.data
        return (
            <div>
              <h1>Experience List</h1>
              {Experiences.map((experience) => (
                <div key={experience.url}>
                  <img src={experience.logo} />
                  <h2>{experience.companyName}</h2>
                  <a href={experience.url} >Company Website</a>
                  {experience.roles.map((role, index) => (
                    <div key={index}>
                      <h3>{role.title}</h3>
                      <p>{role.description}</p>
                      <p>{role.location}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          );
    }
}

export default Example3