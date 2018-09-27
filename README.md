# speedtest-to-mqtt
A small project that posts data from speedtest to AWS via MQTT

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