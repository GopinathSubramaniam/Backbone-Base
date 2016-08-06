define([ 'jquery', 'underscore', 'backbone', 'backboneValidation' ], function($, _, Backbone, BackboneValidation) {
	'use strict';

	var RegisterModel = Backbone.Model.extend({
		url: '/user/',
	 	validation: {
			 name: [{
				 required: true,
				 msg: 'Please enter name'
			 },{
				 minLength: 4,
				 msg: 'Name must have minimum 4 characters'
			 }],
			 email: [{
				 required: true,
				 msg: 'Please enter email'
			 },{
				 pattern: 'email',
				 msg: 'Please enter a valid email'
			 }],
			 mobile: [{
				 required: true,
				 msg: 'Please enter mobile'
			 },{
				 //range: [10, 11],
				 minLength: 10,
				 maxLength: 11,
				 msg: 'Please enter a valid mobile'
			 }],
			 password: [{
				 required: true,
				 msg: 'Please enter password'
			 },{
				 minLength: 4,
				 msg: 'Password length should be more than 6'
			 }]
		 }
	});
	
	$.fn.serializeObject = function () {
	    "use strict";
	    var a = {}, b = function (b, c) {
	        var d = a[c.name];
	        "undefined" != typeof d && d !== null ? $.isArray(d) ? d.push(c.value) : a[c.name] = [d, c.value] : a[c.name] = c.value
	    };
	    return $.each(this.serializeArray(), b), a
	};

//	_.extend(Backbone.Model.prototype, Backbone.Validation.mixin);
	_.extend(Backbone.Validation.callbacks, {
	    valid: function (view, attr, selector) {
	        var $el = view.$('[name=' + attr + ']'), 
	            $group = $el.closest('.form-group');
	        
	        $group.removeClass('has-error');
	        $group.find('.help-block').html('').addClass('hidden');
	    },
	    invalid: function (view, attr, error, selector) {
	        var $el = view.$('[name=' + attr + ']'), 
	            $group = $el.closest('.form-group');
	        
	        $group.addClass('has-error');
	        $group.find('.help-block').html(error).removeClass('hidden');
	    }
	});
	
	return RegisterModel;
});

