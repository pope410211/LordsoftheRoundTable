/* global angular  Firebase */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function(FIREBASE_URL, $firebaseArray) {
      console.log('inside the controller');
      var self = this;
      // var date = this.date = {
      //    value: new Date(2013, 9, 22)
      //  };
        var firebaseSub = new Firebase(FIREBASE_URL);

        var authData = firebaseSub.getAuth();
        var games = firebaseSub.child('/newGroup' + newGroup);
        var newGroup = [];
        var newGame =  {};
        var partyGame = newGroup.push(newGame);

// var newDate = new Date()


        this.newGame = $firebaseArray(games);
        console.log(partyGame);
        this.saveGroups = function() {
          this.partyGame.$add({
            user: authData.uid,
            // date: self.date,
            // state: self.state,
            timeStamp: Firebase.ServerValue.TIMESTAMP,
            groupInfo: {
            groupName: self.groupName

            // time: self.time ,
            // location: self.local,
            // style: self.style,
            // game: self.game,
            // age: self.age,
            // system: self.system,
            // description: self.description
}


          });
          newGame = {};
        }


    }); //end .controller




})();
