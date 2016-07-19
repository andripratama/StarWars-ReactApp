var Fetch = require('whatwg-fetch');
var baseUrl = 'http://swapi.co/api';

var service = {
    get: function(url) {
        console.log("making request");
        return fetch(baseUrl + url)
        .then(function(response) {
            console.log("Rest", response);
            return response.json();
        });
    }
};

module.exports = service;