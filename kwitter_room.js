
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAUC2HxVS_3aXXnkMFN-y9oaO0xY0BDjrE",
      authDomain: "kwitter-3acc8.firebaseapp.com",
      projectId: "kwitter-3acc8",
      storageBucket: "kwitter-3acc8.appspot.com",
      messagingSenderId: "569991615537",
      appId: "1:569991615537:web:d4be2013d65541b3a8b110"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
