'use strict';

require.config({
   shim: {
      underscore: {
         exports: '_'
      },
      backbone: {
         deps : [ 'underscore', 'jquery'],
         exports: 'Backbone'
      },
      backboneValidation: {
    	  deps : [ 'underscore', 'backbone', 'jquery'], 
    	  exports: 'BackboneValidation' 
      },
      backboneLocalstorage:{
         deps: ['backbone'],
         exports: 'Store'
      },
      bootstrap: {
    	  deps: ['jquery'],
    	  exports: 'Bootstrap'
      }
   },
   paths: {
      jquery: '../lib/js/jquery',
      underscore: '../node_modules/underscore/underscore',
      backbone: '../node_modules/backbone/backbone',
      backboneLocalstorage: '../node_modules/backbone.localstorage/backbone.localStorage',
      backboneValidation: '../node_modules/backbone-validation/dist/backbone-validation-min',
      text: '../node_modules/requirejs-text/text',
      jqueryIsotope: '../lib/js/jquery.isotope.min',
      jqueryPrettyPhoto: '../lib/js/jquery.prettyPhoto',
      bootstrap: '../lib/js/bootstrap.min',
      mainJs: '../lib/js/main',
      wow: '../lib/js/wow.min',
      select: '../node_modules/select2/dist/js/select2.full.min',
      appConstant: 'utils/app-constant'
   }
});

require(['backbone', 'bootstrap', 'backboneValidation', 'routers/router', 'appConstant'], function(Backbone, Bootstrap, BackboneValidation, Workspace, AppConstant){
   new Workspace();
   Backbone.history.start();
//   Backbone.history.start({ pushState: true });
});