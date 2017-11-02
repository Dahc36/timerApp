let React = require('react');
let Navigation = require('Navigation');

let Main = (props) => {
	return (
		<div>
			<Navigation/>
			<div>
				<div>
					<p>Main.jsx Rendered</p>
					{props.children}
				</div>
			</div>
		</div>
	);
};

module.exports = Main;