/* global angular Firebase */
(function(){
  'use strict';

  angular.module('lotrt')

  .controller('submitForm', function($stateParams, $firebase, $firebaseArray) {

var firebaseSub = new Firebase('https://lotrttest.firebaseio.com');

var self = this;

// var selfRef = firebaseSub.child('newGroup');

self.submit = $firebaseArray(firebaseSub);

this.submit = function(){

  firebaseSub.child('group').set({
    date: self.date,
    name: self.groupName
    //self.submit


});

};//end of submit function;
console.log(this.submit);
});


})();
