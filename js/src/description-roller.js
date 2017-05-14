var React = require('react');
var ReactDOM = require('react-dom');

var AttackFactory = require('./attacks/attack-generator');

var DescripionsRenderer = require('./renderers/descriptions');

var Roller = React.createClass({
	getInitialState: function() {
		return {
			nextAttackKey: "1",
			attacks: new Set(),
		};
	},
	
	rollAttack: function() {
		this.setState((previousState, currentProps) => {
			var attacks = new Set(previousState.attacks);
			var attack = AttackFactory.getAttack();
			attack.key = previousState.nextAttackKey;
			attacks.add(attack);
			return {
				nextAttackKey: previousState.nextAttackKey + 1,
				attacks: attacks,
			};
		});
	},
	
	render: function() {
		return <div>
			<input type="button" onClick={this.rollAttack} value="Roll Attack" />
			<DescripionsRenderer>{this.state.attacks}</DescripionsRenderer>
		</div>;
	}
});

ReactDOM.render(
	<Roller />,
	document.getElementById('content')
);
