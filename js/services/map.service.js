export default {
    initMap,
    addMarker,
    panTo
}


var map;


export function initMap(lat, lng) {
    console.log('InitMap');
    return _connectGoogleApi()
        .then(() => {
            console.log('google available');
            map = new google.maps.Map(
                document.querySelector('#map'), {
                    center: { lat, lng },
                    zoom: 15
                })



            console.log('Map!', map);
        })
}

function addMarker(loc) {
    var marker = new google.maps.Marker({
        position: loc,
        map: map,
        title: 'Hello World!'
    });
    return marker;
}

function panTo(lat, lng) {
    console.log(lat, lng);
    var laLatLng = new google.maps.LatLng(lat, lng);
    map.panTo(laLatLng);
}

function _connectGoogleApi() {
    if (window.google) return Promise.resolve()
    const API_KEY = 'AIzaSyAJddtM3kFTKqqZXTKYMBRUQ6DvOipdwZU'
    var elGoogleApi = document.createElement('script');
    elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    elGoogleApi.async = true;
    document.body.append(elGoogleApi);



    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve;
        elGoogleApi.onerror = () => reject('Google script failed to load')
    })
}





function getAdress() {

    if (localStorage.adress) {

        return Promise.resolve(JSON.parse(localStorage.adress))

    }

    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=&key = AIzaSyAKQXGGR_QBCDwE84EuJWpTOhF_fWXMsPw`)
        .then(res => {
            localStorage.adress = JSON.stringify(res.data.results);
            return res.data.results
        })


}