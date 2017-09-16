
	function initMap(){
		map = new google.maps.Map(document.getElementById('pin-map'), {
	  		center: {lat: -33.8688, lng: 151.2093},
	  		zoom: 3
		});

		// var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  //       var icons = {
  //         parking: {
  //           icon: iconBase + 'parking_lot_maps.png'
  //         }
  //       };

     

      //   // Create markers.
        // features.forEach(function(feature) {
        //   var marker = new google.maps.Marker({
        //     position: feature.position,
        //     icon: {
        //     		path: google.maps.SymbolPath.CIRCLE,
        //     		scale: 10
        //   		},
        //   		draggable: true,
        //   		map: map
        // 	});

		/* LOCATION #1 */
		var sydney = {lat: -33.8688, lng: 151.2093};

		// Display pin on pin-map 
		var marker = new google.maps.Marker({
  			position: sydney,
  			map: map,
  			name: "sydney" 
  		});

  		marker.addListener("click", changeCity);


		/* LOCATION #2 */
		var antelope = {lat: 36.861, lng: -111.374};

		var marker = new google.maps.Marker({
  			position: antelope,
  			map: map,
  			name: "antelope" 
  		});

  		marker.addListener("click", changeCity);

		/*LOCATION #3 */
		var perth = {lat: -31.950, lng: 115.860};

		var marker = new google.maps.Marker({
  			position: perth,
  			map: map,
  			name: "perth" 
  		});

  		marker.addListener("click", changeCity);

		/* LOCATION #4 */
		var nadi = {lat: -17.776, lng: 177.435};

		var marker = new google.maps.Marker({
  			position: nadi,
  			map: map,
  			name: "nadi" 
  		});

  		marker.addListener("click", changeCity);

		/* LOCATION #5 */
		var auckland = {lat: -36.848, lng: 174.763};

		var marker = new google.maps.Marker({
  			position: auckland,
  			map: map,
  			name: "auckland" 
  		}); 

  		// Detect when marker is clicked
		marker.addListener("click", changeCity);
	

		/* LOCATION #6 */
		var dublin = {lat: 53.609, lng: -6.023};

		var marker = new google.maps.Marker({
  			position: dublin,
  			map: map,
  			name: "dublin" 
  		}); 

  		// Detect when marker is clicked
		marker.addListener("click", changeCity);


		/* LOCATION #7 */
		var london = {lat: 51.509, lng: -0.118};

		var marker = new google.maps.Marker({
  			position: london,
  			map: map,
  			name: "london" 
  			}); 

  		// Detect when marker is clicked
		marker.addListener("click", changeCity);

		/* LOCATION #8 */
		var byron  = {lat: -28.639, lng: 153.609};

		var marker = new google.maps.Marker({
  			position: byron,
  			map: map,
  			name: "byron" 
  			}); 

  		// Detect when marker is clicked
		marker.addListener("click", changeCity);	

		/* LOCATION #9 */
		var gbr  = {lat: -20.282, lng: 149.038};

		var marker = new google.maps.Marker({
  			position: gbr,
  			map: map,
  			name: "gbr" 
  			}); 

  		// Detect when marker is clicked
		marker.addListener("click", changeCity);

		/* LOCATION #10 */
		var joshua  = {lat: 33.873, lng: -115.901};

		var marker = new google.maps.Marker({
  			position: joshua,
  			map: map,
  			name: "joshua" 
  			}); 

  		// Detect when marker is clicked
		marker.addListener("click", changeCity);	

		/* LOCATION #11 */
		var vancouver  = {lat: 49.282, lng: -123.116};

		var marker = new google.maps.Marker({
  			position: vancouver,
  			map: map,
  			name: "vancouver" 
  			}); 

  		// Detect when marker is clicked
		marker.addListener("click", changeCity);

		/* LOCATION #12 */
		var yosemite  = {lat: 37.865, lng: -119.538};

		var marker = new google.maps.Marker({
  			position: yosemite,
  			map: map,
  			name: "yosemite" 
  			}); 

  		// Detect when marker is clicked
		marker.addListener("click", changeCity);

		/* LOCATION #13 */
		var sf  = {lat: 37.774, lng: -122.419};

		var marker = new google.maps.Marker({
  			position: sf,
  			map: map,
  			name: "sf" 
  			}); 

  		// Detect when marker is clicked
		marker.addListener("click", changeCity);

		/* LOCATION #14 */
		var seminyak  = {lat: -8.691, lng: 115.168};

		var marker = new google.maps.Marker({
  			position: seminyak,
  			map: map,
  			name: "seminyak" 
  			}); 

  		// Detect when marker is clicked
		marker.addListener("click", changeCity);

		/* LOCATION #15 */
		var austin  = {lat: 30.267, lng: -97.641};

		var marker = new google.maps.Marker({
  			position: austin,
  			map: map,
  			name: "austin" 
  			}); 

  		// Detect when marker is clicked
		marker.addListener("click", changeCity);	

		/* LOCATION #16 */
		var denver  = {lat: 39.739, lng: -104.990};

		var marker = new google.maps.Marker({
  			position: denver,
  			map: map,
  			name: "denver" 
  			}); 

  		// Detect when marker is clicked
		marker.addListener("click", changeCity);

		/* LOCATION #17 */
		var gainesville  = {lat: 29.651, lng: -82.324};

		var marker = new google.maps.Marker({
  			position: gainesville,
  			map: map,
  			name: "gainesville" 
  			}); 

  		// Detect when marker is clicked
		marker.addListener("click", changeCity);

		/* LOCATION #18 */
		var bigsur  = {lat: 36.361, lng: -121.856};

		var marker = new google.maps.Marker({
  			position: bigsur,
  			map: map,
  			name: "bigsur" 
  			}); 

  		// Detect when marker is clicked
		marker.addListener("click", changeCity);

		/* LOCATION #19 */
		var melb  = {lat: -37.813, lng: 144.963};

		var marker = new google.maps.Marker({
  			position: melb,
  			map: map,
  			name: "melb" 
  			}); 

  		// Detect when marker is clicked
		marker.addListener("click", changeCity);	
	}



// GALLERY PAGE JS ********

// On page load, hide images(ALL PHOTO CLASSES) in #photo-display & photo-display div
	// Hides all images on page load

	

	function changeCity() {
		//console.log(this)
		var city = this.name
    	//console.log("name", this.name)
			showCity(city) 
	}


// END MAP------------


	function showCity(name) {
    console.log("show", name)
    // Displays #photo-display area 
    $("#photo-display").show()
    // Hides all images on page load
    $("#photo-display img").hide();
    // Displays images on marker click
    $("#photo-display img."+name+"").show()
	}


	window.onscroll = function() {scrollFunction()};
// when the user scrolls 20px down the page, make a back to top button appear
	function scrollFunction() {
    	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    		// if ("body" > 20) || ("body" > 20)
    	{
        	document.getElementById("myBtn").style.display = "block";
        	// $("myBtn").display = "block";
    	} 
    	else {
        document.getElementById("myBtn").style.display = "none";
        // $("myBtn").display = "none";
    	}
	}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; 
}
	
