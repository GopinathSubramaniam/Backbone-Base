define([ 'jquery', 'underscore', 'backbone' ], function($, _, Backbone) {
	'use strict';

	var AppModel = Backbone.Model.extend({
		defaults : {
			startPoint : [ 'Pune' ],
			endPoint : [ 'Mumbai' ]
		}

	});

	return AppModel;
});