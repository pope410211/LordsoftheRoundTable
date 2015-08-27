/* global angular */
(function(){
  'use strict';




angular.module('lotrt')
.factory('$pageArray', function($firebaseArray, FIREBASE_URL) {

  var ref = new Firebase(FIREBASE_URL + '/newGroup');

    return function(ref, field) {
      // create a Paginate reference
      var pageRef = new Firebase.util.Paginate(ref, $id, {maxCacheSize: 250});
      // generate a synchronized array using the special page ref
      var list = $firebaseArray(pageRef);
      // store the "page" scope on the synchronized array for easy access
      list.page = pageRef.page;

      // when the page count loads, update local scope vars
      pageRef.page.onPageCount(function(currentPageCount, couldHaveMore) {
        list.pageCount = currentPageCount;
        list.couldHaveMore = couldHaveMore;
      });

      // when the current page is changed, update local scope vars
      pageRef.page.onPageChange(function(currentPageNumber) {
        list.currentPageNumber = currentPageNumber;
      });

      // load the first page
      pageRef.page.next();

      return list;
    }



});



})();



//   angular.module('lotrt')
//   .factory('games', function() {
//  var games = [];
//
//  return {
//    // CREATE
//    add: function(game) {
//      game.createdOn = new Date;
//
//      // Record the submission...
//      games.push(game);
//
//      // TODO: Maybe POST this to Firebase one day?
//    },
//    // READ
//    all: function() {
//      return games.slice();
//    // TODO: Maybe fetch from Firebase one day?
//    }
//    // UPDATE?
//    // DELETE?
//  };
// }); // END module
