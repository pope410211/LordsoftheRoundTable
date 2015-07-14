/* global angular Firebase */
(function(){
'use strict';

angular.module('lortrt');

$http.get('graph.facebook.com/v2.4/me?fields=picture,age_range,birthday,location').
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    console.log(success)
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });


})(window);
