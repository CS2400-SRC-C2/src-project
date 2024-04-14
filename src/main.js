import {
  polygonLandmarks,
  polygonLandmarksInfo,
  singleLandMarks,
  singleLandMarksInfo,
} from "./FarmInfo.js";

let map;
let infoWindow = new google.maps.InfoWindow();
const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

initMap();

//Initialize Map and draws the map
async function initMap() {
  const loadingState = document.getElementById("loadingState");
  loadingState.remove();

  // The location of the farm
  const position = {
    lat: 34.054083437323056,
    lng: -117.76200572967707,
  };

  // The map, centered at farm
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 20,
    center: position,
    mapId: "c31d8b610a6f7ab2",
    maxZoom: 21,
    minZoom: 15,
  });
  addLandMarks();
  addPolygonLandMarks();
  trackLocation();
}

//Adding Special Landmarks on the map
function addLandMarks() {
  for (let i = 0; i < singleLandMarks.length; i++) {
    const icon = document.createElement("img");
    icon.src = singleLandMarksInfo[i].icon;
    const marker = addMarker(singleLandMarks[i], icon);
    marker.addListener("click", (event) => {
      infoWindow.setContent(singleLandMarksInfo[i].description);
      infoWindow.setPosition(event.latLng);
      infoWindow.open(map);
    });
  }
}

//Adding crops layout on the farm
function addPolygonLandMarks() {
  for (let i = 0; i < polygonLandmarks.length; i++) {
    const polygon = new google.maps.Polygon({
      paths: polygonLandmarks[i],
      strokeOpacity: 0,
      strokeWeight: 3,
      fillColor: polygonLandmarksInfo[i].color,
      fillOpacity: 0.9,
    });

    polygon.setMap(map);

    polygon.addListener("click", (event) => {
      infoWindow.setContent(polygonLandmarksInfo[i].description);
      infoWindow.setPosition(event.latLng);
      infoWindow.open(map);
    });
  }
}

//Tracks User Location
function trackLocation() {
  setInterval(addCurrentLocationToMap, 5000);
}

let previousLocation = null;

async function addCurrentLocationToMap() {
  const myLocation = await getCurrentLocation();
  if (previousLocation !== null) {
    previousLocation.setMap(null);
  }
  previousLocation = addMarker(myLocation);
}

//Function for getting user current location.
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      //getLocation
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        resolve(pos);
      },
      (error) => {
        reject(error);
      }
    );
  });
}

function addMarker(location, icon) {
  const marker = new AdvancedMarkerElement({
    position: location,
    map: map,
    content: icon,
  });
  return marker;
}
