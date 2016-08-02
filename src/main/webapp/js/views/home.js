define([
   'jquery',
   'underscore',
   'backbone',
   'text!templates/home.html',
   '../models/app',
   'views/googlemapview',
   'select'
], function($, _, Backbone, homeTemplate, App, GoogleMapView, select ){
   'use strict';
   var app = null;
   var HomeView = Backbone.View.extend({
      
      template: _.template(homeTemplate),
      initialize: function () {
         this.render();
         app = new App();
    	 $('#start').select2({data: app.get('startPoint')});
    	 $('#end').select2({data: app.get('endPoint')});
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
         console.log('>>>>>>', searchObj);
         var searchModel = new Backbone.Model(searchObj);
//         new GoogleMapView({el: $('#mainContent'), model: searchModel});
         new GoogleMapView({el: $('#mainContent'), model: searchModel});
      }
   });
   
   return HomeView;
   
});