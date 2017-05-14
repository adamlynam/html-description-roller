var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		var descriptionCss = {
		};
		return <div style={descriptionCss}><a href="'#" title="Change this part">{this.props.children.description}</a></div>
	}
});
