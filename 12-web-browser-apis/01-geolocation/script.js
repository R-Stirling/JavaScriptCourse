// getCurrentPosition() - one-off position returned
function curSuccess(pos) {
  console.log(pos);
  const coords = pos.coords;

  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Within: ${coords.accuracy} meters`);
}

function curError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
  enableHighAccuracy: true, //Enables GPS if available
  timeout: 5000, //Time to wait to stop trying for location
  maximumAge: 0, // Do nopt use cached position
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// watchPosition() - continuous stream of location updates

// Example use - set a target destination and check if position reached (watchPosition())
//set target
const target = {
  latitude: 41.3878273,
  longitude: -71.928374,
};
//
function watchSuccess(pos) {
  //   console.log(pos);
  const coords = pos.coords;

  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    console.log('You have reached your destination');
    //then clear the watch position via the watch Id
    navigator.geolocation.clearWatch(id);
  }
}

function watchError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
  enableHighAccuracy: true, //Enables GPS if available
  timeout: 5000, //Time to wait to stop trying for location
  maximumAge: 0, // Do nopt use cached position
};

// Set a watch ID
const id = navigator.geolocation.watchPosition(
  watchSuccess,
  watchError,
  watchOptions,
);
