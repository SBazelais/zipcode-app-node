const cities = require('./zipCodeModule_v2');
const colors = require('colors');

//look up by zip code
console.log(cities.lookupByZipCode('99999'));

//look up by city and state
console.log(cities.lookupByCityState('BOSTON', 'MA'));

//get population
console.log(cities.getPopulationByState('TX'));


