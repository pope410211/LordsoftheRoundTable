/* global angular */
(function(){
  'use strict';

var routerAPP = angular.module('routerAPP', ['ui.router']);

// http://www.funnyant.com/angularjs-ui-router/
routerAPP.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
      .state('home', {
        url: '/home',
          templateUrl: '/views/home.html'
          // controller: 'HomeController'
          // console.log(home);
      })
      .state('about', {
        url: '/about/kick/butt',
          templateUrl: 'views/about.html'
          // controller: 'AboutController'
      })
      .state('blog', {
        url: '/blogwon',
          templateUrl: 'views/blog.html'
      })

      .state('community', {
        url: 'try/the/koolaid',
          templateUrl: 'views/community.html'
      })
      // http://stackoverflow.com/questions/23281351/angular-ui-router-handling-404s // for the 404
      .state('otherwise', {
      abstract: true,
        templateUrl: 'views/404.html'
  })
      .state('otherwise.404', {
      url: '*path',
        templateUrl: 'views/404.html'
  });

});



})(window);
