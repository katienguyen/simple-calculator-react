import React, { Component } from 'react';

export class Display extends Component {
    render() {
		return(
			<div className="calc-display">
				{this.props.displayVal}
			</div>
		);
	}
}