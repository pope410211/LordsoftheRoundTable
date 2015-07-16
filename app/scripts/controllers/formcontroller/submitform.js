/* global angular Firebase */
(function(){
  'use strict';

    angular.module('lotrt')
      .controller('submitForm', function ($scope, $firebaseArray) {



      var submitForm = new Firebase('https://lotrttest.firebaseio.com');
      $scope.list = $firebaseArray(submitForm);


      $scope.submit = function() {
        $scope.list.$add({
          date: $scope.playDate,
          groupName: $scope.groupName
        });
        $scope.date = '';
        $scope.groupName = '';



      };
      console.log($scope.list);
    })


})();
