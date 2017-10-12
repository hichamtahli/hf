$( document ).ready(function() {
	/* NAVIGATION */
	if ($(window).width() > 990) {
		$('.popular').hover(
		  function() {
		    $('.nav1').slideDown();
		  }, function() {
		    $('.nav1').hide();
		  }
		);
	}
	/* END NAVIGATION */


	// In the following example, markers appear when the user clicks on the map.
      // Each marker is labeled with a single alphabetical character.

      function initialize() {
        var ny = { lat: 40.712775, lng: -74.005973 };
        var ny1 = { lat: 40.741895, lng: -74.062958 };
        var ny2 = { lat: 40.712775, lng: -74.075973 };
        var ny3 = { lat: 40.732775, lng: -74.005973 };
        var ny4 = { lat: 40.722775, lng: -74.015973 };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: ny
        });


        // Add a marker at the center of the map.
        addMarker(ny, map,'$60');
        addMarker(ny1, map,'$50');
        addMarker(ny2, map,'$40');
        addMarker(ny3, map,'$30');
        addMarker(ny4, map,'$70');
        /*addMarker(ny, map);
        addMarker(ny, map);
        addMarker(ny, map);*/
      }

      // Adds a marker to the map.
      function addMarker(location, map, text) {
        // Add the marker at the clicked location, and add the next-available label
        // from the array of alphabetical characters.
        var image = 'images/ico_marker.png';
        var marker = new google.maps.Marker({
          position: location,
          label: {
            text: text,
            color : '#FFFFFF',
        x: '20',
        y: '10'
          },
          map: map,
          icon: {
            url: 'images/ico_marker.png',
            labelOrigin : new google.maps.Point(20, 20),
          }
        });
      }

      google.maps.event.addDomListener(window, 'load', initialize);


	/* NAV MOBILE */      
    $('.nav_open').click(function () {

        var main_height = $( document ).height();
        $('nav').height(main_height);
        $('nav').slideDown();
        $('.nav_close').show();
        $(this).hide();

    });
    $('.nav_close').click(function () {
        $('nav').slideUp();
        $('.nav_open').show();
        $(this).hide();
    });

});	