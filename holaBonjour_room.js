// Your web app's Firebase configuration
 firebaseConfig = {
    apiKey: "AIzaSyCTCEfeMoXLR0PaplzslFi3EgIgZ0AlAso",
    authDomain: "hola-bonjour-74786.firebaseapp.com",
    databaseURL: "https://hola-bonjour-74786-default-rtdb.firebaseio.com/",
    projectId: "hola-bonjour-74786",
    storageBucket: "hola-bonjour-74786.appspot.com",
    messagingSenderId: "614456321192",
    appId: "1:614456321192:web:50ddef646b35972bd88e9d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


 user_name =  localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome"+" "+user_name+"!"

  function Addroom(){
room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"add room"

      });
      localStorage.setItem("room_name",room_name);
      window.location="holaBonjour_roompage.html"
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ 
Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;

});});}
getData();

function redirectToRoomName(roomName){
      localStorage.setItem("room_name",roomName);
      window.location="holaBonjour_roompage.html";
}

function Logout(){
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_value")
      window.location = "index.html";
}





 