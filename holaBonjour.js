function addUser(){
    user_value=document.getElementById("user_name").value 
    localStorage.setItem("user_name",user_value)
    window.location="holaBonjour_room.html";
}