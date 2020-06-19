define([
   'jquery',
   'underscore',
   'backbone',
   'text!templates/home.html',
   'select'
], function($, _, Backbone, homeTemplate, select ){
   'use strict';
   var app = null;
   var HomeView = Backbone.View.extend({
      
      template: _.template(homeTemplate),
      initialize: function () {
         this.render();
      },
      
      render: function () {
    	  this.$el.html(this.template());
    	  return this;
      },
      
      events: {
    	  'submit #searchForm' : 'showGoogleMap'
      },
      
      showGoogleMap: function(e){
         e.preventDefault();
         var searchObj = getFormData(e.currentTarget);
         var searchModel = new Backbone.Model(searchObj);
         new GoogleMapView({el: $('#mainContent'), model: searchModel});
      }
   });
   
   return HomeView;
   
});