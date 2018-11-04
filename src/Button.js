import React, { Component } from 'react';

export class Button extends Component {
    constructor() {
        super();
    }
    handleClick(e) {
        switch(this.props.button) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                this.props.handleNum(this.props.button)
                break
            case "clear":
                this.props.handleFunct(this.props.button)
                break
            case "/":
            case "-":
            case "+":
            case "=":
                this.props.handleOper(this.props.button)
                break
        }
    }
    render() {
        return(<button name={this.props.button} onClick={this.handleClick.bind(this)}>{this.props.button}</button>);        
    }
}