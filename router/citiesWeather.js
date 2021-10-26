const weather = require("./getWeather");
const favourites = require("./favsWeather");

function serverMethods(serv, mongoose) {
    weather(serv);
    favourites(serv, mongoose);
}
module.exports.citiesWeather = serverMethods;