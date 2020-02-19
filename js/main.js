console.log('Main!');

import locService from './services/loc.service.js'
import mapService from './services/map.service.js'
import weathService from './services/weather.js'


locService.getLocs()
    .then(locs => console.log('locs', locs))

window.onload = () => {
    weathService.getWeather(40.7128,74.0060);
    locService.getPosition()

        .then(pos => {
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

document.querySelector('.btn').addEventListener('click', (ev) => {
    
    console.log('Aha!', ev.target);
    locService.getPosition()
        .then(pos => {
            console.log(pos);
            mapService.panTo(pos.coords.latitude, pos.coords.longitude);
        })
})