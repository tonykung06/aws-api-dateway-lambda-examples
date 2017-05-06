const faker = require('faker')

module.exports = (event, context, callback) => {
	const inventory = []
	var i;
	for (i = 0; i < 10; i++) {
		const shoeType = getShoeType()
		inventory.push({
			name: getShoeName(shoeType),
			color: getShoeColor(),
			description: getShoeDescription(shoeType),
			size: getShoeSize(),
			price: getShoePrice()
		})
	}
	callback(null , inventory)
}

function getShoeName(shoeType) {
	return `${faker.company.catchPhraseNoun()}` +
			` ${faker.company.catchPhraseDescriptor()} ${shoeType}`
}

function getShoeColor() {
	return faker.commerce.color()
}

function getShoeDescription(shoeType) {
	return `A(n) ${faker.commerce.productAdjective()},` +
			` ${faker.commerce.productAdjective()} ${shoeType}` +
			` made from the finest ${faker.commerce.productMaterial()}` +
			` designed for the ${faker.company.bsBuzz()} individual!`
}

function getShoeSize() {
	return rand(1, 13)
}

function getShoePrice() {
	return faker.commerce.price()
}

function getShoeType() {
	return [
		'running shoe',
		'cross-training shoe',
		'tennis shoe',
		'basketball shoe',
		'aerobic shoe',
		'spinnig shoe'
	][rand(0, 5)]
}

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}