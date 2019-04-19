const weather = document.querySelector(".js-weather");

const API_KEY = "fc5c0c90b7d2b0be793adb0ca21cac88";
const COORDS_LS = "coords";

// api.openweathermap.org/data/2.5/weather?lat=35&lon=139

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @${place}`;
    })
    .catch(function(error) {
      alert(error.message);
    });
}

function saveCoords(coordsObject) {
  localStorage.setItem(COORDS_LS, JSON.stringify(coordsObject));
}

function handleGeoError(error) {
  alert(error.message);
}

function handleGeoSuccess(position) {
  const coords = position.coords;
  const latitude = coords.latitude;
  const longitude = coords.longitude;
  const coordsObject = {
    latitude,
    longitude,
  };

  saveCoords(coordsObject);
  getWeather(latitude, longitude);
}

function askForCorrds() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS_LS);

  if (loadedCoords === null) {
    askForCorrds();
  } else {
    // getWeather
    const parseCoords = JSON.parse(loadedCoords);
    const latitude = parseCoords.latitude;
    const longitude = parseCoords.longitude;

    getWeather(latitude, longitude);
  }
}

(function() {
  loadCoords();
})();
