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
        var games = firebaseSub.child('/newGroup');
        var newGame = {
          'groupName': '',
          'date': '',
          // 'time': '',
          'location': '',
          'style': '',
          'game': '',
          'state': '',
          'age': '',
          'system': '',
          'description': '',
          'user': '',
          'timeStamp': ''

        };

var newDate = new Date('yyyy-MM-dd');



        this.newGame = $firebaseArray(games);
        console.log(newGame);
        this.saveGroups = function() {
          this.newGame.$add({
            user: authData.uid,
            date: self.date | newDate,
            state: self.state,
            timeStamp: Firebase.ServerValue.TIMESTAMP,
            groupInfo: {
            groupName: self.groupName,

            // time: self.time ,
            location: self.local,
            style: self.style,
            game: self.game,
            age: self.age,
            system: self.system,
            description: self.description
}

/// re-adjust datbase layout above...

          });
        };


    }); //end .controller




})();
