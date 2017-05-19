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
	
	newAttack: function(weapon) {
		this.setState((previousState, currentProps) => {
			var descriptions = new Map(previousState.descriptions);
			var attack = AttackFactory.getAttack(weapon);
			attack.key = previousState.nextDescriptionKey;
			descriptions.set(previousState.nextDescriptionKey, attack);
			return {
				nextDescriptionKey: previousState.nextDescriptionKey + 1,
				descriptions: descriptions,
			};
		});
	},
	reRollDescription: function(descriptionKey) {
		var newDescription = AttackFactory.getAttack(Weapons.Scimitar);
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
		var newParts = Object.assign([], this.state.descriptions.get(descriptionKey).parts);
		newParts[partKey] = Object.assign(Object.assign({}, newParts[partKey]), {
		            text: newParts[partKey].reroll(),
		        });
		var newDescription = {
			key: descriptionKey,
			parts: newParts,
		}
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
			<WeaponList newAttack={this.newAttack}>{Object.keys(Weapons).map(key => Weapons[key])}</WeaponList>
			<DescripionsRenderer reRollDescription={this.reRollDescription} reRollDescriptionPart={this.reRollDescriptionPart} >{[...this.state.descriptions.values()]}</DescripionsRenderer>
		</div>;
	}
});

ReactDOM.render(
	<Roller />,
	document.getElementById('content')
);
