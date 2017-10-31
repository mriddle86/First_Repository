// Initialize Firebase


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAgG2fk8WKwSk7IvhT6HUI5lMrQCcsP-jk",
    authDomain: "tripstop1-d0a9d.firebaseapp.com",
    databaseURL: "https://tripstop1-d0a9d.firebaseio.com",
    projectId: "tripstop1-d0a9d",
    storageBucket: "tripstop1-d0a9d.appspot.com",
    messagingSenderId: "952146048705"

  };
  firebase.initializeApp(config);


// google auth 
function callGoogleSignIn() {

$("callGoogleSignIn").on("click", function(event){
    event.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider).then(function (result) {
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
           
        }).catch(function (error) {
        });

        firebase.auth().getRedirectResult().then(function (result) {
            if (result.credential) {
                var token = result.credential.accessToken;
            }
            // The signed-in user info.
            var user = result.user;


            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            firebase.auth().signInWithRedirect(provider);


        }).catch(function (error) {
        });
});

}

firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});

var user = firebase.auth().currentUser;

if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: "+profile.providerId);
    console.log("  Provider-specific UID: "+profile.uid);
    console.log("  Name: "+profile.displayName);
    console.log("  Email: "+profile.email);
    console.log("  Photo URL: "+profile.photoURL);
  });
}



// function onSignIn(googleUser) {
       
//     var profile = googleUser.getBasicProfile();
//     console.log("ID: " + profile.getId()); 
//     console.log('Full Name: ' + profile.getName());
//     console.log('Given Name: ' + profile.getGivenName());
//     console.log('Family Name: ' + profile.getFamilyName());
//     console.log("Image URL: " + profile.getImageUrl());
//     console.log("Email: " + profile.getEmail());

        
//     var id_token = googleUser.getAuthResponse().id_token;
//     console.log("ID Token: " + id_token);
//   };


//   function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       console.log('User signed out.');
//     });
//   }
//keeps track of step of the process. We start on step "directions"
//steps: directions, place-marker, select-station




