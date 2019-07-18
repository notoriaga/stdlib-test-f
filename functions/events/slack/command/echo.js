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
 
  
  // [Workflow Step 3]
  
  console.log(`Running enrichments.company[@0.0.2].find()...`);
  
  workflow.company = await lib.enrichments.company['@0.0.2'].find({
    domain: `stdlib.com`
  });

  return workflow;
};
