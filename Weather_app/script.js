const apiKey = "5b03b11e2e08e6d7f20b051ceaa1bce1"; 
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
  const city = cityInput.value.trim();
  if (city === "") {
    weatherInfo.innerHTML = "⚠️ Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      weatherInfo.innerHTML = "❌ City not found. Please try again.";
      return;
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherInfo.innerHTML = "⚠️ Error fetching data. Please try again later.";
    console.error(error);
  }
}

function displayWeather(data) {
  const { name, main, weather, wind } = data;
  weatherInfo.innerHTML = `
    <h2>${name}</h2>
    <p>${weather[0].main} - ${weather[0].description}</p>
    <p>🌡️ Temperature: ${main.temp} °C</p>
    <p>💧 Humidity: ${main.humidity}%</p>
    <p>🌬️ Wind Speed: ${wind.speed} m/s</p>
  `;
}
