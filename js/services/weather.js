'use strict'

const WETHER_API_KEY = '0c571faa7a3e523b2ae2c543194aeadb';



function getWeather(lat,lan) {
    return axios.get(`https://free.currconv.com/api/v7/currencies?apiKey=${API_KEY}`)
        // .then(res => res.data.result)
        .then(res => {
            var dataOfCountry = res.data.result;
            console.log(Object.keys(dataOfCountry))
            // localStorage.countryId = JSON.stringify(Object.keys(dataOfCountry));
            localStorage.setItem('countryId', JSON.stringify(dataOfCountry))
            return Object.keys(dataOfCountry)

        })
}
