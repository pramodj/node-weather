const weather = require("Openweather-Node")
const argv = require('yargs').argv
const countryTimezone = require("country-timezone")
const moment = require('moment-timezone');
const apiKey = '71d17b4e3f1bfd35f72002288d37e42b'

//set your API key if you have one
weather.setAPPID(apiKey)
//set the culture
weather.setCulture("fr")
//set the forecast type
weather.setForecastType("daily")

try {
	//Convert command line , seperated arguments to array
	const cities = argv.c.split(',')
	//Location can be id, city name or coordinate ([lat,lon])
	weather.now(cities,function(err, datas){
		if(err) console.log(err)
		else
		{
			datas.forEach(async function(aData){
				try {
					//Set timezone provided by country code
					const timezonesWithCode = await countryTimezone.getTimezonesWithCountryCode(aData.values.sys.country)
					const dt = new Date(parseInt(aData.values.dt+'000')).toISOString()
					//Set current date on which server is running which is converted to other time zone country
					const currentdt = await moment.tz(Date.now(), timezonesWithCode[0]).format()
					console.log('Current date and time in ' + aData.values.name + ' is ' + currentdt)
					console.log('Temperature and Weather in ' + aData.values.name + ' recorded at ' + dt)
					//Get temp,pressure,humidity
					console.log(aData.values.main)
					//Get wind speed and degree
					console.log('Wind - ' + JSON.stringify(aData.values.wind))
					//Get cloud details
					console.log('Clouds - ' + JSON.stringify(aData.values.clouds))
				}
				catch(err){
				  console.log(err.name + ' : ' + err.message);
				}
			})
		}
		})
	}
catch(err){
  console.log(err.name + ' : ' + err.message);
}