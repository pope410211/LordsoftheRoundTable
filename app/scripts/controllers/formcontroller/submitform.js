/* angular Firebase */

(function(){
  'use strict';

  angular.module('lotrt')

  .controller('SubmitForm', function($scope, $stateParams){

var firebaseSub = new Firebase('https://lotrttest.firebaseio.com');

var startGroup = firebaseSub.child('newGroup');

startGroup.set( {

  test: {
    'date_of_game': $scope.date_game
  }
});
  console.log(startGroup);





  }); //end of SubmitForm controller



})();
