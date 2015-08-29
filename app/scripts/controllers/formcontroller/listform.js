/* global angular */


(function(){
'use strict';

angular.module('lotrt')
.controller('ListController', function(FIREBASE_URL,  $firebaseArray){

var self = this;
 this.groupList = [ ];
 var gameList = new Firebase(FIREBASE_URL + '/newGroup')
 this.groupList = $firebaseArray(gameList);
 console.log(self.groupList);










}); //END controller






})(); //end IFFE
