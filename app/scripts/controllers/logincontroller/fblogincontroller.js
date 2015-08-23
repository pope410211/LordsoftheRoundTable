/* global angular Firebase */
(function(){
  'use strict';

  angular.module('lotrt')

  .controller('LoginControllerFb', function(FIREBASE_URL, $http){


    var firebaseFB = new Firebase(FIREBASE_URL);


firebaseFB.authWithOAuthPopup('facebook', function(error, authData) {
  if (error) {
    console.log('Login Failed!', error);
  } else {
    // the access token will allow us to make Open Graph API calls
    console.log('this is token', authData.facebook.accessToken);
  }
}, {
  remember: 'sessionOnly',
  scope: 'public_profile, user_birthday, user_location, email' // the permissions requested

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
     case 'facebook':
       return authData.facebook.displayName;
     }
   }

   function getEmail(authData){
     switch (authData.provider) {
       case 'facebook':
         return authData.facebook.email;

     }
   }
   var isNewUser = true;

   firebaseFB.onAuth(function(authData) {
     if (authData && isNewUser) {
       // save the user's profile into the database so we can list users,
       // use them in Security and Firebase Rules, and show profiles
       firebaseFB.child('users').child(authData.uid).set({
         provider: authData.provider,
         name: getName(authData),
         email: getEmail(authData)


       });
     }
    //  console.log('gots the data');
   }); //end newUser Auth


firebaseFB.onAuth(function(authData){



   $http.get('https://graph.facebook.com/v2.4/me?access_token=' + authData.facebook.accessToken + '&fields=id,name,picture{height,width,url},age_range,birthday,location').
    success(function(data, status, headers, config) {
       // this callback will be called asynchronously
       // when the response is available
       console.log('yay', data, status, headers, config);
     }).
     error(function(data, status, headers, config) {
       console.log('boo', data, status, headers, config);
       // called asynchronously if an error occurs
       // or server returns response with an error status.
     });
});// token auth

}); //end .controller('LoginController')


})(window);
