'use strict';

require.config({
   shim: {
      underscore: {
         exports: '_'
      },
      backbone: {
         deps : [
            'underscore',
            'jquery'
         ],
         exports: 'Backbone'
      },
      backboneLocalstorage:{
         deps: ['backbone'],
         exports: 'Store'
      }
   },
   paths: {
      jquery: '../lib/js/jquery',
      underscore: '../node_modules/underscore/underscore',
      backbone: '../node_modules/backbone/backbone',
      backboneLocalstorage: '../node_modules/backbone.localstorage/backbone.localStorage',
      text: '../node_modules/requirejs-text/text',
      bootstrap: '../lib/js/bootstrap.min',
      jqueryIsotope: '../lib/js/jquery.isotope.min',
      jqueryPrettyPhoto: '../lib/js/jquery.prettyPhoto',
      mainJs: '../lib/js/main',
      wow: '../lib/js/wow.min',
      select: '../node_modules/select2/dist/js/select2.full.min',
      Common: 'utils/common'
   }
});

require(['backbone', 'routers/router'], function(Backbone, Workspace){
   new Workspace();
   Backbone.history.start();
//   Backbone.history.start({ pushState: true });
});