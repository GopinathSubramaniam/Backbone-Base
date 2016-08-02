define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/header.html',
	'text!templates/models/register.html',
	'../models/register'
    ], function($, _, Backbone, headerTemplate, RegisterTemplate, RegisterModel){
	'use strict';
	
	var HeaderView = Backbone.View.extend({
		
		template: _.template(headerTemplate+RegisterTemplate),
		
		events: {
			'submit #registerForm' : 'register'
			
		},
		
		initialize: function () {
			this.model = new RegisterModel();
			this.render();
		},
		
		render: function () {
			Backbone.Validation.bind(this, {model: this.model});
			this.$el.html(this.template());
			return this;
		},
		
		register: function(ev){
			ev.preventDefault();
			console.log('register called');
			var data = this.$el.find('#registerForm').serializeObject(ev.currentTarget);// Fetching form model
			this.model.set(data); //Setting form object to Backbone Model 
			this.model.validate(); // Validating model
			if(this.model.isValid()){
				console.log('SUCCESS. Data = ', data);
			}else{
				console.log('FAILED');
			}
			
		}
	      
	});
	return HeaderView;
});