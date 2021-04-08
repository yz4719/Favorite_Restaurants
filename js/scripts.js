// this is my mapboxGL token
// the base style includes data provided by mapbox, this links the requests to my account
mapboxgl.accessToken = 'pk.eyJ1IjoibW16enl5aGgiLCJhIjoiY2s2dTl6OGNsMDduejNkcXAwYzFmMm5mYSJ9.CbLRIkFjQIPksjZ-wwKWNg';

// we want to return to this point and zoom level after the user interacts
// with the map, so store them in variables
var initialCenterPoint = [23.199429, 47.772590]
var initialZoom = 1


// create an object to hold the initialization options for a mapboxGL map
var initOptions = {
  container: 'map-container', // put the map in this container
  style: 'mapbox://styles/mapbox/light-v10', // use this basemap
  center: initialCenterPoint, // initial view center
  zoom: initialZoom, // initial view zoom level (0-18)
}

// create the new map
var map = new mapboxgl.Map(initOptions);

// add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// // make a single marker in central park
//  new mapboxgl.Marker()
//    .setLngLat([-73.974087,40.770718])
//    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
//     .setHTML('I am in Central Park'))
//    .addTo(map);

   // // iterate over each object in partnerdata
   // partnerdata.forEach(function(partnerdataEntry) {
   // // for each object in the partnerdata, add a marker to the map with a popup
   // new mapboxgl.Marker()
   //     .setLngLat([partnerdataEntry.Long, partnerdataEntry.Lat])
   //     .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
   //      .setHTML(`Our partner:${partnerdataEntry.Name} is located at ${partnerdataEntry.Address} `))
   //     .addTo(map);
   // })
// iterate over each object in studentData
favo.forEach(function(studentEntry) {
  // for each object in the studentData, add a marker to the map with a popup
  new mapboxgl.Marker()
    .setLngLat([studentEntry.long, studentEntry.lat])
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
     .setHTML(`
       ${studentEntry.name}最喜欢(zuì xǐ huān)${studentEntry.restaurants}的(de)${studentEntry.rec_ch}!!
       <hr/>
       ${studentEntry.name}'s favorite restaurant is ${studentEntry.restaurants}! And their ${studentEntry.rec_en} is a must try!!`))
    .addTo(map);
})
// // iterate over each object in studentData
// studentData.forEach(function(studentEntry) {
//   // for each object in the studentData, add a marker to the map with a popup
//   new mapboxgl.Marker()
//     .setLngLat([studentEntry.longitude, studentEntry.latitude])
//     .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
//      .setHTML(`${studentEntry.name} thinks ${studentEntry.pizza_place} is the best pizza in the world!`))
//     .addTo(map);
// })
// event listeners for the fly to buttons

$('#china').on('click', function() {
  map.flyTo({
    center: [115.109945, 22.128556],
    zoom: 2
  })
})

$('#michigan').on('click', function() {

  var michiganLngLat = [23.199429, 47.772590]

  map.flyTo({
    center: michiganLngLat,
    zoom: 2
  })
})

$('#colombia').on('click', function() {
  var colombiaLngLat = [-90.729, 35.241]

  map.flyTo({
    center: colombiaLngLat,
    zoom: 2
  })
})

$('#nyc').on('click', function() {
  map.flyTo({
    center: initialCenterPoint,
    zoom: 1
  })
})

$('#nyc1').on('click', function() {
  var colombiaLngLat = [-73.989, 40.738]

  map.flyTo({
    center: colombiaLngLat,
    zoom: 10
  })
})

$('#taipei').on('click', function() {
  var colombiaLngLat = [121.550, 25.016]

  map.flyTo({
    center: colombiaLngLat,
    zoom: 11
  })
})
