const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN, host: 'api.jacobb.us', port: 80});
/**
* An HTTP endpoint that acts as a webhook for Slack message.mpim event
* @param {object} event Slack message.mpim event body (raw)
* @returns {object} workflow The result of your workflow steps
*/
module.exports = async (event) => {

  // Prepare workflow object to store API responses
  
  let workflow = {};
  
  // [Workflow Step 1]
  
  console.log(`Running slack.conversations[@0.0.5].info()...`);
  
  workflow.channel = await lib.slack.conversations['@0.0.5'].info({
    id: `${event.event.channel}`
  });
  
  // [Workflow Step 2]
  
  console.log(`Running slack.users[@0.3.20].retrieve()...`);
  
  workflow.user = await lib.slack.users['@0.3.20'].retrieve({
    user: `${event.event.user}`
  });
  
  // [Workflow Step 3]
  
  console.log(`Running enrichments.company[@0.0.2].find()...`);
  
  workflow.company = await lib.enrichments.company['@0.0.2'].find({
    domain: `stdlib.com`
  });

  return workflow;
};
