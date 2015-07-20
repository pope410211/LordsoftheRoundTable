/* global angular */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function(FIREBASE_URL, groups) {
 var self = this;


            this.group = [];

            /**
             * @param {FormController} $form submitted
             */
            self.saveGroup = function($form) {
              // Do nothing is nothing if submitted or if invalid
              if (!$form.$dirty || !$form.$valid) {

               return;

              groups.add(self.group);

              self.groups = {};
               // Reset the form...


}
  };
  console.log('yes', groups);
});//end .controller




})();
