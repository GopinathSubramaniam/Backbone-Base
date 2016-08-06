define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/header.html',
	'text!templates/models/register.html',
	'text!templates/models/login.html',
	'../models/user'
    ], function($, _, Backbone, headerTemplate, RegisterTemplate, LoginTemplate, UserModel){
	'use strict';
	
	var HeaderView = Backbone.View.extend({
		
		template: _.template(headerTemplate+RegisterTemplate+LoginTemplate), // Creating template by adding Register and Login template with header 
		
		events: {
			'submit form#registerForm' : 'register',
			'submit form#loginForm' : 'login'
		},
		
		initialize: function () {
			this.model = new UserModel();
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
			if(this.model.isValid() && this.model.attributes.conformPassword === this.model.attributes.password){
				console.log('SUCCESS. Data = ', this.model.attributes);
				new UserModel().save(this.model.attributes, {
					success: function(model, respose, options){
						console.log('After Save Success :::: ', model, respose, options);
					},
					error: function(model, xhr, options){
						console.log('After Save Error:::: ', model, xhr, options);
					}
				});
				$('#registerModal').modal('hide');
			}else{
				console.log('FAILED');
			}
			
		},
		
		login: function(ev){
			ev.preventDefault();
			console.log('login called');
			var data = this.$el.find('#loginForm').serializeObject(ev.currentTarget);// Fetching form model
			var appConstant = new AppConstant();
			if(appConstant.validate(data.email) && appConstant.validate(data.password)){
				console.log('SUCCESS');	
				//var userModel = new UserModel();
				this.model.url = '/user/login';
				this.model.save(data, {
					success: function(model, respose, options){
						console.log('After Save Success :::: ', model, respose, options);
						window.location.href = '/';
					},
					error: function(model, xhr, options){
						console.log('After Save Error:::: ', model, xhr, options);
					}
				});
			}else{
				console.log('FAILED');
			}
		}
	      
	});
	return HeaderView;
});