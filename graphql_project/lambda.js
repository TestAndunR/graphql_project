const udith = require('sample-layer-udith');


exports.handler = function(event, context, callback) {
    udith.getWeatherByCity("galle")
        .then(data => console.log(data))
        .catch(err => console.log)
    
    callback(null, {"message": "Successfully executed"});
}