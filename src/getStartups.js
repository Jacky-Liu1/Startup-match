var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base('appLYFlyfxERIOvbD');

async function getStartupsFromAirtable() {
  var startups = [];

  const records = await base('Startups').select().all();
  records.forEach(function (record) {
    startups.push(record.fields);
  });

  return startups;
}

async function getStartups() {
  const startups = await getStartupsFromAirtable();
  return startups;
}

export default getStartups;

