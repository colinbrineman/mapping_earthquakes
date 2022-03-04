// Add console.log to check to see if our code is working.
console.log('working');

// Add GeoJSON data.
let sanFranAirport =
{
  "type": "FeatureCollection", "features": [{
    "type": "Feature",
    "properties": {
      "id": "3469",
      "name": "San Francisco International Airport",
      "city": "San Francisco",
      "country": "United States",
      "faa": "SFO",
      "icao": "KSFO",
      "alt": "13",
      "tz-offset": "-8",
      "dst": "A",
      "tz": "America/Los_Angeles"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-122.375, 37.61899948120117]
    }
  }
  ]
};

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.61899948120117, -122.375], 10);

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  onEachFeature: function (feature, layer) {
    // Optional console log
    console.log(layer);
    // Bind popup
    layer.bindPopup("<h2>" + "Airport code: " + feature.properties.faa + "</h2>" + "<h2>" + "Airport name: " + feature.properties.name + "</h2>");
  }
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// Then we add our tile layer to the map.
streets.addTo(map);