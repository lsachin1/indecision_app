import React from 'react';

export class Action extends React.Component {

	constructor(props){
		super(props);
		this.handlePick = this.handlePick.bind(this);
	}

	handlePick(){
		let random = Math.floor(Math.random() * this.props.options.length);
		let value = this.props.options[random];
		alert(value);
	}

	render(){
			console.log(this.props.options.length);
		return (
			<div>
				<button onClick={this.handlePick} disabled={!this.props.options.length > 0}>What should we do?</button>
			</div>
		);
	}
}