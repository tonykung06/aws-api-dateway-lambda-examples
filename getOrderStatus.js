const faker = require('faker')

module.exports = (event, context, callback) => {
	if (!event.orderId) {
		return callback(new Error('missing required arg orderId'), null)
	}
	const order = {
		id: event.orderId,
		name: getName(),
		address: getShippingAddress(),
		city: getShippingCity(),
		state: getShippingState(),
		phone: getPhone(),
		shippingMethod: getShippingMethod(),
		price: getPrice()
	}
	callback(null, order)
}

function getName() {
	return faker.name.findName()
}

function getShippingAddress() {
	return `${faker.address.streetAddress()} ${faker.address.streetName()} ${faker.address.streetSuffix()}`
}

function getShippingCity() {
	return faker.address.city()
}

function getShippingState() {
	return faker.address.state()
}

function getPhone() {
	return faker.phone.phoneNumber()
}

function getShippingMethod() {
	const shippers = ['FedEx', 'UPS', 'USPS', 'DHL']
	return shippers[Math.floor(Math.random() * 4)]
}

function getPrice() {
	return faker.commerce.price()
}