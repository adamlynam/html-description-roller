var DamageTypes = require('./damage-types');

var Roller = require('../roller/roller');

module.exports = {
	Scimitar: {
		name: "Scimitar",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Movements);
		},
	}
}