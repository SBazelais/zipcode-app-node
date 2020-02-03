const colors = require('colors');

const ZipCodeEmitter = require('./zipCodeEmitter').ZipCodeEmitter;

const cities = new ZipCodeEmitter();

//look up by zip code
cities.on ('lookUpByZipCode', (args) => {
    console.log('Event lookupByZipCode raise! \n', args)
})

cities.emit('lookUpByZipCode', cities.lookupByZipCode('01001'))


//get population
cities.on ('getPopulationByState', (args) => {
    console.log('Event getPopulationByState raise! \n', args)
})

cities.emit('getPopulationByState', cities.getPopulationByState('MA'))


//look up by city & state
cities.on ('lookupByCityState', (args) => {
    console.log('Event lookupByZipCode raise!',);
    console.log({'city': args.city, 'state': args.state, 'data': '[Array]'
    });
    args.handled = true;
})

cities.on ('lookupByCityState', (args) => {
    if (args.handled)
    console.log('\nEvent lookupByZipCode raise! \n', args.city, args.state, args.data);
    
})

cities.emit('lookupByCityState', cities.lookupByCityState('BOSTON','MA'))





