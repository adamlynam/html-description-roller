var React = require('react');
var ReactDOM = require('react-dom');

var DescriptionPartRenderer = require('./description-part');

module.exports = React.createClass({
	render: function() {
		return <div className="description">
			<img src={this.props.children.image} />
			<div className="description-text">{this.props.children.parts.map(part => {
					return <DescriptionPartRenderer key={part.key} reRollDescriptionPart={this.props.reRollDescriptionPart} descriptionKey={this.props.children.key}>{part}</DescriptionPartRenderer>
				})}
			</div>
			<span className="reroller"> <a href="#" onClick={() => {this.props.reRollDescription(this.props.children.key, this.props.children)}}>↻</a></span>
		</div>
	}
});
