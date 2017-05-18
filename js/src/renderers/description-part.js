var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		if (this.props.children.reroll != undefined) {
			return <span><a href="#" title="Reroll this part" onClick={this.props.children.reroll}>{this.props.children.text}</a></span>
		}
		
		return <span>{this.props.children.text}</span>
	}
});
