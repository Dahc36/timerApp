let React = require('react');
let Clock = require('Clock');
let Controls = require('Controls');
let CountdownForm = require('CountdownForm');

let Countdown = React.createClass({
	getInitialState: function(argument) {
		return {
			count: 0,
			countdownStatus: 'stopped'
		}
	},
	componentWillUnmount: function(){
		clearInterval(this.timer);
		this.timer = undefined;
	},
	componentDidUpdate: function(prevProps,prevState) {
		if(this.state.countdownStatus !== prevState.countdownStatus){
			switch(this.state.countdownStatus){
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({
						count: 0
					});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},
	startTimer: function(){
		this.timer = setInterval(() => {
			let newCount = this.state.count - 1;
			let tempState = {};
			if(newCount < 0){
				tempState.countdownStatus = 'stopped';
			} else {
				tempState.count = newCount;
			}
			this.setState(tempState);
			console.log('Count',newCount,this.state.countdownStatus);
		},1000);
	},
	handleSetCountdown: function(totalSeconds){
		this.setState({
			count: totalSeconds,
			countdownStatus: 'started'
		});
	},
	handleStatusChange: function(newStatus){
		this.setState({
			countdownStatus: newStatus
		});
	},
	render: function(){
		let {count,countdownStatus} = this.state;
		let renderFormControls = () => {
			if(countdownStatus === 'started' || countdownStatus === 'paused'){
				return (<Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>);
			} else if(countdownStatus === 'stopped'){
				return (<CountdownForm onSetCountdown={this.handleSetCountdown}/>);
			}
		};
		return (
			<div>
				<Clock totalSeconds={count}/>
				{renderFormControls()}
			</div>
		);
	}
});

module.exports = Countdown;