let React = require('react');
let {Link, IndexLink} = require('react-router');

let Navigation = (props) => {
	return (
		<div className="top-bar">
			<div className="top-bar-left">
				<ul className="menu">
					<li className="menu-text">
						React Timer App
					</li>
					<li>
						<IndexLink to="/" activeClassName="active-link">Link 1</IndexLink>
					</li>
					<li>
						<Link to="/asdf" activeClassName="active-link">Link 2</Link>
					</li>
				</ul>
			</div>
			<div className="top-bar-right">
				<ul className="menu">
					<li className="menu-text">
						Creado por Lokohanks
					</li>
				</ul>
			</div>
		</div>
	);
};

module.exports = Navigation;