# speedtest-to-mqtt
A small project that posts data from speedtest to AWS via MQTT

You need to have node installed.
You need to install simple-node-logger https://www.npmjs.com/package/simple-node-logger
You need to install speedtest-net https://www.npmjs.com/package/speedtest-net
You need to install aws-iot-device-skd-js https://github.com/aws/aws-iot-device-sdk-js

Crontab example
*/10 * * * *	sh /home/pi/speedtest-to-mqtt/run.sh

Sample JSON from Speedtest

```javascript
{
  "speeds": {
    "download": 13.02,
    "upload": 0.795,
    "originalDownload": 1433908,
    "originalUpload": 87205
  },
  "client": {
    "ip": "nnn.nnn.nnn.nnn",
    "lat": 57.3867,
    "lon": 18.2037,
    "isp": "Telia Company",
    "isprating": 3.7,
    "rating": 0,
    "ispdlavg": 0,
    "ispulavg": 0,
    "country": "SE"
  },
  "server": {
    "host": "speedtest.nordu.net",
    "lat": 59.3293,
    "lon": 18.0685,
    "location": "Stockholm",
    "country": "Sweden",
    "cc": "SE",
    "sponsor": "NORDUnet A/S",
    "distance": 216.15,
    "distanceMi": 134.31,
    "ping": 66.1,
    "id": "14200"
  }
}
```
