import React, { Component } from 'react'

class ErrorBoundary extends Component {
    state = {
        hasErrror: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasErrror: true,
            errorMessage: error
        })
    }

    render() {
        if (this.state.hasErrror) {
            return <h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children
        }
    }

}

export default ErrorBoundary;