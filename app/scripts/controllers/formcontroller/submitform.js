/* global angular Firebase */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function(FIREBASE_URL, groups, $stateParams) {

            this.group = [];

            /**
             * @param {FormController} $form submitted
             */
            this.saveGroup = function($form) {
              // Do nothing is nothing is submitted or if invalid
              if (!$form.$dirty || !$form.$valid) return;

              groups.add(this.group);

              this.group = {};
               // Reset the form...

              // $state.go('submit');

  };
  console.log("YES!", groups);
});//end .controller




})();
