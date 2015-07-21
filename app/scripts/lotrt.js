/* global angular */
(function(){
  'use strict';

var lotrt = angular.module('lotrt', ['ui.router', 'restangular', 'firebase']);
  lotrt.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
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
        templateUrl: 'views/games/startgroup.html',
        controller: 'SubmitController',
        controllerAs: 'party'

      })
      .state('submit', {
        url: 'form/submitted',
        templateUrl: 'views/games/thankyousubmit.html',
        controller: 'SubmitController',
        controllerAs: 'party'
      })
      .state('findGame', {
        url: 'find/game/list',
        templateUrl: 'views/games/listpage.html',
        controller: 'ListController',
        controllerAs: 'list'
      })
      .state('404', {
        url: '/404',
        templateUrl: 'views/404.html'
      }); //404 not working
      $urlRouterProvider.otherwise('/'); // verify this .otherwise...

  }); //ui.router

  lotrt.constant('FIREBASE_URL', 'https://lotrttest.firebaseio.com');




})(window);
