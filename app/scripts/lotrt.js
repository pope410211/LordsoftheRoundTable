/* global angular */
(function(){
  'use strict';

var lotrt = angular.module('lotrt', ['ngRoute']);
  lotrt.config(function($routeProvider) {
  // $routeProvider.otherwise('/home');

  $routeProvider
        .when('/home', {
        templateUrl: 'views/home.html'
      })
    .when('/about', {
        templateUrl: 'views/about.html'
        // controller: 'QuestionsController',
        // controllerAs: 'questions'
      })
      .when('/blog', {
        url: '/blogwon',
          templateUrl: 'views/blog.html'
      })

      .when('/community', {
        url: 'try/the/koolaid',
          templateUrl: 'views/community.html'
      })
    
  });





})(window);
