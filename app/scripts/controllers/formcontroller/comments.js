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

    this.comments = {
      name: '' ,
      timestamp: ''
    };

    this.submitComments = function(){
      console.log('work')
      self.comments.name = authData.facebook.displayName,
      self.comments.timestamp = timestamp
      group.post(self.comments);

            self.comments = {};

    };


    this.commentList = [ ];
    var gameList = new Firebase(FIREBASE_URL + '/newGroup/' + $stateParams.gameID + '/comments');
    this.commentList = $firebaseObject(gameList);
    console.log(self.commentList);

// var key = gameList.key();
//
// console.log('the Key Master', key);
      this.deleteComment = function(commentId){
          Restangular.one('newGroup', $stateParams.gameID).one('comments', commentId)
          .remove().then(function(){
                console.log('delete all the things');

            });
};
  });
//end controller




})();
