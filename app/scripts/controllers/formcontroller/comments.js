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




    // group.getList().then(function(comment){
    // self.comments = comment.plain();
    // console.log(self.comments);
    // });


     this.commentList = [ ];
     var commentorList = new Firebase(FIREBASE_URL + '/newGroup' + $stateParams.gameID + '/comments');
     this.commentList = $firebaseArray(commentorList);
     console.log('yay', self.commentList);




  });
//end controller




})();
