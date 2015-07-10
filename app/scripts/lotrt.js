/* global angular */
(function(){
  'use strict';

var lotrt = angular.module('LordsoftheRoundTable', ['restangular', 'ui.router']);

// http://www.funnyant.com/angularjs-ui-router/
lotrt.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
          url:'/',
          templateUrl: 'templates/home.html',
          controller: 'HomeController'
      })
      .state('about', {
          url:'/about',
          templateUrl: 'templates/about.html',
          controller: 'AboutController'
      })

}]);



})(window);
