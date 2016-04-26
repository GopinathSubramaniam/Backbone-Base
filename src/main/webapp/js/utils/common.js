var Fn = function(){
	this.getFormData = getFormData;
	this.initMap = initMap;
	this.startPoint = ['Pune'];
	this.endPoint = ['Mumbai'];
}
var App = new Fn();
		
function getFormData(currentTarget){
	var object = new Object();
	$.each(currentTarget, function(i, obj){
		if(obj.name !=='' && obj.value !== '')
			object[obj.name] = obj.value;
	});
	return object;
}


function initMap(){
	$('#footer').addClass('fixed-footer');
	$.getScript('https://maps.googleapis.com/maps/api/js?signed_in=false&callback=initGoogleMapView', function(data, status, jqxhr){
		console.log('data ::: ', data, 'Status ::: ', status);
	});
}

function initGoogleMapView(){
	console.log('initMap called');
	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;

	var myOptions = {
		zoom: 7,
		center: {lat: 18.5203, lng: 73.8567}
	}
	
	var map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
	directionsDisplay.setMap(map);
	
	/*var onChangeHandler = function() {
		calculateAndDisplayRoute(directionsService, directionsDisplay);
	};*/
	
//	document.getElementById('start').addEventListener('change', onChangeHandler);
//	document.getElementById('end').addEventListener('change', onChangeHandler);
//	calculateAndDisplayRoute(directionsService, directionsDisplay);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay){

	directionsService.route({
	    origin: document.getElementById('start').value,
	    destination: document.getElementById('end').value,
	    travelMode: google.maps.TravelMode.DRIVING
	  }, function(response, status) {
	    if (status === google.maps.DirectionsStatus.OK) {
	      directionsDisplay.setDirections(response);
	      console.log('Distance : ', response.routes[0].legs[0].distance.text);
	    } else {
	      window.alert('Directions request failed due to ' + status);
	    }
	  });
}