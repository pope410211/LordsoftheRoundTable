/* global angular Firebase */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function(FIREBASE_URL, $firebaseArray) {
      var self = this;
      var firebaseSub = new Firebase(FIREBASE_URL);
      var authData = firebaseSub.getAuth();
      var submitGroup = firebaseSub.child(authData.uid + "/new/group");
      var newGroup = {
        'groupName': '',
        'date': ''
      };
      self.newGroup = $firebaseArray(submitGroup);

      self.submitGroup = function() {
        self.newGroup.$add({
          groupName: self.groupName,
          date: self.date
        })
      };
        console.log(self.submitGroup);
  });
})();
