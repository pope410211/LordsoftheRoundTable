/* global angular Firebase */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function(FIREBASE_URL, $firebaseArray, $location) {
      var self = this;
      var firebaseSub = new Firebase(FIREBASE_URL);
      var authData = ref.getAuth();
      var submitGroup = ref.child(authData.uid + "/new/group");
      var newGroup = {
        'groupName': '',
        'date': ''
      };
      this.newGroup = $firebaseArray(submitGroup);
      console.log(newGroup);
      this.submit = function() {
        this.nailProduct.$add({
          groupName: self.groupName,
          date: self.date
        })
      };
  });
})();
