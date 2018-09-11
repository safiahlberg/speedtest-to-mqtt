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
const deviceModule = require('aws-iot-device-sdk').device;

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
module.exports = {
  processData: function (args) {

const device = deviceModule(config.amazonaws);

device
  .on('connect', function() {
    console.log('connect');
    // device.subscribe('topic_1');
    device.publish('speedtest', JSON.stringify(args));
  });

device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });

device
  .on('error', function(error) {
    console.log('error', error);
  });

device
  .on('reconnect', function() {
    console.log('reconnect');
  });

device
  .on('close', function() {
      console.log('close');  
  });

device
  .on('message', function(topic, payload) {
      console.log('message', topic, payload.toString());
   });

   }
   }