define(['jquery', 'backbone', 'views/header', 'views/footer', 'views/home', 'views/user'], 
		function($, Backbone, HeaderView, FooterView, HomeView, UserView){
   'use strict';
   
   var  router = Backbone.Router.extend({
      
      routes : {
          '' : 'homePage',
          'user' : 'userPage'      
      },
      initialize: function(){
         new HeaderView({ el: $("#headerContent") });
         new FooterView({ el: $("#footerContent") });
      },
      homePage: function(){
         new HomeView({ el: $("#mainContent") });
      },
      userPage : function(){
         var user = {firstname: 'Gopinath'};
         new UserView({ el: $("#mainContent"), model: user});
         
      }
   });
   return router;
});