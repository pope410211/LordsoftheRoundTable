/* global angular Firebase */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function(FIREBASE_URL, $firebaseArray, $location) {
      var self = this;
      var firebaseSub = new Firebase(FIREBASE_URL);
      var authData = firebaseSub.getAuth();
      var submitGroup = firebaseSub.child(authData.uid + "/new/group");
      var newGroup = {
        'groupName': '',
        'date': ''
      };
      this.newGroup = $firebaseArray(submitGroup);
      console.log(newGroup);
      this.submit = function() {
        this.newGroup.$add({
          groupName: self.groupName,
          date: self.date
        })
      };
  });
})();
