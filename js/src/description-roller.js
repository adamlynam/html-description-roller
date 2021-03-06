var React = require('react');
var ReactDOM = require('react-dom');

var Weapons = require('./data/weapons');
var AttackFactory = require('./attacks/attack-generator');

var WeaponList = require('./renderers/weapon-list');
var DescripionsRenderer = require('./renderers/descriptions');

var Roller = React.createClass({
	getInitialState: function() {
		return {
			nextDescriptionKey: "1",
			descriptions: new Map(),
		};
	},
	
	newAttackDescription: function(weapon) {
		this.setState((previousState, currentProps) => {
			var descriptions = new Map(previousState.descriptions);
			var newDescription = AttackFactory.getAttack(weapon);
			newDescription.key = previousState.nextDescriptionKey;
			descriptions.set(previousState.nextDescriptionKey, newDescription);
			return {
				nextDescriptionKey: previousState.nextDescriptionKey + 1,
				descriptions: descriptions,
			};
		});
	},
	reRollDescription: function(descriptionKey, existingDescription) {
		var newDescription = existingDescription.reroll();
		newDescription.key = descriptionKey;
		this.setState((previousState, currentProps) => {
			var descriptions = new Map(previousState.descriptions);
			descriptions.set(descriptionKey, newDescription);
			return {
				descriptions: descriptions,
			};
		});
	},
	reRollDescriptionPart: function(descriptionKey, partKey) {
		var existingDescription = this.state.descriptions.get(descriptionKey);
		var newParts = Object.assign([], existingDescription.parts);
		newParts[partKey] = Object.assign(Object.assign({}, newParts[partKey]), {
		            text: newParts[partKey].reroll(),
		        });
		var newDescription = Object.assign(Object.assign({}, existingDescription), {
		            parts: newParts,
		        });
		this.setState((previousState, currentProps) => {
			var descriptions = new Map(previousState.descriptions);
			descriptions.set(descriptionKey, newDescription);
			return {
				descriptions: descriptions,
			};
		});
	},
	
	render: function() {
		return <div>
			<WeaponList newAttack={this.newAttackDescription}>{Object.keys(Weapons).map(key => Weapons[key])}</WeaponList>
			<DescripionsRenderer reRollDescription={this.reRollDescription} reRollDescriptionPart={this.reRollDescriptionPart} >{[...this.state.descriptions.values()]}</DescripionsRenderer>
		</div>;
	}
});

ReactDOM.render(
	<Roller />,
	document.getElementById('content')
);
