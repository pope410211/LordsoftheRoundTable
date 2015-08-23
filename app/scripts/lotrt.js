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
        url: '/start-group',
        templateUrl: 'views/games/startgroup.html',
        controller: 'SubmitController',
        controllerAs: 'party'

      })
      .state('submit', {
        url: 'form-submitted',
        templateUrl: 'views/games/thankyousubmit.html',
        controller: 'SubmitController',
        controllerAs: 'party'
      })
      .state('findGame', {
        url: '/find-game/list',
        templateUrl: 'views/games/listpage.html',
        controller: 'ListController',
        controllerAs: 'list'
      })
      .state('404', {
        templateUrl: 'views/404.html'
      }); //404 not working
      $urlRouterProvider.otherwise(function($injector, $location){
       var state = $injector.get('$state');
       state.go('404');
       return $location.path(); // verify this .otherwise...
  });
  $urlRouterProvider.when('', '/home');
  }); //ui.router

  lotrt.constant('FIREBASE_URL', 'https://lotrttest.firebaseio.com');

  lotrt.config(function(RestangularProvider){
    RestangularProvider.setBaseUrl('https://lotrttest.firebaseio.com');
     RestangularProvider.setRequestSuffix('.json');
  });




})(window);
