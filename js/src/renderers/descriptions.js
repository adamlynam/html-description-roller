var React = require('react');
var ReactDOM = require('react-dom');

var DescriptionRenderer = require('./description');

module.exports = React.createClass({
	render: function() {
		var descriptionsCss = {
		};
		console.log(this.props.children);
		return <div style={descriptionsCss}>{this.props.children.map(description => {
		    return <DescriptionRenderer key={description.key} reRollDescription={this.props.reRollDescription} reRollDescriptionPart ={this.props.reRollDescriptionPart}>{description}</DescriptionRenderer>
		})}</div>
	}
});
