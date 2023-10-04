var apiKEY = '2149febe993de9d5d23486b0f170b849';
var cityButton = document.getElementById("search-button");
var cityEnter = document.getElementById("search-input");
var weatherImg = document.getElementById("city-img");

var weather = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=' + apiKEY;

var forecast = "api.openweathermap.org/data/2.5/forecast?";

var callback = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";



function checkWeather(cityEnter) {
    //console.log(cityEnter);
    //console.log(callback + cityEnter + `&appid=${apiKEY}`);

    fetch(callback + cityEnter + `&appid=${apiKEY}`)
        .then(function(response) {
            //console.log(response);
            return response.json();
    })
        .then(function(data) {
            console.log(data);
            document.querySelector(".city-name").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = "Temp : " + Math.round(data.main.temp) + "°F";
            document.querySelector(".wind-speed").innerHTML = "Wind Speed : " + data.wind.speed + " MPH";
            document.querySelector(".humidity").innerHTML = "Humidity : " + data.main.humidity + " %";

            if(data.weather[0].main == "Clouds"){
                weatherImg.src = "./assets/images/icons8-clouds-96.png";
            } else if (data.weather[0].main == "Clear"){
                weatherImg.src = "./assets/images/icons8-sun-96.png";
            } else if (data.weather[0].main == "Rain"){
                weatherImg.src = "./assets/images/icons8-heavy-rain-96.png";
            } else if (data.weather[0].main == "Drizzle"){   
                weatherImg.src = "./assets/images/icons8-rain-96.png";
            } else if (data.weather[0].main == "Mist"){
                weatherImg.src = "./assets/images/icons8-fog-96.png";
            } 
    }); 
} 
    

function checkForecast(cityEnter) {
        var forecastURL = callback + cityEnter + `&appid=${apiKEY}`;
    var lat = forecastURL.coord;
    var lon = forecastURL.coord;
      fetch(forecast + `lat=${lat}` + `&lon=${lon}` + `&appid=${apiKEY}`)
        .then(function(result){
            console.log(result);
            return result.json();
        })
        .then(function(days){
            console.log(days);
            document.querySelector(".forecast-temp").innerHTML = days.main.temp; 
            //coord.[0] 
            //coord.[1]

        }); 
}

    

var btnList = document.getElementById("buttons");

function addHistory(cityInputName){
    var newBtn = document.createElement("button");
    newBtn.innerText = cityInputName;
    newBtn.classList.add("btn")
    btnList.appendChild(newBtn);
}

cityButton.addEventListener("click", function (){
    cityEnter = document.getElementById("search-input").value;
    // console.log(cityEnter);
    
    checkWeather(cityEnter);
    checkForecast(cityEnter);
    addHistory(cityEnter);
});

//;