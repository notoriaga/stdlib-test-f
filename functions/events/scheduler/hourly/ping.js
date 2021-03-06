const lib = require('lib')({
	token: process.env.STDLIB_SECRET_TOKEN,
	host: 'api.jacobb.us',
	port: 80
});

/**
* @returns {object} workflow The result of your workflow steps
*/
module.exports = async () => {
	let workflow = {};

	workflow.ping = await lib.slack.channels.messages.create({
		channel: '#general',
		text: 'PING'
	});

	return workflow;
};
