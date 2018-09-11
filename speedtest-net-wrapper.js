var config = require('./config');

var speedTest = require('speedtest-net');
var test = speedTest(config.speedtestNet);

test.on('data', data => {
  console.dir(data);
});

test.on('error', err => {
  console.error(err);
});
