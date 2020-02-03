const data = require('./zips.json');

module.exports.lookupByZipCode =  (zip) => {
    for(var i = 0; i < data.length; i++){
        if (data[i]._id === zip){
            console.log(data[i])
        } 

    }
	return undefined;
};


//look up by city state
module.exports.lookupByCityState = (city, state) => {
    var data_1 = [];
    for(var i = 0; i < data.length; i++){
        if ((city === data[i].city) && (state === data[i].state)){      
                info = {'zip':data[i]._id, 'pop': data[i].pop}
                // console.log(info)
                data_1.push(info)        
        }
        
    }
    console.log({
        'city': city,
        'state': state,
        'data': data_1
    })
}   



//get population by state
module.exports.getPopulationByState = (state) => {
    for(var i = 0; i < data.length; i++){
        if (state === data[i].state) {
            var total = 0;
            total += data[i].pop
        }
    }
    console.log({
        'state': state,
        'pop': total
    })
}



