
	function initMap(){
		// MAP APPEAR
		// BARRY: get map to not repeat
		map = new google.maps.Map(document.getElementById('pin-map'), {
	  		center: {lat: -33.8688, lng: 151.2093},
	  		zoom: 3
		});

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
	}



// GALLERY PAGE JS ********

// On page load, hide images(ALL PHOTO CLASSES) in #photo-display & photo-display div
	// Hides all images on page load
	/*$(".sydney").hide();
	$(".antelope").hide();
	$(".perth").hide();
	$(".nadi").hide();
	$(".auckland").hide(); */
	

	function changeCity() {
		//console.log(this)
		var city = this.name
    
		//console.log("name", this.name)
			showCity(city) 
	}


// END MAP------------



	function showCity(name) 
	{
		$(".city").hide();
		$("."+name).show();
	}
	// hide previous city


 	/* function showPhotos() {
 		$("#photo-display").show();
 		//$("div#sydney .sydney").show();
 	} */

 	/* function showAntelope(){
		$("div#antelope").show();
 	}

 	function showNadi() {
		$("div#nadi").show();
 	}

 	function showAuckland() {
 		$("div#auckland").show();
	}

	function showSedona() {
		$("div#sedona").show();
	}
	*/
