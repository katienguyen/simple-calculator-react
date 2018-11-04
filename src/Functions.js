import React, { Component } from 'react';
import { Button } from './Button'

export class Functions extends Component {
    handleFunct(funct) {
        switch(funct) {
            case "clear":
                this.props.clearVals();
				break;
            default:
            console.log("Something went wrong...");
        }
    }
    render(){
		return(
			<div className="calc-functions">
				{this.props.functions.map((funct, i) => {
			 		return <Button
									button={funct}
									handleFunct={this.handleFunct.bind(this)} key={i}
							/>;
				})}
			</div>
		);
	}
}