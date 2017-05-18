var React = require('react');
var ReactDOM = require('react-dom');

var Weapons = require('./data/weapons');
var AttackFactory = require('./attacks/attack-generator');

var DescripionsRenderer = require('./renderers/descriptions');

var Roller = React.createClass({
	getInitialState: function() {
		return {
			nextAttackKey: "1",
			attacks: new Map(),
		};
	},
	
	newAttack: function() {
		this.setState((previousState, currentProps) => {
			var attacks = new Map(previousState.attacks);
			var attack = AttackFactory.getAttack(Weapons.Scimitar);
			attack.key = previousState.nextAttackKey;
			attacks.set(previousState.nextAttackKey, attack);
			return {
				nextAttackKey: previousState.nextAttackKey + 1,
				attacks: attacks,
			};
		});
	},
	reRollAttack: function(attackKey) {
		var newAttack = AttackFactory.getAttack(Weapons.Scimitar);
		newAttack.key = attackKey;
		this.setState((previousState, currentProps) => {
			var attacks = new Map(previousState.attacks);
			attacks.set(attackKey, newAttack);
			return {
				attacks: attacks,
			};
		});
	},
	
	render: function() {
		return <div>
			<input type="button" onClick={this.newAttack} value="New Scimitar Attack" />
			<DescripionsRenderer rerollDescription={this.reRollAttack} >{[...this.state.attacks.values()]}</DescripionsRenderer>
		</div>;
	}
});

ReactDOM.render(
	<Roller />,
	document.getElementById('content')
);
