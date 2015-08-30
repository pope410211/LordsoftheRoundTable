/* global angular  Firebase */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function($state, FIREBASE_URL, $firebaseArray, $stateParams, Restangular) {
      console.log('inside the controller');
      var self = this;
      var firebaseSub = new Firebase(FIREBASE_URL);
      var authData = firebaseSub.getAuth();
      var group = Restangular.all('newGroup');
      var timestamp = new Date().getTime();


      this.newGroup = [];
      this.newGame = {
        'user': authData.facebook.displayName,
        'timestamp': timestamp,
        'uid': authData.uid
      };

      this.saveGroups = function(){
        console.log(self.newGroup);
        group.post(self.newGame);

        self.newGame = {};
        $state.go('findGame');
      };





    });
     //end .controller




})();
