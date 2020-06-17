define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/footer.html',
    ], function($, _, Backbone, footerTemplate){
	'use strict';
	
	var FooterView = Backbone.View.extend({
		
		template: _.template(footerTemplate),
		events: {},
		initialize: function () {
			 this.render();
		},
		render: function(){
			this.$el.html(this.template());
			return this;
		}
		
	});
	return FooterView;
});