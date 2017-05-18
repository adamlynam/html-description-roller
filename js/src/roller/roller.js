module.exports = {
	selectFromList(list) {
		return list[Math.floor(Math.random()*list.length)];
	}
}