
const firebaseConfig = {
      apiKey: "AIzaSyAvHNwgtOGojrDwxC5uiub_13aEZ3tadYs",
      authDomain: "i-don-t-know-the-name.firebaseapp.com",
      projectId: "i-don-t-know-the-name",
      storageBucket: "i-don-t-know-the-name.appspot.com",
      messagingSenderId: "208210644438",
      appId: "1:208210644438:web:1874bd56137c511a002877"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addUser(){
      user_name = document.getElementById("User_Name").value;
      localStorage.setItem("User_Name", user_name);

          window.location = "kwitter_room.html";
   }
function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}