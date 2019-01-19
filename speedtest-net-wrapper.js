const log = require('simple-node-logger').createSimpleLogger();

var config = require('./config');

var speedTest = require('speedtest-net');
var test = speedTest(config.speedtestNet);

var aws = require('./aws-iot-mqtt-wrapper');

test.on('data', data => {
    data.timestamp = +new Date();
    // console.log('Speedtest performed: ' + JSON.stringify(data));
    // console.log('Speedtest performed');
    log.info('Speedtest performed at: ', new Date(parseInt(data.timestamp)).toJSON());
    aws.processData(data);
});

test.on('error', err => {
    // console.error(err);
    log.error(err);
});