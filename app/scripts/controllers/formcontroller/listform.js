/* global angular */


(function(){
'use strict';

angular.module('lotrt')
.controller('ListController', function(FIREBASE_URL,  $firebaseArray){

var self = this;
 this.list = [ ];
 var gameList = new Firebase(FIREBASE_URL + '/newGroup')
 this.list = $firebaseArray(gameList);
 console.log(self.list);










}); //END controller






})(); //end IFFE
