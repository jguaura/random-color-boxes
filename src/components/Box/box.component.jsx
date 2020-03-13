import  React, { Component } from 'react'
import { choice } from '../../helpers'
import './box.style.css';

class Box extends Component {
    static defaultProps = {
        allColors: [
            '#4f3961', '#ea728c', '#fc9d9d', '#f3d4d4',
            '#ffe75e', '#feb72b', '#899857', '#527318', 
            '#4d4646', '#5b5656', '#7fcd91', '#f5eaea',
            '#9dab86', '#e6a157', '#5d5b6a', '#018383'
        ]
    }
    constructor(props){
        super(props)
        this.state = {color: choice(this.props.allColors)}
    }

    setColor = () => {
        let newColor;
        do{
            newColor = choice(this.props.allColors);
        } while (newColor === this.state.color)
        
        this.setState({ color: newColor })   
    }

    handleClick = () => {
        this.setColor()
    }
    render() {
        return(
            <div 
                className="Box"
                style={{backgroundColor: this.state.color}}
                onClick={this.handleClick}
            >    
            </div>
        )
    }
}

export default Box;