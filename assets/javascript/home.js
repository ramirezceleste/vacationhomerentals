$(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });
  });

  function initMap() {
    // The location of Uluru
    var uluru = {lat: 20.654624, lng: -105.239993};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

  console.log("working");