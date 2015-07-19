/* global angular Firebase */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function(FIREBASE_URL, Group, $sate) {

            this.group = {};

            /**
             * @param {FormController} $form submitted
             */
            this.saveGroup = function($form) {
              // Do nothing is nothing is submitted or if invalid
              if (!$form.$dirty || !$form.$valid) return;

              groups.add(this.group);

              this.group = {}; // Reset the form...

              // $state.go('contact-list');
console.log("YES!", saveGroup);
  };
});//end .controller


    

})();
