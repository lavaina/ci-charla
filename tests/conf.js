// conf.js
var params = require("rc")("lv"); // parse arguments into a object

var config = {
  specs: ['search/*spec.js'],
  multiCapabilities: [] // To run more than one browser at time
};

// Add sauce credentials if we send the sauce flag
if(params.sauce){
  config.sauceUser = "spacejamio";
  config.sauceKey = "86926832-e8b8-4402-a562-f4a6dc2a3049";
}

// Add internet explorer
if(params.ie || params.all){
  config.multiCapabilities.push({
    browserName:"internet explorer"
  })
}

// Add firefox
if(params.firefox || params.all){
  config.multiCapabilities.push({
    browserName:"firefox"
  });
}

// Add chrome
if(params.chrome || config.multiCapabilities.length === 0 || params.all){
  config.chromeOnly = true; // Only run chrome browser
  config.multiCapabilities.push({
    browserName:"chrome"
  })
}

exports.config = config;