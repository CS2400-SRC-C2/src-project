import {
  polygonLandmarks,
  polygonLandmarksInfo,
  singleLandMarks,
  singleLandMarksInfo,
  borderCoords,
} from './FarmInfo.js';

let map;
let infoWindow = new google.maps.InfoWindow();
const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

initMap();

//Initialize Map and draws the map
async function initMap() {
  const loadingState = document.getElementById('loadingState');
  loadingState.remove();

  // The location of the farm
  const position = {
    lat: 34.0542833,
    lng: -117.7615739,
  };

  // The map, centered at farm
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 20,
    center: position,
    mapId: 'dc2e9f6e433cf3d0',
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
    const icon = document.createElement('img');
    icon.src = singleLandMarksInfo[i].icon;
    const marker = addMarker(singleLandMarks[i], icon);
    marker.addListener('click', (event) => {
      infoWindow.setContent(
        '<div id="contentTitle">' +
          singleLandMarksInfo[i].title +
          '</div>' +
          '<div id="contentBody">' +
          singleLandMarksInfo[i].description +
          '</div>'
      );
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

    polygon.addListener('click', (event) => {
      infoWindow.setContent(
        '<div id="contentTitle">' +
          polygonLandmarksInfo[i].title +
          '</div>' +
          '<div id="contentBody">' +
          polygonLandmarksInfo[i].description +
          '</div>'
      );
      infoWindow.setPosition(event.latLng);
      infoWindow.open(map);
    });
  }
  const border = new google.maps.Polygon({
    paths: borderCoords,
    strokeOpacity: .3,
    strokeWeight: 4,
    fillOpacity: 0.01,
  });
  border.setMap(map);
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
