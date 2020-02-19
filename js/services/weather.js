'use strict'

const W_API_KEY = '0c571faa7a3e523b2ae2c543194aeadb';

var lat = 40.7128;
var lon = 74.0060;



function getWeather(lat, lon) {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${W_API_KEY}`)
        // .then(res => res.data.result)
        .then(res => {
            var weathInfo = res.data;
            var wind=weathInfo.wind.speed;
            var 
            console.log(`wind:${wind}`)
            console.log(weathInfo)
            renderwether(wind);
            return weathInfo;
        })
        
}


function renderwether(wind) {

    var strHTML = `<h3 class="weathHeader" >Weather Today</h3>
    <h2 class="location" ></h2>
    <h3 class="tempAndwind">temp wind${wind}</h3>
    `
    var currWeather=document.querySelector(`.wether`);
    currWeather=strHTML;
}



export default {
    getWeather: getWeather,
    renderwether: renderwether
}



