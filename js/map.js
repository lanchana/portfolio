function initMap() {
        // var uluru = {lat: 33.899400, lng: -84.457890};
        var myCenter = new google.maps.LatLng(33.7490,-84.3880);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(33.7490,-84.3880),
    zoom:15,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    mapTypeId:google.maps.MapTypeId.HYBRID
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
  google.maps.event.addListener(marker,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Atlanta, GA"
    });
  infowindow.open(map,marker);
  });


  //       var mapCanvas = document.getElementById("map");
  // var mapOptions = {
  //   center: new google.maps.LatLng(33.7490,-84.3880),
  //   zoom:15,
  //   mapTypeId:google.maps.MapTypeId.HYBRID
  // };
  // var map = new google.maps.Map(mapCanvas,mapOptions);
  // var marker = new google.maps.Marker({position:myCenter});
  // marker.setMap(map);
  // google.maps.event.addListener(marker,'click',function() {
  //   var infowindow = new google.maps.InfoWindow({
  //     content:"Hello World!"
  //   });
  // infowindow.open(map,marker);
  // });
      }
