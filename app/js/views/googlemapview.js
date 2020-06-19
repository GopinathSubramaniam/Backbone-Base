define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/googlemap.html',
    ], function($, _, Backbone, googlemapTemplate){
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