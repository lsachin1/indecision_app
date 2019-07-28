import React from 'react';
const ms = require('pretty-ms')

export default class Timer extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			time: 0,
			start: 0

		}

		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
		this.reset = this.reset.bind(this);
	}

	start() {
		this.setState(() => {
			return {
				time: this.state.time,
				start: Date.now() - this.state.time
			}
		})
		
		this.timer = setInterval(() => {
			this.setState(() => {
				return {
					time: Date.now() - this.state.start
				}
			})
		}, 1);
		
	}

	stop() {
		clearInterval(this.timer);
		console.log("stop");
	}

	reset() {
		this.setState(() => {
			return {
				time: 0
			}
		})
		clearInterval(this.timer);
		console.log("reset");
	}

	render(){
		return (
			<div>
				<h3>Timer: {ms(this.state.time)}</h3>
				<button onClick={this.start}>Start</button>
				<button onClick={this.stop}>Stop</button>
				<button onClick={this.start}>Resume</button>
				<button onClick={this.reset}>Reset</button>
			</div>
		)
	}
}

