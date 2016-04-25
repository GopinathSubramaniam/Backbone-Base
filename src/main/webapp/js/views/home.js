define([
   'jquery',
   'underscore',
   'backbone',
   'text!templates/home.html',
   'Common',
   'views/googlemapview',
   'select'
], function($, _, Backbone, homeTemplate, Common, GooglemapView, select ){
   'use strict';
   
   var HomeView = Backbone.View.extend({
      
      template: _.template(homeTemplate),
      
      initialize: function () {
    	  this.render();
    	  $('#start').select2({data: App.startPoint});
    	  $('#end').select2({data: App.endPoint});
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
    	  var searchObj = App.getFormData(e.currentTarget);
    	  console.log('>>>>>>', searchObj);
    	  new GooglemapView({el: $('#mainContent'), model: searchObj});
      }
      
   });
   
   return HomeView;
   
});