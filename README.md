# node-weather
Node.js getting current time and weather for those locations

General

This project includes node.js command line application which accept comma seperated list of cities over world, details of which are logged on console window for each city.

Input

$ node ./weather.js -c London,Mumbai,Sydney,Tokyo

OutPut

Current date and time in London is 2019-04-29T18:32:53+01:00
Temperature and Weather in London recorded at 2019-04-29T17:28:33.000Z
{ temp: 287.31,
  pressure: 1025,
  humidity: 54,
  temp_min: 285.93,
  temp_max: 288.71 }
Wind - {"speed":3.1,"deg":90}
Clouds - {"all":65}
Current date and time in Mumbai is 2019-04-29T23:02:53+05:30
Temperature and Weather in Mumbai recorded at 2019-04-29T17:00:00.000Z
{ temp: 302.15,
  pressure: 1008,
  humidity: 79,
  temp_min: 302.15,
  temp_max: 302.15 }
Wind - {"speed":2.6,"deg":290}
Clouds - {"all":0}
Current date and time in Tokyo is 2019-04-30T02:32:53+09:00
Temperature and Weather in Tokyo recorded at 2019-04-29T17:28:52.000Z
{ temp: 286.97,
  pressure: 1017,
  humidity: 93,
  temp_min: 284.82,
  temp_max: 288.71 }
Wind - {"speed":4.41,"deg":161.635}
Clouds - {"all":90}
Current date and time in Sydney is 2019-04-30T04:02:53+10:30
Temperature and Weather in Sydney recorded at 2019-04-29T17:30:07.000Z
{ temp: 286.88,
  pressure: 1022,
  humidity: 87,
  temp_min: 284.82,
  temp_max: 289.15 }
Wind - {"speed":2.6,"deg":350}
Clouds - {"all":40}

Installation

1. Create a folder with name node-weather on drive
3. Make sure you have npm and node server installed
2. Clone then given repo
3. Download necessary packages if missing
4. Run the project from command line from same folder where repo is cloned.

   $ node ./weather.js -c London,Mumbai,Sydney,Tokyo

NPM package dependencies:
1. Openweather-Node
2. yargs
3. country-timezone
4. moment-timezone
