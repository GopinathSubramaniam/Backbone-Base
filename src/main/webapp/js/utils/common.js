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
//	var center = new google.maps.LatLng(53.409532, -2.010498);
	var UK = new google.maps.LatLng(53.409532, -2.010498);

	var myOptions = {
		zoom: 1,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: UK
	}
	
	var map = new google.maps.Map(document.getElementById('map_go'), myOptions);
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