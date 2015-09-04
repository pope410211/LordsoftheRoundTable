/* global angular Firebase */
(function(){
  'use strict';

  angular.module('lotrt')

  .controller('LoginControllerFb', function(FIREBASE_URL, $state){

    var firebaseFB = new Firebase(FIREBASE_URL);

    // var fire = $firebaseAuth(firebaseFB);

  // this.auth = authData;

firebaseFB.authWithOAuthPopup('facebook', function(error) {
  if (error) {
    // console.log('Login Failed!', error);
  } else {
    // the access token will allow us to make Open Graph API calls
    // console.log('this is token', authData.facebook.accessToken);
  }
}, {
  remember: 'sessionOnly',
  scope: 'public_profile, user_birthday, user_location' // the permissions requested

  // note to self adjust user_photos to original info...
});

function authDataCallback(authData) {
  if (authData) {
    // console.log('User ' + authData.uid + ' is logged in with ' + authData.provider);
  } else {
    // console.log('User is logged out');
  }
}
firebaseFB.onAuth(authDataCallback);


function getName(authData) {
  switch(authData.provider) {
     case 'facebook':
       return authData.facebook.displayName;
     }
   }

   var isNewUser = true;

   firebaseFB.onAuth(function(authData) {
     if (authData && isNewUser) {
       // save the user's profile into the database so we can list users,
       // use them in Security and Firebase Rules, and show profiles
       firebaseFB.child('users').child(authData.uid).set({
         provider: authData.provider,
         name: getName(authData)


       });
       $state.go('myprofile');
     }
   }); //end newUser Auth



}); //end .controller('LoginController')


})(window);
