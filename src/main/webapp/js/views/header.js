define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/header.html',
    ], function($, _, Backbone, headerTemplate){
	'use strict';
	
	var HeaderView = Backbone.View.extend({
		
		template: _.template(headerTemplate),
		
		events: {},
		initialize: function () {
			this.render();
		},
		render: function () {
			this.$el.html(this.template());
			return this;
		} 
	      
	});
	return HeaderView;
});