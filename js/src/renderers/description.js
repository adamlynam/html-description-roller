var React = require('react');
var ReactDOM = require('react-dom');

var DescriptionPartRenderer = require('./description-part');

module.exports = React.createClass({
	render: function() {
		var descriptionCss = {
		};
		return <div style={descriptionCss}>{this.props.children.parts.map(part => {
		    return <DescriptionPartRenderer key={part.key}>{part}</DescriptionPartRenderer>
		})}
			<span> <a href="#" onClick={() => {this.props.rerollDescription(this.props.children.key)}}>↻</a></span>
		</div>
	}
});
