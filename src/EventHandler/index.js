import React, { Component } from 'react'
import './Style.css'

export default class EventHandler extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             changedValue: ''
        }
    }
    
    handleOnChange = (e) => {
        this.setState({
            changedValue: e.target.value
        }, () =>{
            console.log(this.state.changedValue)
        })   
    }

    render() {
        return (
            <div>
                <h3>On Change Handler</h3>
                <input type="text" onChange={this.handleOnChange} />
                <p>{this.state.changedValue}</p>
            </div>
        )
    }
}
