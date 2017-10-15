import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = { time: new Date().toLocaleTimeString(),
					   isCounting: false };
	}

	componentDidMount() {
		// 
	}

	componentWillUnmount() {
		
	}

	tick() {
		this.setState((prevState, props) => {
			return {time : new Date().toLocaleTimeString()}
		});
	}

	runTimer() {
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	clearTimer() {		
		clearInterval(this.timerId);
		this.timerId = undefined;
	}

	toggleCounting(e) {

		if (!this.timerId) {
			this.runTimer();
		} else {
			this.clearTimer();
		}

		this.setState((prev, props) => {
			return { isCounting: !prev.isCounting }
		});
	}

	render() {
		return (<div> 
			Current time: {this.state.time} 
			<div>
				<button onClick={(e) => this.toggleCounting(e)}>
					{ this.state.isCounting ? "Stop" :"Start" }
				</button>
			</div>
			</div>);
	}
}

export default Counter;