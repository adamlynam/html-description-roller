module.exports = {
	getAttack: function(weapon) {
		return {
			image: weapon.image,
			parts: [{
				key: 0,
				text: "You ",
				reroll: undefined,
			},{
				key: 1,
				text: weapon.rollMotion() + " ",
				reroll: weapon.rollMotion
			},
			{
				key: 2,
				text: "your ",
				reroll: undefined,
			},
			{
				key: 3,
				text: weapon.name + " ",
				reroll: undefined,
			},{
				key: 4,
				text: weapon.rollMovement(),
				reroll: weapon.rollMovement
			}],
			reroll: function() {
				return module.exports.getAttack(weapon);
			},
		};
	}
}