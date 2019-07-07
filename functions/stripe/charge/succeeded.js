const lib = require('lib');

module.exports = async (context) => {
  let x = await lib.airtable.records.query();
  return context.params;
};
