const apiKey = "3e46c05326dd79d5e037d2408e34894f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=matric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click" , () =>{
    checkWeather(searchBox.value);
})