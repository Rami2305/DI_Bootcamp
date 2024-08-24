import { Component } from 'react';
import data2 from '../data2.json'
import dataList from '/src/dataList.json';


class Example1 extends Component {
    constructor() {
        super()
        this.state  = {
        data: {
            SocialMedias: [] }
    }}

    componentDidMount() {
        this.setState({
            data: data2
        });
    }


    render() {

        const { SocialMedias} = this.state.data
        return (
            <div>
                <ul>
                {SocialMedias.map((link, index) => (
                        <li key={index}>
                            <a href={link} >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Example1