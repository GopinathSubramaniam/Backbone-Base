define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/googlemap.html',
	'../models/app'
    ], function($, _, Backbone, googlemapTemplate, App){
	'use strict';
	
	var GoogleMapView = Backbone.View.extend({
		
		template : _.template(googlemapTemplate),
		
		initialize: function(){
			var self = this;
			var obj = this.model;
			//this.listenTo(this.model, 'change', this.render);
			this.render();
			
			var startDropDown = $('#start').select2({data: [this.model.attributes.start], onChange: this.selectPlace, width: '30%'});
			var endDropDown = $('#end').select2({data: [this.model.attributes.end], width: '30%'});
			var mapDetails = {};
			
			startDropDown.change(function(e){
				mapDetails = calculateAndDisplayRoute(directionsService, directionsDisplay).done(function(result){
					self.model.set(result);
					$('#route_distance').html(result.routes[0].legs[0].distance.text);
				});
			});
			endDropDown.change(function(e){
				mapDetails = calculateAndDisplayRoute(directionsService, directionsDisplay).done(function(result){
					self.model.set(result);
					$('#route_distance').html(result.routes[0].legs[0].distance.text);
				});
			});
			this.model.set(mapDetails)
			initMap().done(function(res){// global function
				var routeObj = res.routes[0];
				$('#route_distance').html(routeObj.legs[0].distance.text);
				console.log('initMap().done >>> ',res);
			});
		},
		events: {},
		render: function(){
			this.$el.html(this.template());
			return this;
		},
		selectPlace: function(){
			console.log('SelectPlace = ');
		}
		
	});
	
	return GoogleMapView;
	
});