const cities = require('./zipCodeModule_v1');
const colors = require('colors');

//look up using zip code
cities.lookupByZipCode('99999');

//look up by city and state
cities.lookupByCityState('BOSTON', 'TX');

//get population by state
cities.getPopulationByState('MA')


