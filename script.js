var url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBDEcXU6u6I2VVF1Ir5oGx0oR_0TBc2xGI&callback=initMap&libraries=geometry,places"
/*axios url = ""*/
fetch(url)
.then((response) => response.json())
.then((data) => console.log(data))

var data1 = data 
var spotifyAPIKey = "fa3793ba6d7a4e8d88642fe7bbcba591"//Setting the API Key so we can be lazy. Add it to a string with + spotifyAPIKey)
/*Spotify API Key will go below*?*/
var url = ""
/*axios url = ""*/
fetch(url)
.then((response) => response.json())
.then((data) => console.log(data))
function getMusic(){var text = document.getElementById("alltext").value}
/*Getting User Input*/

/*https request*/
var url = "https://routes.googleapis.com/directions/v2:computeRoutes"
/*axios url = ""*/
fetch(url)
.then((response) => response.json())
.then((data) => console.log(data))

/*Generate route*/
var url = "https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix"
/*axios url = ""*/
fetch(url)
.then((response) => response.json())
.then((data) => console.log(data))

var short = [5,10]
var medium = [15,20]
var long = [45,60]
var random = [5,60]
function short(){var text = document.getElementById("").value}
function medium(){var text = document.getElementById("").value}
function long(){var text = document.getElementById("").value}
/* When I define short,medium, long in html add it into quotes
This is the walk times*/
initMap()
const StartingEndingLocation = {lat:40.8075, lng:73.9626}
var MorningsidePark = {lat:40.8061, lng:73.9585}
var RiverSideBirdSanctuary = {lat:40.8103, lng:73.9659}
var ConservatoryGarden = {lat:40.7937, lng:73.9525}
var RandomLocation = Math.random()*4
function constant() 
var config = {
  method: 'get',
  url: 'StartingEndingLocation',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
/* Copy playlist button*/
function GetSpotifyUrl(url){window.open(url)()}













































const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;

function initMap() {
  const columbiaUniversity = { lat: 40.81, lng: 73.96 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: columbiaUniversity,
  });

  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, "click", (event) => {
    addMarker(event.latLng, map);
  });
  // Add a marker at the center of the map.
  addMarker(columbiaUniversity, map);
}

// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map,
  });
}
/*
window.initMap = initMap;
var object = 
{
  "origin": {
    object (Waypoint)
  },
  "destination": {
    object (Waypoint)
  },
  "intermediates": [
    {
      object (Waypoint)
    }
  ],
  "travelMode": WALK (RouteTravelMode),
  "departureTime": string,
  "computeAlternativeRoutes": boolean,
  "routeModifiers": {
    object (RouteModifiers)
  },
  "languageCode": string,
  "units": IMPERIAL,
  "requestedReferenceRoutes": [
    enum (ReferenceRoute)
  ]
}*/
