var React = require('react');

var Debt = React.createClass({
			render: function() {
				var n = Math.floor(Math.random() * 10 + 1);
				return (<div> Hello, world! Holy moly. I think you owe me ${n}! Yes you do!</div>);
				}
			});

module.exports = Debt;
