(function(){
  'use strict';

  angular.module('lotrt')
  .controller('CommentCtrl', function($stateParams, Restangular){


    var group = Restangular.one('newGroup', $stateParams.gameID);
    var self = this;
    this.comments = {}

    this.submitComments = function(){
      group.post(self.comments, $stateParams.gameID);
      console.log('work')
            self.comments = {};

    };





  });
//end controller




})();
