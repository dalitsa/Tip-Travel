console.log('Main!');

import locService from './services/loc.service.js'
import mapService from './services/map.service.js'
import weathService from './services/weather.js'


window.onload = () => {

    locService.getPosition()
        .then(pos => {
            weathService.getWeather(pos.coords.latitude, pos.coords.longitude)
                .then(weathObj => {
                    renderWeather(weathObj)
                })


            mapService.initMap(pos.coords.latitude, pos.coords.longitude)
                .then(() => {
                    mapService.addMarker({ lat: pos.coords.latitude, lng: pos.coords.longitude });
                    mapService.panTo(pos.coords.latitude, pos.coords.longitude)
                })
        })
        .catch(err => {
            console.log('err!!!', err);
        })

        .catch(err => {
            console.log('INIT MAP ERROR', err)
        });

}

document.querySelector('.btn-center-user').addEventListener('click', (ev) => {

    console.log('Aha!', ev.target);
    locService.getPosition()
        .then(pos => {
            console.log(pos);
            mapService.panTo(pos.coords.latitude, pos.coords.longitude);
        })
})

function renderWeather(weathObj) {
    console.log(weathObj);
    var strHTML = `<h3 class="weathHeader" >Weather Today</h3>
    <img class="icon" src="http://openweathermap.org/img/wn/${weathObj.icon}@2x.png" >
    <div class="flex space-between desc-line" > 
        <h4 class="loc-line" >${weathObj.location},   ${weathObj.country}</h4>
        <img class="flag" src="https://www.countryflags.io/${weathObj.country}/flat/64.png">
        <h4 class="weathDesc" >${weathObj.desc} </h4>
    </div>
    <h5 class="tempAndwind"> <span class="temp"> ${weathObj.temp}&#x2103</span>  
                temp from ${weathObj.tempMin} to ${weathObj.tempMax}&#x2103  wind : ${weathObj.wind}m/s </h5>
    `
    var currWeather = document.querySelector(`.weather`);
    currWeather.innerHTML = strHTML;
}


document.querySelector('.btn-get-adress').addEventListener('click', (ev) => {
    getAdressLiteral()
})


function getAdressLiteral() {
    const adressLiteral = document.querySelector('.search-input').value
    mapService.getAdress(adressLiteral)
        .then(res => onMoveToLocation(res))

}


function onMoveToLocation(res) {
    weathService.getWeather(res.adressCordinates.lat, res.adressCordinates.lng)
        .then(weathObj => {
            renderWeather(weathObj)
        })
    mapService.panTo(res.adressCordinates.lat, res.adressCordinates.lng)
    mapService.addMarker({ lat: res.adressCordinates.lat, lng: res.adressCordinates.lng });
    popCurrLocationName(res.adressLiteral)
    locService.copyUrl(res)

}



function popCurrLocationName(adress) {
    const strHTML = `<div class = "location"> Location : ${adress} </div>`
    document.querySelector('.location-literal').innerHTML = strHTML

}

document.querySelector('.copy-url').addEventListener('click', (ev) => {
    locService.copyUrl()
})