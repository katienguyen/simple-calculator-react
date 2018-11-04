import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Display } from './Display';
import { Functions } from './Functions';
import { Numbers } from './Numbers';
import { Operations } from './Operations'

export class Calculator extends Component {
    constructor(){
		super();
		this.state={
			displayVal: "0",
			calcVals: []
		};
    }
    displayNum(num){
		if(this.state.displayVal.length > 19) { 
			return;
		} else if(this.state.displayVal === "0" || this.state.displayVal === "Undefined!") {
 			this.setState({
				displayVal: num
			});
		} else if(this.state.displayVal.charAt(0) === "-" && this.state.displayVal.charAt(1) === "0") {
			this.setState({
				displayVal: `-${num}`
			});
		} 
		else {
			this.setState({
				displayVal: this.state.displayVal + num
			});
		}
    }
    clearVals(){
		this.setState({
			displayVal: "0",
			calcVals: []
		});
    }
    addToCalc (oper) {
        const calc = {
          val: parseFloat(this.state.displayVal),
          sign: oper
        }
        const vals = [...this.state.calcVals]
        vals.push(calc)
        this.setState({
          displayVal: '0',
          calcVals: vals
        })
	}
	calcResult (oper) {
		const valsToCalc = [...this.state.calcVals]
		const currentVal = parseFloat(this.state.displayVal)
		let result = 0
		valsToCalc.push({val: currentVal, sign: oper})
		for (let i = 0, x = valsToCalc.length; i < x; i++) {
			if (i === 0) {
				result = valsToCalc[i].val
			} else {
				switch (valsToCalc[i - 1].sign) {
					case '+':
						result += valsToCalc[i].val
						break
					case '-':
						result -= valsToCalc[i].val
						break
					case '/':
						result /= valsToCalc[i].val
						break
					default:
						console.log('Something went wrong...')
				}
			}
		}
		if (isNaN(result) || result === Infinity) {
			result = 'Undefined!'
		} else {
			result = result.toString()
		}
		this.setState({
			displayVal: result,
			calcVals: []
		})
	}
    render(){
		const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9],
					operations = ['+', '-', '/', '='],
					functions = ['clear'];
		return(
			<div className="calculator row">
			<div className="col-12">
				<Display
					displayVal={this.state.displayVal}
				/>
				</div>
				<div className="col-9">
					<Functions 
						functions={functions}
						clearVals={this.clearVals.bind(this)}
					/>
					<Numbers 
						numbers={numbers}
						displayNum={this.displayNum.bind(this)}
					/>
				</div>
				<div className="col-3">
					<Operations
							operations={operations}
							addToCalc={this.addToCalc.bind(this)}
							calcResult={this.calcResult.bind(this)}
					/>
				</div>
			</div>
		);
	}
}