import React from "react";

class TestClass extends React.Component {
    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <h3>{this.props.text}</h3>
            </div>
        )
    }
}

export default TestClass;