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

/**
 * Initializes the map with html loading message. Object made containing center of map.
 * Google Maps map created with default zoom and position set to map center. Custom styled map id is used.
 * Sets minimum and maximum zoom levels.
 * Calls addLandMarks and addPolygonLandMarks to add landmarks to the map, and trackLocation to track user location.
 * @returns {Promise<void>} A promise that resolves when the map is initialized.
 */
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

/**
 * Adds the non-polygon landmarks to the map by looping through the arrays from FarmInfo.js containing
 * the coordinates of each landmark, creating a marker for each and adding it to the map. 
 * Adds an event listener to each marker so that when it is clicked, an info window will pop up with the title and
 * description of the landmark.
 */
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

/**
 * Border is created around the farm to show the boundaries.
 * Adds the polygon landmarks representing crops and gardens to the map. Loops through the arrays 
 * from FarmInfo.js containing the coordinates of the corners of each crop to create each polygon and add it to the map. 
 * Adds an event listener to each polygon so that when it is clicked, an info window will pop up with the title and
 * description of the polygon landmark.
 */
function addPolygonLandMarks() {
  const border = new google.maps.Polygon({
    paths: borderCoords,
    strokeOpacity: .3,
    strokeWeight: 4,
    fillOpacity: 0,
  });
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
  border.setMap(map);
}

/**
  * Calls addCurrentLocationToMap every 5 seconds to update the user's location on the map
 */
function trackLocation() {
  setInterval(addCurrentLocationToMap, 5000);
}

let previousLocation = null;

/**
 * Adds the current location to the map as a marker. Removes the previous location marker if it exists.
 * @returns {Promise<void>} A promise that resolves when the current location is added to the map.
 */
async function addCurrentLocationToMap() {
  const myLocation = await getCurrentLocation();
  if (previousLocation !== null) {
    previousLocation.setMap(null);
  }
  previousLocation = addMarker(myLocation);
}

/**
 * Retrieves the current location of the user using the browser's geolocation API.
 * @returns {Promise<{ lat: number, lng: number }>} A promise that resolves to an object containing the latitude and longitude of the current location.
 * @throws {Error} If there is an error retrieving the current location.
 */
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

/**
 * Creates and returns a marker with the specified location and icon.
 * @param {Object} location - The location of the marker, contains lat and long.
 * @param {HTMLImageElement} icon - The marker image.
 * @returns {AdvancedMarkerElement} The created marker.
 */
function addMarker(location, icon) {
  const marker = new AdvancedMarkerElement({
    position: location,
    map: map,
    content: icon,
  });
  return marker;
}
