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
        var isNewGame = true;
        var authData = firebaseSub.getAuth();
        var games = firebaseSub.child('/newGroup');
        // .then(function(){
        //   if (newGame && isNewGame)
        //
        //   newGroup.push(newGame);
        //
        // });
        var newGroup = [];
        var newGame =  {
          'user': '',
          'date': '',
          'state': '',
          'timeStamp': '',
          groupInfo: {
            'groupName': '',
            'time': '',
            'location': '',
            'style': '',
            'game': '',
            'age': '',
            'system': '',
            'description': ''
          }
        };
        // var partyGame = newGroup.push(games);


// var newDate = new Date()


        this.newGroup = $firebaseArray(games);
        console.log(partyGame);
        this.saveGroups = function() {
          self.newGroup.$add({
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



          }).then(partyGame);
          this.partyGame = newGroup.push(newGame);

        }


    }); //end .controller




})();
