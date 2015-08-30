(function(){
  'use strict';

  angular.module('lotrt')
  .controller('CommentCtrl', function($stateParams){


    var group = Restangular.one('newGroup', $stateParams.gameID);
    var self = this;
    this.comment = {}

    this.submitComments = function(){
      group.put(self.comment, $stateParams.gameID);
      console.log('work')
            self.comment = {};

    };





  });
//end controller




})();
