define([ 'jquery', 'underscore', 'backbone'], function($, _ , Backbone) {
	'use strict';

	var RegisterModel = Backbone.Model.extend({
		url: '/user/',
	});
	
	$.fn.serializeObject = function () {
	    "use strict";
	    var a = {}, b = function (b, c) {
	        var d = a[c.name];
	        "undefined" != typeof d && d !== null ? $.isArray(d) ? d.push(c.value) : a[c.name] = [d, c.value] : a[c.name] = c.value
	    };
	    return $.each(this.serializeArray(), b), a
	};

	return RegisterModel;
});

