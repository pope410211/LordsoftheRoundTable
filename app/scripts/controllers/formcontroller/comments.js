(function(){
  'use strict';

  angular.module('lotrt')
  .controller('CommentCtrl', function($stateParams, Restangular, FIREBASE_URL, $http){

    console.log('in the comment control center');
    var group = Restangular.one('newGroup', $stateParams.gameID).all('comments');
    var self = this;
    var firebaseAuth = new Firebase(FIREBASE_URL);
    var authData = firebaseAuth.getAuth();

    this.comments = {
      'name': authData.facebook.displayName
    };

    this.submitComments = function(){
      console.log('work')
      group.post(self.comments);

            self.comments = {};

    };




    // group.getList().then(function(comment){
    // self.comments = comment.plain();
    // console.log(self.comments);
    // });


    //  this.commentList = [];
    //  var commentorList = new Firebase(FIREBASE_URL + '/newGroup/' + $stateParams.gameID + '/comments');
    //  this.commentList = $firebaseArray(commentorList);
    //  console.log('yay', self.commentList);

    $http.get(FIREBASE_URL + '/newGroup/' + $stateParams.gameID + '/comments' + '.json' ).
     success(function(data, status, headers, config) {
       self.commentList = data;

        console.log('yay', data, status, headers, config);
      }).
      error(function(data, status, headers, config) {
        console.log('boo', data, status, headers, config);

      });



  });
//end controller




})();
