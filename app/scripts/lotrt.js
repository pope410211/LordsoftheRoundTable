/* global angular */
(function(){
  'use strict';

var lotrt = angular.module('lotrt', ['ui.router', 'restangular', 'firebase']);
  lotrt.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home'); // verify this .otherwise...

  $stateProvider
    .state('home', {
      url: '/',
        templateUrl: 'views/home.html'
      })
    .state('about', {
      url: '/about',
        templateUrl: 'views/comm/about.html'

      })
      .state('blog', {
        url: '/blog',
          templateUrl: 'views/comm/blog.html'
      })
      .state('community', {
        url: '/community',
        templateUrl: 'views/comm/community.html'
        // authRequired: true
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/user/login.html'
      })
      .state('loginFB', {
        url: '/login/user/profile',
        templateUrl: 'views/user/profiles/profile.html',
        controller: 'LoginControllerFb',
        controllerAs: 'fblogin'
      })
      .state('myprofile', {
        url: '/user/myprofile',
        templateUrl: 'views/user/profiles/profile.html',
        controller: 'profileController',
        controllerAs: 'profile'
      })
      .state('startgroup', {
        url: '/start/group',
        templateUrl: 'views/games/startgroup.html'
      })
      .state('submit', {
        url: 'form/submitted',
        templateUrl: 'views/games/startgroup.html',
        controller: 'SubmitController',
        controllerAs: 'party'
      });
      // .state('/*/*', {
      //   url: '/:path*',
      //   templateUrl: 'views/404.html'
      // }); 404 not working

  }); //ui.router

  lotrt.constant('FIREBASE_URL', 'https://lotrttest.firebaseio.com');




})(window);
