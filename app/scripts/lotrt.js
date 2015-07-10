/* global angular */
(function(){
  'use strict';

var routerAPP = angular.module('routerAPP', ['ui.router']);

// http://www.funnyant.com/angularjs-ui-router/
routerAPP.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/404')

  $stateProvider
      .state('home', {
        url: '/home',
          templateUrl: '/views/home.html'
          // controller: 'HomeController'
          // console.log(home);
      })
      .state('about', {
        url: '/about/kick/butt',
          templateUrl: 'views/about.html',
          // controller: 'AboutController'
      });

});



})(window);
