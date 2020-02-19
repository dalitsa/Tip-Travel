function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}


function getPosition() {

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}


function copyUrl(pos) {

    /* Get the text field */
    var text = `https://dalitsa.github.io/Tip-Travel/index.html?${pos.adressCordinates.lat}&${pos.adressCordinates.lng}`
    document.querySelector('.get-url').innerHTML = text
    var copiedUrl = document.querySelector('.get-url')
    console.log(copiedUrl);

    /* Select the text field */
    copiedUrl.select();
    copiedUrl.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");
    /* Alert the copied text */
    alert("Copied the text: " + text.value);
}


export default {
    getLocs,
    getPosition,
    copyUrl
}