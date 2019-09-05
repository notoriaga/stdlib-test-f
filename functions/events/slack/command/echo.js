const lib = require('lib')({
	token: process.env.STDLIB_SECRET_TOKEN,
	host: 'api.jacobb.us',
	port: 80
});

/**
* @param {object} event
* @returns {object} workflow
*/
module.exports = async event => {
	let workflow = {};

	return workflow;
};
