const log = require('simple-node-logger').createSimpleLogger();

var config = require('./config');

var speedTest = require('speedtest-net');
var test = speedTest(config.speedtestNet);

var aws = require('./aws-iot-mqtt-wrapper');

test.on('data', data => {
    data.timestamp = +new Date();
    log.info(
        'Speedtest performed. Download: ', data.speeds.download,
        ', Upload: ', data.speeds.upload,
        ' Ping: ', data.server.ping);
    aws.processData(data);
});

test.on('error', err => {
    log.error(err);
});