/* global angular  Firebase */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function(FIREBASE_URL, $firebaseArray) {
      console.log('inside the controller');
      var self = this;
      var date = this.date = {
         value: new Date(2013, 9, 22)
       };
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
          'user': ''

        };
        this.newGame = $firebaseArray(games);
        console.log(newGame);
        this.saveGroups = function() {
          this.newGame.$add({
            groupName: self.groupName,
            date: this.date,
            // time: self.time ,
            partyInfo: {
            location: self.local,
            style: self.style,
            game: self.game,
            state: self.state,
            age: self.age,
            system: self.system,
            description: self.description,
            user: authData.uid
          }
/// re-adjust datbase layout above...

          });
        };


    }); //end .controller




})();
