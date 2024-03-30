let map;
let infoWindow;

async function initMap() {
  // The location of Uluru
  const position = {
    lat: 34.05483036641861,
    lng: -117.76191973068477,
  };
  // Request needed libraries.
  //@ts-ignore
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 20,
    center: position,
    mapId: "c31d8b610a6f7ab2",
  });

  //set polygons on the farm
  const crop1 = new google.maps.Polygon({
    paths: crop1Cords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  crop1.setMap(map);

  crop1.addListener("click", showCropsInfo);
  infoWindow = new google.maps.InfoWindow();
}

function showCropsInfo(event) {
  contentString = "put info about crops in here";
  infoWindow.setContent(contentString);
  infoWindow.setPosition(event.latLng);
  infoWindow.open(map);
}

const crop1Cords = [
  { lat: 34.05483036641861, lng: -117.76191973068477 }, // Top-left corner
  { lat: 34.05483036641861, lng: -117.76091973068477 }, // Top-right corner
  { lat: 34.05492036641861, lng: -117.76091973068477 }, // Bottom-right corner
  { lat: 34.05492036641861, lng: -117.76191973068477 }, // Bottom-left corner
];

initMap();
