var apiKEY = '2149febe993de9d5d23486b0f170b849';
var city = document.getElementsByClassName("search-input");
var weather= 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=' + apiKEY;
var forecast = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=' + apiKEY;

var callback = 'https://api.openweathermap.org/data/2.5/weather?&q=dallas';

fetch(callback + `&appid=${apiKEY}`).then(function(response){
    return response.json();
})