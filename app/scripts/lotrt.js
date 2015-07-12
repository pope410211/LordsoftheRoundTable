/* global angular */
(function(){
  'use strict';

angular.module('lotrt', ['ngRoute']);

// http://www.funnyant.com/angularjs-ui-router/
.config(function($routeProvider) {
  $routeProvider.otherwise('/home');

  $routeProvider
      .when('home', {
        url: '/home',
          templateUrl: '/views/home.html'
          // controller: 'HomeController'
          // console.log(home);
      })
      .when('about', {
        url: '/about/kick/butt',
          templateUrl: 'views/about.html'
          // controller: 'AboutController'
      })
      .when('blog', {
        url: '/blogwon',
          templateUrl: 'views/blog.html'
      })

      .when('community', {
        url: 'try/the/koolaid',
          templateUrl: 'views/community.html'
      })
      .when('otherwise', {
      abstract: true,
        templateUrl: 'views/404.html'
  })
      .when('otherwise.404', {
      url: '/',
        templateUrl: 'views/404.html'
  });

});



})(window);
