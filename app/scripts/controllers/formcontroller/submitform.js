/* global angular Firebase */
(function(){
  'use strict';

  angular.module('lotrt')

  .controller('submitForm', function($stateParams, $firebase, $firebaseArray) {

var firebaseSub = new Firebase('https://lotrttest.firebaseio.com');

var self = this;

// var selfRef = firebaseSub.child('newGroup');

var group = { date: "", name: ""};

self.submit = $firebaseArray(firebaseSub);

this.submit = function(){

  firebaseSub.child('newGroup').push({
    date: self.group.date,
    name: self.group.groupName
    //self.submit


});

};//end of submit function;
console.log('it worked');
});


})();
