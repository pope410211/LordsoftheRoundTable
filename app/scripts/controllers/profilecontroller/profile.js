/* global angular */

(function(){
'use strict';

angular.module('lotrt')
.controller('profileController', function(FIREBASE_URL, $scope, $http){

var firebasePro = new Firebase(FIREBASE_URL);

  firebasePro.onAuth(function(authData){

     $http.get('https://graph.facebook.com/v2.4/me?access_token=' + authData.facebook.accessToken + '&fields=id,name,picture{height,width,url},age_range,birthday,location').
      success(function(data, status, headers, config) {
        $scope.profile = data;
         // this callback will be called asynchronously
         // when the response is available
         console.log('yay', data, status, headers, config);
       }).
       error(function(data, status, headers, config) {
         console.log('boo', data, status, headers, config);
         // called asynchronously if an error occurs
         // or server returns response with an error status.
       });
  });// token auth

});


})(window);
