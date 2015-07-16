(function(){
  'use strict';

  angular.module('lotrt')

  .controller('SubmitForm', function($stateParams, $firebase, $firebaseArray) {

var firebaseSub = new Firebase('https://lotrttest.firebaseio.com');

var self = this;

self.lotrt = $firebaseArray(firebaseSub);

self.submit = function(){
  self.lotrt.set({

      date: self.date,
      group_name: self.groupName,
      location: self.local

  });//self.lotrt

console.log(self.submit);

};//end of submit function;

});


})();
