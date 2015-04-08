// conf.js
var params = require("rc")("lv"); // parse arguments into a object

var config = {
  specs: ['search/*spec.js']
};

// Add sauce credentials if we send the sauce flag
if(params.sauce){
  config.sauceUser = "spacejamio";
  config.sauceKey = "86926832-e8b8-4402-a562-f4a6dc2a3049";
}

exports.config = config;