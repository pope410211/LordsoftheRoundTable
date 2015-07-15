/* global angular */

(function(){
'use strict';

angular.module('lotrt')
.controller('profileController', function($scope, $http){

  $http.get('api/facebook/user/nick.json').
      success(function(data, status, headers, config) {
        $scope.profile = data;
        console.log('success profiles', data, status, headers, config );
      }).
      error(function(data, status, headers, config) {
        // log error
        console.log('Failed profiles', data, status, headers, config);
      });







});//end of profileController



})(window);
