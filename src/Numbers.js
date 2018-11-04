import React, { Component } from 'react';
import { Button } from './Button'

export class Numbers extends Component {
    handleNum(num) {
        const parsedNum = num.toString();
        this.props.displayNum(parsedNum);
    }
    render() {
        return(
            <div className="calc-numbers">
                {this.props.numbers.map((number, i) => {
                    return <Button button={number} handleNum={this.handleNum.bind(this)} key={i}/>
                })}
            </div>
        );
    }
}