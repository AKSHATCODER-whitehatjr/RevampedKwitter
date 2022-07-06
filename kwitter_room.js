// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD7HULYQXn9uRjGmJ8W2pN66cAWK4pw5kk",
      authDomain: "kwitter-project-b66f5.firebaseapp.com",
      projectId: "kwitter-project-b66f5",
      storageBucket: "kwitter-project-b66f5.appspot.com",
      messagingSenderId: "699018944135",
      appId: "1:699018944135:web:1dff28385f793b21042222"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";     
}
