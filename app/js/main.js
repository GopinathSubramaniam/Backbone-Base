'use strict';

require.config({
   shim: {
      underscore: {
         exports: '_'
      },
      backbone: {
         deps : ['jquery', 'underscore'],
         exports: 'Backbone'
      },
      backboneLocalstorage:{
         deps: ['backbone'],
         exports: 'Store'
      },
      bootstrap: {
    	  deps: ['jquery'],
    	  exports: 'Bootstrap'
      },
      app: ['jquery', 'underscore', 'backbone', 'bootstrap']
   },
   paths: {
      jquery: '../lib/js/jquery',
      underscore: '../node_modules/underscore/underscore',
      backbone: '../node_modules/backbone/backbone',
      backboneLocalstorage: '../node_modules/backbone.localstorage/backbone.localStorage',
      text: '../node_modules/requirejs-text/text',
      jqueryIsotope: '../lib/js/jquery.isotope.min',
      jqueryPrettyPhoto: '../lib/js/jquery.prettyPhoto',
      bootstrap: '../lib/js/bootstrap.min',
      mainJs: '../lib/js/main',
      wow: '../lib/js/wow.min',
      select: '../node_modules/select2/dist/js/select2.full.min',
      app: 'app',
   }
});

require(['app'], function(App){
	new App();
	Backbone.history.start();
//   Backbone.history.start({ pushState: true });
});