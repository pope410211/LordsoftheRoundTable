/* global Firebase angular */
(function(){
  'use strict';

  angular.module('lotrt')
  .controller('CommentCtrl', function($stateParams, Restangular, FIREBASE_URL, $firebaseObject){

    console.log('in the comment control center');
    var group = Restangular.one('newGroup', $stateParams.gameID).all('comments');
    var self = this;
    var firebaseAuth = new Firebase(FIREBASE_URL);
    var authData = firebaseAuth.getAuth();
    var timestamp = new Date().getTime();
    var uid = authData.uid;

    this.comments = {
      name: '',
      timestamp: '',
      id: ''
    };

    this.submitComments = function(){

      self.comments.name = authData.facebook.displayName;
      self.comments.timestamp = timestamp;
      self.comments.id = uid;
      group.post(self.comments);
        console.log('work', self.comments);

            self.comments = {};

    };


    this.commentList = [ ];
    var gameList = new Firebase(FIREBASE_URL + '/newGroup/' + $stateParams.gameID + '/comments');
    this.commentList = $firebaseObject(gameList);
    console.log(self.commentList);

// var key = gameList.key();
//
// console.log('the Key Master', key);


      this.deleteComment = function(id){
        var deleteC = new Firebase(FIREBASE_URL + '/newGroup/' + $stateParams.gameID + '/comments/' + id );
        deleteC.remove();
      };


      // this.deleteComment = function(commentId){
      //     Restangular.one('newGroup', $stateParams.gameID).one('comments' )
      //     .remove().then(function(){
      //           console.log('delete all the things');
      //
      //       });
// };
  });
//end controller




})();
