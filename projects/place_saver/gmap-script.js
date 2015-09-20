//Init vars
var map;
var geocoder;
var marker;
var block = []; //Array holding on click latlng coords
var image = ["imgs/penguin.png", "imgs/sheep.png", "imgs/business.png", "imgs/fun.png", "imgs/home.png", "imgs/money.png", "imgs/music.png", "imgs/relationship.png", "imgs/school.png", "imgs/vacation.png", "imgs/work.png"]; //Array with all available icons
var iconType = image[0]; //Default marker icon on click
var latlng;
var icon = [];
var title = [];
var a = [];
var data = {};

//Bind events
$(document).on('click', '#deleteLS', deleteLS);
$(document).on('click', '#find', find);
$(document).on('click', '#showList', listPlaces);
$(document).on('click', '#hideList', hidePlaces);
$(document).on('click', '#hideSQL', hideSQL);
$(document).on('click', '#showSQL', showSQL);
$(document).on('click', '#hideMarkers', hideMarkers);
//Initialize maps
$(document).ready(function(){
  var coord = new google.maps.LatLng(6.21023074961589, 5.094447135925293);
  var settings = {
    zoom: 15,
    center: coord,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  map = new google.maps.Map(document.getElementById("map-canvas"), settings);
  geocoder = new google.maps.Geocoder();

   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
       var pos = new google.maps.LatLng(position.coords.latitude,     position.coords.longitude);
       marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: image[9],
        title: 'You are here!'
       });
       map.setCenter(pos);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        maxWidth: 120,
        position: pos,
        content: 'You are here!'
      });
     })
   }

  //Autoload LS saved places
  loadPlaces();

  //Hide SQL block at start
  hideSQL();

  google.maps.event.addListener(map, 'click', function (e){
    //Get place name from the user
    var placeTitle = prompt("Name this place", "");
    if (placeTitle === null) {
      return;
    }
    var date = new Date();
    //Format date properly in the future
    // var m = date.getMonth() + 1;
    // var d = date.getDay();
    // var y = date.getYear();
    // var now = d + "/" + m + "/" + y;

    var input = e.latLng;
    var lat = parseFloat(input.lat());
    var lng = parseFloat(input.lng());
    latlng = new google.maps.LatLng(lat,lng);

    //set on click marker
    marker = new google.maps.Marker({
      position: e.latLng,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: iconType,
      title: placeTitle
    });

    //center map on clicked position
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
      }, 300);

    //JSON object with info
    data = {
            'lat': lat,
            'lng': lng,
            'iconType': iconType,
            'placeTitle': placeTitle,
            'dateAdded' : date
          };

    //Autoupdate mySQL save form, if user is logged and wants to save to mySQL
    $('#latitude').val(lat);
    $('#longitude').val(lng);
    $('#date').val(date);
    $('#category').html('<img src='+'"'+iconType+'">');
    $('#cat').val(iconType);
    $('#placeTitle').val(placeTitle);

  //Save data locally using HTML5 Local Storage and JSON
  if(!localStorage['places']) {
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('places', JSON.stringify(a));
  } else {
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('places'));
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('places', JSON.stringify(a));
  }          
  });
});

//Takes care of showing locally saved markers on the map
function loadPlaces() {
  if(localStorage['places']) {
    a = JSON.parse(localStorage.getItem('places'));
    for (n=0; n<a.length; n++)
      
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(a[n].lat, a[n].lng),
        map: map,
        icon: a[n].iconType,
        title: a[n].placeTitle
      });
    } else {
      $('#status').html("No saved places in memory. <br> You might want to add a few");
    }
}

//Geocoder search function for google maps
function find(){
  var address = document.getElementById("address").value;
  geocoder.geocode({'address':address}, function(results, status){
    if(status == google.maps.GeocoderStatus.OK){
      for(i=0; i<results.length; i++){
        c = results[i].geometry.location;
        map.setCenter(c);
        marker = new google.maps.Marker({
          map: map,
          position: c,
          zoom: 12,
          title: "Here is your find"
        });
      }
    } else {
      $('#status').text("Could not find: " + address + " ("+status+")");
    }
  });
}

//Completely erases saved places from Local Storage
function deleteLS(){
  if (confirm("Delete all saved locations from LocalStorage?")) {
    localStorage.removeItem('places');
    document.getElementById("status").innerHTML = "Deleted.";
    location.reload();
  }
}

//Showing a searchable list of saved in LS places
function listPlaces() {
//Implement print check, so that list gets printed ONCE, not spammed
  if(localStorage['places']){
    a = JSON.parse(localStorage.getItem('places'));
    $('#list').text("");
    for (n=0; n<a.length; n++) {
      var appendConstructor = '<img src='+'"'+a[n].iconType+'">' + " " + a[n].placeTitle + "@" + a[n].lat + " and " + a[n].lng + " added on " + a[n].dateAdded;
      $('#list').append("<li>"+appendConstructor+"</li>");
      $('#list').show();
    }
  } else {
      document.getElementById("status").innerHTML = "You have no saved places yet. GG"
    }
  }

//Hiding the list
function hidePlaces() {
  $('#list').hide();
}

//Hide all markers (but they are still saved in LS)
function hideMarkers() {
  //Not implemented yet
  // for (var i=0; i<markerArray.length; i++)
  //   markerArray[i].setMap(null);
}

//Hide the SQL saving block
function hideSQL() {
  $('#sql').hide();
}

//Show SQL block
function showSQL() {
  $('#sql').show();
}

//Here goes icon setting functions for the different markers
function penguinIcon() {
    iconType = image[0];
    $('#status').html("Selected place icon is "+'<img src="'+iconType+'">');
}

function sheepIcon() {
    iconType = image[1];
    $('#status').html("Selected place icon is "+'<img src="'+iconType+'">');      }

function businessIcon() {
    iconType = image[2];
    $('#status').html("Selected place icon is "+'<img src="'+iconType+'">');
}

function funIcon() {
    iconType = image[3];
    $('#status').html("Selected place icon is "+'<img src="'+iconType+'">');
}

function homeIcon() {
    iconType = image[4];
    $('#status').html("Selected place icon is "+'<img src="'+iconType+'">');
}

function moneyIcon() {
    iconType = image[5];
    $('#status').html("Selected place icon is "+'<img src="'+iconType+'">');
}

function musicIcon() {
    iconType = image[6];
    $('#status').html("Selected place icon is "+'<img src="'+iconType+'">');
}

function relationshipIcon() {
    iconType = image[7];
    $('#status').html("Selected place icon is "+'<img src="'+iconType+'">');
}

function schoolIcon() {
    iconType = image[8];
    $('#status').html("Selected place icon is "+'<img src="'+iconType+'">');
}

function vacationIcon() {
    iconType = image[9];
    $('#status').html("Selected place icon is "+'<img src="'+iconType+'">');
}

function workIcon() {
    iconType = image[10];
    $('#status').html("Selected place icon is "+'<img src="'+iconType+'">');
}