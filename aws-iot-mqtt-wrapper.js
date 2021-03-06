const log = require('simple-node-logger').createSimpleLogger();

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

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//

var processData = function(data) {

    const jobs = awsIot.device(config.amazonaws);

    jobs
        .on('connect', function() {
            log.info('AWS IOT connect.');
            jobs.publish('speedtest', JSON.stringify(data), function(err) {
                // console.log('error', err);
                jobs.end();
            });
        });

    jobs
        .on('message', function(topic, payload) {
            log.info('message', topic, payload.toString());
        });

    jobs
        .on('error', function(error) {
            log.error('error', error);
        });

    jobs
        .on('reconnect', function() {
            log.info('reconnect');
        });

    jobs
        .on('close', function() {
            log.info('close')
        });

};


module.exports.processData = processData;

if (require.main === module) {
    processData({
        timestamp: +new Date(),
        test: 'aws-iot-mqtt-wrapper'
    });
}