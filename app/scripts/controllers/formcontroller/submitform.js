/* global angular Firebase */
(function(){
  'use strict';

  angular.module('lotrt')

  .controller('SubmitController', function($stateParams, $firebase, $firebaseArray) {

var firebaseSub = new Firebase('https://lotrttest.firebaseio.com');

var self = this;

// var selfRef = firebaseSub.child('newGroup');

var group = {date: " ", groupName: " "}
var findGroup = firebaseSub.child('newGroup');




});
  console.log('work');
});

})();
