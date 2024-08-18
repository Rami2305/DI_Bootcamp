import React from 'react'

class ErrorBoundary extends React.Component {
    constructor() {
        super()
        this.state = {
            hasError: false,
        };
    }
// is a lifecycle method that runs when a error is thrown
    componentDidCatch =(error, errorInfo) => {
        console.log(error);
        this.setState({ hasError: true})
    }
    render() {
        console.log(this.props);
        if (this.state.hasError) return <h2>Oops... we have a problem</h2>
        return this.props.children; 
        
    }
}

export default ErrorBoundary