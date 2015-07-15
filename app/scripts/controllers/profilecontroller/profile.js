(function(){
'use strict';

angular.module('lotrt');

.controller('profileController', function($scope, $http){

  $http.get('/api/facebook/user/nick.json').
      success(function(data, status, headers, config) {
        $scope.posts = data;
      }).
      error(function(data, status, headers, config) {
        // log error
      });







});//end of profileController



})(window);
