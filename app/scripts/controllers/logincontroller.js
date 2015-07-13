/* global angular Firebase */
(function(){
  'use strict';

  angular.module('lotrt')

  .controller('LoginController', function(){


    var firebaseFB = new Firebase('https://lotrttest.firebaseio.com');


firebaseFB.authWithOAuthPopup('facebook', function(error, authData) {
  if (error) {
    console.log('Login Failed!', error);
  } else {
    // the access token will allow us to make Open Graph API calls
    console.log(authData.facebook.accessToken);
  }
}, {
  remember: 'sessionOnly',
  scope: 'public_profile' // the permissions requested

  // note to self adjust user_photos to original info...
});

function authDataCallback(authData) {
  if (authData) {
    console.log('User ' + authData.uid + ' is logged in with ' + authData.provider);
  } else {
    console.log('User is logged out');
  }
}
firebaseFB.onAuth(authDataCallback);






function getName(authData) {
  switch(authData.provider) {
     case 'password':
       return authData.password.email.replace(/@.*/, '');
     case 'twitter':
       return authData.twitter.displayName;
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
     }
     console.log('work');
   }); //end newUser Auth
}); //end .controller('LoginController')


})();
