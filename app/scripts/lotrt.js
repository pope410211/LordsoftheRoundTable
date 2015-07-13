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
        templateUrl: 'views/comm/about.html'

      })
      .when('/blog', {
          templateUrl: 'views/comm/blog.html'
      })
      .when('/community', {
        templateUrl: 'views/comm/community.html'
        // authRequired: true
      })
      .when('/login', {
        templateUrl: 'views/user/login.html'
      })
      .when('/signup', {
        templateUrl: 'views/user/signup.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/loginFB', {
        templateUrl: 'views/user/login.html',
        controller: 'LoginControllerFb',
        controllerAs: 'fblogin'
      });

  });





})(window);
