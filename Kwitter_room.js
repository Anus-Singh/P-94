const firebaseConfig = {
    apiKey: "AIzaSyC2KocQYc3y7Ep407oc4NqNTUd4bLU2P78",
    authDomain: "medi-chat-5f1af.firebaseapp.com",
    databaseURL: "https://medi-chat-5f1af-default-rtdb.firebaseio.com",
    projectId: "medi-chat-5f1af",
    storageBucket: "medi-chat-5f1af.appspot.com",
    messagingSenderId: "75057474647",
    appId: "1:75057474647:web:db6363454ff801993ac712"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
    });});}
getData();
