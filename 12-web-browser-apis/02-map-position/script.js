var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

// L.marker([51.5, -0.09])
//   .addTo(map)
//   .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//   .openPopup();

function curSuccess(pos) {
  const coords = pos.coords;
  const lat = coords.latitude;
  const lng = coords.longitude;
  const accuracy = coords.accuracy;

  map.setView([lat, lng], 16);

  marker
    .setLatLng([lat, lng])
    .update()
    .bindPopup(
      '<strong>Your Location</strong> <br> <small>There you are...</small>',
    )
    .openPopup();
}

function curError() {
  console.log(`Error`);
}

const options = {};

navigator.geolocation.getCurrentPosition(curSuccess, curError, options);
