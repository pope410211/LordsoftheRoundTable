/* global angular  Firebase */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function(FIREBASE_URL, $firebaseArray, $stateParams, Restangular) {
      console.log('inside the controller');
      var self = this;
      // var authData = firebaseSub.getAuth();
      var group = Restangular.all('newGroup')
      var firebaseSub = new Firebase(FIREBASE_URL);
      var newGame = {
                    //  user: authData.uid,
                     // date: self.date,
                     // state: self.state,
                     timeStamp: Firebase.ServerValue.TIMESTAMP,
                     groupInfo: {
                     groupName: self.groupName,
                     // time: self.time ,
                     // location: self.local,
                     // style: self.style,
                     // game: self.game,
                     // age: self.age,
                     // system: self.system,
                     description: self.description
         }
                   };

                    this.saveGroups = function(){
                        group.post(newGame);
};



    });
     //end .controller




})();




// var firebaseSub = new Firebase(FIREBASE_URL);
//         var isNewGame = true;

//         var gameId = $stateParams.gameId;
//         var games = firebaseSub.child('/newGroup');
//
//         var newGroup = [];
//         var newGame =  {
//           'user': '',
//           'date': '',
//           'state': '',
//           'timeStamp': '',
//           groupInfo: {
//             'groupName': '',
//             'time': '',
//             'location': '',
//             'style': '',
//             'game': '',
//             'age': '',
//             'system': '',
//             'description': ''
//           }
//         };
//         // var partyGame = newGroup.push(games);
//
//
// // var newDate = new Date()
//
//
//         this.newGame = $firebaseArray(games);
//         // console.log(partyGame);
//         // this.newGroup = newGroup.push(newGame);
//   this.saveGroups = function() {
//           self.newGame.$add({
//             user: authData.uid,
//             // date: self.date,
//             // state: self.state,
//             timeStamp: Firebase.ServerValue.TIMESTAMP,
//             groupInfo: {
//             groupName: self.groupName,
//             // time: self.time ,
//             // location: self.local,
//             // style: self.style,
//             // game: self.game,
//             // age: self.age,
//             // system: self.system,
//             description: self.description
// }
//           });
// };

//
// this.newGroup = [];
// // this.saveGroups = function(object){
// //
// //   self.newGroup.push(object)
// // }
// //
// // this.newGame = {};
// // console.log('it works');
