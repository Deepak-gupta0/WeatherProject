//Selection Part
const searchbar = document.querySelector(".searchbar input");
const searchBtn = document.querySelector(".searchbar img");
const weatherImg = document.querySelector(".weather-icon");
const temp = document.querySelector(".temp h1");
const cityName = document.querySelector(".city h1");
const humidityPercent = document.querySelector(".humidity h2");
const windSpeed = document.querySelector(".w-speed h2");

searchbar.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=e912927eaf69bd102870418df9c4502f`
    )
      .then((res) => res.json())
      .then((data) => {
        temp.innerText = Math.round(data.main.temp - 273.15) + "°C";
        humidityPercent.innerText = data.main.humidity + "%";
        windSpeed.innerText = data.wind.speed + "km/h";
        cityName.innerHTML = `${data.name}`;
        if (data.weather[0].main === "Clouds") {
          weatherImg.innerHTML = `<img src="images/clouds.png" alt="Clouds" />`;
        } else if (data.weather[0].main === "Clear") {
          weatherImg.innerHTML = `<img src="images/clear.png" alt="Clouds" />`;
        } else if (data.weather[0].main === "Drizzle") {
          weatherImg.innerHTML = `<img src="images/drizzle.png" alt="Clouds" />`;
        } else if (data.weather[0].main === "Mist") {
          weatherImg.innerHTML = `<img src="images/mist.png" alt="Clouds" />`;
        } else if (data.weather[0].main === "Rain") {
          weatherImg.innerHTML = `<img src="images/rain.png" alt="Clouds" />`;
        } else if (data.weather[0].main === "Snow") {
          weatherImg.innerHTML = `<img src="images/snow.png" alt="Clouds" />`;
        }
      });
  }
});
