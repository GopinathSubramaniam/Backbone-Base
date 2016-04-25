define([
   'jquery',
   'underscore',
   'backbone',
   'text!templates/user.html',
], function($, _, Backbone, userTemplate){
    'use strict';
   
   var UserView = Backbone.View.extend({
         
      template: _.template(userTemplate),

      events: {},
      initialize: function () {
    	  console.log('This model >>>> ', this.model);
    	  this.listenTo(this.model, 'change', this.render, this);
    	  this.render();
      },
      render: function () {
         this.$el.html(this.template(this.model));
         return this;
      }
         
   });
      
   return UserView;
});