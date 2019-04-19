const COORDS_LS = "coords";

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
    const coords = JSON.parse(loadedCoords);
    console.log(coords);
  }
}

(function() {
  loadCoords();
})();
