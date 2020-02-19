'use strict'

const W_API_KEY = '0c571faa7a3e523b2ae2c543194aeadb';

var lat = 40.7128;
var lon = 74.0060;



function getWeather(lat, lan) {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lan}&units=metric&units=metric&APPID=${W_API_KEY}`)
        // .then(res => res.data.result)
        .then(res => {
            var weathInfo = res.data;
            var weathObj = setWaethObj(weathInfo)
            console.log(weathInfo)
                // renderWeather(weathObj);
            return weathObj;
        })

}

function setWaethObj(weathInfo) {
    var wind = weathInfo.wind.speed;
    var temp = weathInfo.main.temp
    var location = weathInfo.name;
    var icon = weathInfo.weather[0].icon

    var weathObj = {
        wind,
        temp,
        location,
        icon
    }
    return weathObj;

}




export default {
    getWeather: getWeather,

}