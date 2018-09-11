var awsIot = require('aws-iot-device-sdk');

//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts 
// to connect with a client identifier which is already in use, the existing 
// connection will be terminated.
//
var device = awsIot.device({
   keyPath: 'keys/f45d538c35-private.pem.key',
  certPath: 'keys/f45d538c35-certificate.pem.crt',
    caPath: 'keys/verisign-CA.pem',
    region: 'eu-central-1',
  clientId: 'raspi1',
 thingName: 'raspi1',
      host: 'aynb80k008y2w.iot.eu-central-1.amazonaws.com',
     debug: true
});

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
device
  .on('connect', function() {
    console.log('connect');
    // device.subscribe('topic_1');
    device.publish('speedtest', JSON.stringify({ test_data: 1}));
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