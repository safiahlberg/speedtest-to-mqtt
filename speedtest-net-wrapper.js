var config = require('./config');

var speedTest = require('speedtest-net');
var test = speedTest(config.speedtestNet);

var aws = require('./aws-iot-mqtt-wrapper');

test.on('data', data => {
  console.dir(data);
  aws.processData(data);
});

test.on('error', err => {
  console.error(err);
});
