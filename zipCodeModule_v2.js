const data = require('./zips.json');

//lookup by zip code
module.exports.lookupByZipCode =  (zip) => {
   
   const zipCode = data.find( value => value._id === zip)
   return zipCode;
       
};


//get population
module.exports.getPopulationByState = (state) => {
   const statePop = data.filter(value => {
      return (value.state === state)
   
   }).reduce((sum, value) => {
      return (sum + value.pop)
   }, 0)

   return {'state': state,
            'pop': statePop
   };
}


//lookup by city state 
module.exports.lookupByCityState = (city, state) => {
   const cityState = data.filter(value => {
      return (value.city === city && value.state === state)
   
   }).map(value => {
      return {
         'zip': value._id,
         'pop': value.pop
      }
   })
      
   return {
      'city': city,
      'state': state,
      'data': cityState
   };
};


