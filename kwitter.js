// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDEZ9_bqRWRVoYZYOZS7R9AjGn1hdnnD9M",
  authDomain: "france-paris-cheese.firebaseapp.com",
  databaseURL: "https://france-paris-cheese-default-rtdb.firebaseio.com",
  projectId: "france-paris-cheese",
  storageBucket: "france-paris-cheese.appspot.com",
  messagingSenderId: "771011888768",
  appId: "1:771011888768:web:44c0ba6c2d1960e6a6c865"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addUser() {
  
    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
  