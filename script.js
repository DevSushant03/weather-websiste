const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentDayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(currentDate);
const currentMonth = currentDate.getMonth() + 1;


document.querySelector('.currentDate').textContent = currentDay;
document.querySelector('.currentDay').textContent = currentDayName;
document.querySelector('.currentMonth').textContent = currentMonth;


// api connect

const apiKey = "18978167feb04a41f7020f1ab75f7ab1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var searchBox = document.querySelector(".search");
var searchBtn = document.querySelector(".search-btn");

async function cheakWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".degree").innerHTML = data.main.temp + "°";
  document.querySelector(".humidity").innerHTML = "Humidity "  + data.main.humidity;
  document.querySelector(".wind").innerHTML = "Wind " + data.wind.speed;


}
searchBtn.addEventListener("click" , ()=>{
  cheakWeather(searchBox.value);
})

cheakWeather();