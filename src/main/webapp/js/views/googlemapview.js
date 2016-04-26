define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/googlemap.html',
    ], function($, _, Backbone, googlemapTemplate){
	'use strict';
	
	var GoogleMapView = Backbone.View.extend({
		
		template : _.template(googlemapTemplate),
		
		events: {},
		
		initialize: function(){
			App.initMap();
			this.render();
			$('#start').select2({data: App.startPoint, width: 'resolve'});
			$('#end').select2({data: App.endPoint});
		},
		render: function(){
			this.$el.html(this.template());
			return this;
		}
	});
	
	return GoogleMapView;
	
});