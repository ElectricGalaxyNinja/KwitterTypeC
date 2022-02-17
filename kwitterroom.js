



var firebaseConfig = {
  apiKey: "AIzaSyCplMqGz4j6oA3-Sv7DXdBBJwPokq7kV0Q",
  authDomain: "kwitterapp-94003.firebaseapp.com",
  databaseURL: "https://kwitterapp-94003-default-rtdb.firebaseio.com",
  projectId: "kwitterapp-94003",
  storageBucket: "kwitterapp-94003.appspot.com",
  messagingSenderId: "726140945387",
  appId: "1:726140945387:web:8b71f17e9ee5d4a0388fae"
};
var app = initializeApp(firebaseConfig);
function addRoom(){

  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";

}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
console.log("Room Name - " + Room_names);
row="<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+" </div><hr>";
document.getElementById("output").innerHTML +=row;
      
      });});}

getData();
 function redirectToRoomName(name)
 {
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";

 }
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";1
}