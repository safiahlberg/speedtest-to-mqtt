var config = require('./config');

var awsIot = require('aws-iot-device-sdk');

//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts 
// to connect with a client identifier which is already in use, the existing 
// connection will be terminated.
//
/*
var jobs = awsIot.jobs({
   keyPath: <YourPrivateKeyPath>,
  certPath: <YourCertificatePath>,
    caPath: <YourRootCACertificatePath>,
  clientId: <YourUniqueClientIdentifier>,
      host: <YourCustomEndpoint>
});

or in a file config.js as such:

var config = {};

config.amazonaws =
    {
       keyPath: <YourPrivateKeyPath>,
      certPath: <YourCertificatePath>,
        caPath: <YourRootCACertificatePath>,
      clientId: <YourUniqueClientIdentifier>,
          host: <YourCustomEndpoint>
    };

module.exports = config;
*/
var jobs = awsIot.jobs(config.amazonaws);

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
jobs
  .on('connect', function() {
    console.log('connect');
    // jobs.subscribe('topic_1');
    jobs.publish('speedtest', JSON.stringify({ test_data: 1}));    
  });

jobs
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });

jobs
  .on('error', function(error) {
    console.log('error', error);
  });

jobs
  .on('reconnect', function() {
    console.log('reconnect');
  });

jobs
  .on('close', function() {
      console.log('close');  
  });

jobs
  .on('message', function(topic, payload) {
      console.log('message', topic, payload.toString());
   });