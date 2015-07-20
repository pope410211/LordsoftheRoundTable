/* global angular */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function(FIREBASE_URL, $http, $firebaseArray) {
 var self = this;
 $http.get(FIREBASE_URL + '/group/.json')
 .then(function(response){
    self.groups = response.data;
    console.log(self.groups);
});

            var sub = new Firebase('https://lotrttest.firebaseio.com/group/' + 'groups');
            self.groups = $firebaseArray(sub);


            self.saveGroups = function() {
              // Do nothing if nothing is submitted or if invalid
              // if (!$form.$dirty || !$form.$valid) {
              //
              //  return;

              self.groups.$add({
                groupName: self.groupName,
                date: self.date
              });


              self.groups = {};
               // Reset the form...



  };
  console.log('yes', self.groups);
});//end .controller




})();
