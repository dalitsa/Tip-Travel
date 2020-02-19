'use strict'

const W_API_KEY = '0c571faa7a3e523b2ae2c543194aeadb';

var lat= 40.7128;
var lon= 74.0060;



function getWeather(lat,lon) {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${W_API_KEY}`)
        // .then(res => res.data.result)
        .then(res => {
            var weatherInfo = res.data;
            console.log(weatherInfo)
            // localStorage.countryId = JSON.stringify(Object.keys(dataOfCountry));
            // localStorage.setItem('countryId', JSON.stringify(dataOfCountry))
            return weatherInfo;

        })
}

export default  {
    getWeather : getWeather
} 
