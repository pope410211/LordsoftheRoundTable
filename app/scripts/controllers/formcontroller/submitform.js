/* angular Firebase */

(function(){
  'use strict';

  angular.module('lotrt')

  .controller('SubmitForm', function(){

var firebaseSub = new Firebase('https://lotrttest.firebaseio.com');

var startGroup = firebaseSub.child('newGroup').child('placeholder').set({
    date_of_game: " ",
    name_of_group: " ",
    location_of_game: " ",
    type_of_game: " ",
    description: " "

});
  console.log(startGroup);





  }); //end of SubmitForm controller



})();
