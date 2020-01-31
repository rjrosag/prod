import React, { Component } from 'react'


export default class Boletin extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages })=>{
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages} = this.state;
        return (
           <div>
               Hello from Boletin
           </div>
        )
    }
}
