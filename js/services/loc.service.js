function getLocs() {
    getPosition()
        .then(pos => {
            console.log(pos);
        })
}



function getPosition() {

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}


function copyUrl(pos) {
    console.log(pos);

    var url = `https://dalitsa.github.io/travel-tip-proj/?lat=${pos.adressCordinates.lat}&lng=${pos.adressCordinates.lng}`;
    navigator.clipboard.writeText(url);
    console.log(url);
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}



export default {
    getLocs,
    getPosition,
    copyUrl
}