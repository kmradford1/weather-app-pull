// City One
$.simpleWeather({
  location: 99031,
  unit: 'f',
  success: function(weather) {
    // Entire weather object
    console.log(weather);
    
    // Display Data
    $('i').addClass('icon-' + weather.code);
    $('#city1 .city').text(weather.city);
    $('#city1 .temp').text(weather.temp);
    $('#city1 .currently').text(weather.currently);
    $('#city1 .high').text(weather.high);
    $('#city1 .low').text(weather.low);

    if ( weather.code >= 29 && weather.code <= 36 ) {
      $('body').addClass('sun-shower');
  }

  },
  error: function(error) {
    // Show if weather cannot be retreived
    console.log('Look outside.');
  }

});

// City Two
$.simpleWeather({
  location: 'Spokane, WA',
  unit: 'f',
  success: function(weather) {
    // Entire weather object
    console.log(weather);
    
    // Display Data
    $('i').addClass('icon-' + weather.code);
    $('#city2 .city').text(weather.city);
    $('#city2 .temp').text(weather.temp);
    $('#city2 .currently').text(weather.currently);
    $('#city2 .high').text(weather.high);
    $('#city2 .low').text(weather.low);
    
  },
  error: function(error) {
    // Show if weather cannot be retreived
    console.log('Look outside.');
  }

});




// Geolocation
// Geolocation Check
if ( 'geolocation' in navigator ) {
  
  $('#geolocation').show();
  
} else {
  
  $('#geolocation *').hide();
  $('#geolocation').html('<p>Not Available</p>');
 
}

// Get Weather
$('button').click( function(){
 
  navigator.geolocation.getCurrentPosition(function(position) {
   
   // Check lat/long coordinates
   var lat = position.coords.latitude;
   var long = position.coords.longitude;
   
   console.log(lat, long);
   
   // Call Get Weather Function
   getWeather( lat + ',' + long );
    
  });

});


// Define Get Weather Function
var getWeather = function( location ) {

  console.log(location);

  $.simpleWeather({

    location: location,
    unit: 'f',
    success: function(weather) {
   
   // Entire weather object
    console.log(weather);
   
   // Display Data
   $('#geolocation .city').text(weather.city);
   $('#geolocation .temp').text(weather.temp);
   $('#geolocation .currently').text(weather.currently);
   $('#geolocation .high').text(weather.high);
   $('#geolocation .low').text(weather.low);

 },
 error: function(error) {
   // Show if weather cannot be retreived
   console.log('Look Outside.');
 }

});


};
