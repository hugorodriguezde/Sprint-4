document.addEventListener("DOMContentLoaded", function () {
  let weatherUrl = "";
  const weather = document.getElementById("weather");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const apiKey = "da62fe7851a2f08469c14d31724be3fa";

      weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

      function getWeather() {
        fetch(weatherUrl)
          .then((res) => {
            if (!res.ok) {
              throw new Error(`Error: ${res.status} - ${res.statusText}`);
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            const temp = data.main.temp;
            const weatherImg = data.weather[0].icon;
            const imgurl = `https://openweathermap.org/img/w/${weatherImg}.png`;
            if (weather) {
              console.log("Weather existe");
              weather.innerHTML = `<img src="${imgurl}"><b>|</b><b>${temp.toFixed(0)}ºC</b>`;
            } else {
              console.log("no ha entrado en weather");
            }
          });
      }
      getWeather();
    });
  }
});
