var DamageTypes = require('./damage-types');

var Roller = require('../roller/roller');

module.exports = {
	Club: {
		name: "Club",
		image: "images/weapons/club.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Bludgeoning.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Bludgeoning.Movements);
		},
	},
	Dagger: {
		name: "Dagger",
		image: "images/weapons/dagger.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Movements);
		},
	},
	Greatclub: {
		name: "Greatclub",
		image: "images/weapons/greatclub.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Bludgeoning.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Bludgeoning.Movements);
		},
	},
	Handaxe: {
		name: "Handaxe",
		image: "images/weapons/handaxe.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Movements);
		},
	},
	Javelin: {
		name: "Javelin",
		image: "images/weapons/javelin.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Movements);
		},
	},
	Mace: {
		name: "Mace",
		image: "images/weapons/mace.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Bludgeoning.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Bludgeoning.Movements);
		},
	},
	Quarterstaff: {
		name: "Quarterstaff",
		image: "images/weapons/quaterstaff.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Bludgeoning.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Bludgeoning.Movements);
		},
	},
	Sickle: {
		name: "Sickle",
		image: "images/weapons/sickle.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Movements);
		},
	},
	Spear: {
		name: "Spear",
		image: "images/weapons/spear.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Movements);
		},
	},
	
	Battleaxe: {
		name: "Battleaxe",
		image: "images/weapons/battleaxe.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Movements);
		},
	},
	Flail: {
		name: "Flail",
		image: "images/weapons/flail.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Bludgeoning.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Bludgeoning.Movements);
		},
	},
	Glaive: {
		name: "Glaive",
		image: "images/weapons/glaive.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Movements);
		},
	},
	Greataxe: {
		name: "Greataxe",
		image: "images/weapons/greataxe.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Movements);
		},
	},
	Greatsword: {
		name: "Greatsword",
		image: "images/weapons/greatsword.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Movements);
		},
	},
	Halberd: {
		name: "Halberd",
		image: "images/weapons/halberd.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Movements);
		},
	},
	Lance: {
		name: "Lance",
		image: "images/weapons/lance.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Movements);
		},
	},
	Longsword: {
		name: "Longsword",
		image: "images/weapons/longsword.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Movements);
		},
	},
	Maul: {
		name: "Maul",
		image: "images/weapons/maul.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Bludgeoning.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Bludgeoning.Movements);
		},
	},
	Morningstar: {
		name: "Morningstar",
		image: "images/weapons/morningstar.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Movements);
		},
	},
	Pike: {
		name: "Pike",
		image: "images/weapons/pike.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Movements);
		},
	},
	Rapier: {
		name: "Rapier",
		image: "images/weapons/rapier.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Movements);
		},
	},
	Scimitar: {
		name: "Scimitar",
		image: "images/weapons/scimitar.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Movements);
		},
	},
	Shortsword: {
		name: "Shortsword",
		image: "images/weapons/shortsword.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Movements);
		},
	},
	Trident: {
		name: "Trident",
		image: "images/weapons/trident.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Movements);
		},
	},
	War_Pick: {
		name: "War pick",
		image: "images/weapons/warpick.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Piercing.Movements);
		},
	},
	Warhammer: {
		name: "Warhammer",
		image: "images/weapons/warhammer.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Bludgeoning.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Bludgeoning.Movements);
		},
	},
	Whip: {
		name: "Whip",
		image: "images/weapons/whip.png",
		rollMotion: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Motions);
		},
		rollMovement: function() {
			return Roller.selectFromList(DamageTypes.Slashing.Movements);
		},
	}
}