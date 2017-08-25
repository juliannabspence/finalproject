$('document').ready(function(){

// GALLERY PAGE JS ********

// On page load, hide images(ALL PHOTO CLASSES) in #photo-display
	//$("#photo-display").hide();	MAYBE DONT HID PHOTO DISPLAY BUT HAVE IT DISPLAY RANDOM PHOTOS
	$("div#sydney .sydney").hide();
	/* $("div#antelope").hide();
	$("div#nadi").hide();
	$("div#auckland").hide();
	$("div#sedona").hide (); */
	$("#pin-map").click(showSydney); // need to change to on click of sydney pin
	//$("#pin-map").click(showAntelope);
	//$("#pin-map").click(showNadi);
	//$("#pin-map").click(showAuckland);
	//$("#pin-map").click(showSedona);

// BARRY: I AM SHOCKED THAT I EVEN TYPED THIS IN RIGHT TO HIDE #PHOTO-DISPLAY BUT... WHAT DO I PUT IN THE BLANK SPACE NOW SO IT SNTO SO BLANK?
 	function showSydney() {
 		//$("#photo-display").show();
 		$("div#sydney .sydney").show();
 	}

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

// Display pins on pin map 
// Detect when user clicks a pin and display city images
// On click of pin, load images for selected city
// If user selects sydney pin, display .sydney
	// $("#sydney").click()
	// if (city == "sydney") { $("photo-display").show("class", "sydney")}


});