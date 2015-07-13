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
        templateUrl: 'views/blog.html'
      })

      .when('/community', {
        templateUrl: 'views/community.html'
        // authRequired: true
      })
      .when('/login', {
        templateUrl: 'views/login.html'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/loginFB', {
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      });

  });





})(window);
