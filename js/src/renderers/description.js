var React = require('react');
var ReactDOM = require('react-dom');

var DescriptionPartRenderer = require('./description-part');

module.exports = React.createClass({
	render: function() {
		var descriptionCss = {
			position: "relative",
			margin: "5px",
			padding: "5px",
			width: "400px",
			backgroundColor: "#eeeeee",
			border: "1px solid #000000",
		};
		var rerollDescriptionCss = {
			position: "absolute",
			top: "5px",
			right: "5px",
		};
		var rerollDescriptionLinkCss = {
			textDecoration: "none",
		}
		return <div style={descriptionCss}>{this.props.children.parts.map(part => {
		    return <DescriptionPartRenderer key={part.key} reRollDescriptionPart={this.props.reRollDescriptionPart} descriptionKey={this.props.children.key}>{part}</DescriptionPartRenderer>
		})}
			<span style={rerollDescriptionCss}> <a style={rerollDescriptionLinkCss} href="#" onClick={() => {this.props.reRollDescription(this.props.children.key)}}>↻</a></span>
		</div>
	}
});
