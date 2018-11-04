import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button'

export class Operations extends Component {
    handleOper(oper){
		switch (oper){
			case "+":
			case "-":
			case "*":
			case "/":
				this.props.addToCalc(oper);
				break;
			case "=":
				this.props.calcResult(oper);
				break;
			default:
				console.log("Something went wrong...");
		}
    }
    render(){
		return(
			<div className="calc-operations">
				{this.props.operations.map((operation, i) => {
					return <Button 
									 button={operation}
									 handleOper={this.handleOper.bind(this)} key={i}
									/>
				})}
			</div>
		)
	}
}