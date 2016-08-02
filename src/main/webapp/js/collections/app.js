define([ 'jquery', 'underscore', 'backbone', ], function($, _, Backbone) {
	'use strict';
	
	AppCollection = Backbone.Collection.extend({
		data: []
	});
	return AppCollection;
	
});