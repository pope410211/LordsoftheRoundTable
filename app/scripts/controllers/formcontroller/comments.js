(function(){
  'use strict';

  angular.module('lotrt')
  .controller('CommentCtrl', function($stateParams, Restangular, FIREBASE_URL, $firebaseArray){

    console.log('in the comment control center');
    var group = Restangular.one('newGroup', $stateParams.gameID).all('comments');
    var self = this;


    this.comments = {}

    this.submitComments = function(){
      console.log('work')
      group.post(self.comments);

            self.comments = {};

    };


    var self = this;
     this.commentList = [ ];
     var commentorList = new Firebase(FIREBASE_URL + '/newGroup' + '/comments');
     this.commentList = $firebaseArray(commentorList);
     console.log(self.commentList);




  });
//end controller




})();
