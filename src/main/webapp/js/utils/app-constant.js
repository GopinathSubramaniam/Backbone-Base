'use strict';

var directionsService = null;
var directionsDisplay = null;;

function getFormData(currentTarget){
	var object = new Object();
	$.each(currentTarget, function(i, obj){
		if(obj.name !=='' && obj.value !== '')
			object[obj.name] = obj.value;
	});
	return object;
}

function initMap(){
	var defer = $.Deferred();
	$('#footer').addClass('fixed-footer');
	$.getScript('https://maps.googleapis.com/maps/api/js?signed_in=false&callback=initGoogleMapView', function(res, text, txtRes){
		console.log('when done >>>> ', res, text, txtRes);
		calculateAndDisplayRoute(directionsService, directionsDisplay).done(function(result){
			defer.resolve(result);
		});
	});
	return defer.promise();
}

function initGoogleMapView(){
	console.log('initMap called');
	directionsService = new google.maps.DirectionsService;
	directionsDisplay = new google.maps.DirectionsRenderer;

	var myOptions = {
		zoom: 7,
		center: {lat: 18.5203, lng: 73.8567}
	}

	var map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
	directionsDisplay.setMap(map);

	var onChangeHandler = function() {
		calculateAndDisplayRoute(directionsService, directionsDisplay).done(function(res){
			console.log('onChangeHandler Response >>> ', res);
		});
	};

	document.getElementById('start').addEventListener('change', onChangeHandler);
 	document.getElementById('end').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(){
	var defer = $.Deferred();
	
	directionsService.route({
		origin: document.getElementById('start').value,
		destination: document.getElementById('end').value,
		travelMode: google.maps.TravelMode.DRIVING
	},function(response, status) {
		if (status === google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
			return defer.resolve(directionsDisplay.directions);
		} else {
			return {status: 'FAILED'}
			window.alert('Directions request failed due to ' + status);
		}
	});
	
	return defer.promise();
	
}

