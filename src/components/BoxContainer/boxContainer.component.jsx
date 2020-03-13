import React, { Component } from 'react'
import Box from '../Box/box.component'
import './boxContainer.style.css'

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 12
    }
    render(){
        const boxes = Array.from({length: this.props.numBoxes})
        .map(() => <Box />)

    return <div className="BoxContainer">{boxes}</div>
    } 
}

export default BoxContainer;