//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDEZ9_bqRWRVoYZYOZS7R9AjGn1hdnnD9M",
      authDomain: "france-paris-cheese.firebaseapp.com",
      databaseURL: "https://france-paris-cheese-default-rtdb.firebaseio.com",
      projectId: "france-paris-cheese",
      storageBucket: "france-paris-cheese.appspot.com",
      messagingSenderId: "771011888768",
      appId: "1:771011888768:web:44c0ba6c2d1960e6a6c865"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}