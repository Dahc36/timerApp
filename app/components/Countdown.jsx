let React = require('react');
let Clock = require('Clock');
let CountdownForm = require('CountdownForm');

let Countdown = React.createClass({
	getInitialState: function(argument) {
		return {
			count: 0,
			countDownStatus: 'stopped'
		}
	},
	componentDidUpdate: function(prevProps,prevState) {
		if(this.state.countDownStatus !== prevState.countDownStatus){
			switch(this.state.countDownStatus){
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					clearInterval(this.timer);
			}
		}
	},
	startTimer: function(){
		this.timer = setInterval(() => {
			let newCount = this.state.count - 1;
			let tempState = {};
			if(newCount < 0){
				tempState.countDownStatus = 'stopped';
			} else {
				tempState.count = newCount;
			}
			this.setState(tempState);
			console.log('Count',newCount,this.state.countDownStatus);
		},1000);
	},
	handleSetCountdown: function(totalSeconds){
		this.setState({
			count: totalSeconds,
			countDownStatus: 'started'
		});
	},
	render: function(){
		let {count} = this.state;
		return (
			<div>
				<Clock totalSeconds={count}/>
				<CountdownForm onSetCountdown={this.handleSetCountdown}/>
			</div>
		);
	}
});

module.exports = Countdown;