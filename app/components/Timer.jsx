let React = require('react');
let Clock = require('Clock');
let Controls = require('Controls');

let Timer = React.createClass({
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
			let newCount = this.state.count + 1;
			let tempState = {};
			tempState.count = newCount;
			this.setState(tempState);
			// console.log('Count',newCount,this.state.countdownStatus);
		},1000);
	},
	handleStatusChange: function(newStatus){
		this.setState({
			countdownStatus: newStatus
		});
	},
	render: function(){
		let {count,countdownStatus} = this.state;
		return (
			<div>
				<Clock totalSeconds={count}/>
				<Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
			</div>
		);
	}
});

module.exports = Timer;