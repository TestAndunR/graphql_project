const udith = require('opt/sample-layer-udith/index.js');


exports.handler = function(event, context, callback) {
    udith.getWeatherByCity("galle")
        .then(data => console.log(data))
        .catch(err => console.log)
    
    callback(null, {"message": "Successfully executed"});
}