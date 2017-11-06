let React = require('react');
let Clock = require('Clock');
let CountdownForm = require('CountdownForm');

let Countdown = React.createClass({
	getInitialState: function(argument) {
		return {
			count: 0
		}
	},
	handleSetCountdown: function(totalSeconds){
		this.setState({
			count: totalSeconds
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