const lib = require('lib');

module.exports = (context) => {
  let x = await lib.airtable.records.query();
  return context.params;
};
