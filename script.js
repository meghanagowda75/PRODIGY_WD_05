const apiKey = "a84fac200ce9543d4def63aacfac7aa5";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod != 200) {
        alert("City not found!");
        return;
      }

      document.getElementById("city").innerText =
        "City: " + data.name;

      document.getElementById("temperature").innerText =
        "Temperature: " + data.main.temp + " °C";

      document.getElementById("condition").innerText =
        "Condition: " + data.weather[0].description;

      document.getElementById("humidity").innerText =
        "Humidity: " + data.main.humidity + "%";
    })
    .catch(error => {
      console.error(error);
      alert("Error fetching weather data");
    });
}
