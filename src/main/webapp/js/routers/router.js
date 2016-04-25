define(['jquery', 'backbone', 'views/header', 'views/footer', 'views/home', 'views/user'], 
		function($, Backbone, HeaderView, FooterView, HomeView, UserView){
   'use strict';
   
   var  router = Backbone.Router.extend({
      
      routes : {
          '' : 'homePage',
          'user' : 'userPage'      
      },
      
      homePage: function(){
         console.log('this is home page');
         new HeaderView({ el: $("#headerContent") })
         new HomeView({ el: $("#mainContent") });
         new FooterView({ el: $("#footerContent") })
      },
      userPage : function(){
         console.log('this is user page');
         
         var user = {firstname: 'Gopinath'};
         new UserView({ el: $("#mainContent"), model: user});
         
      }
   });
   return router;
});