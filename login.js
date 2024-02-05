let username = document.querySelector("#name");
let password = document.querySelector("#password");
let button = document.querySelector("button");
document.getElementById("btn").addEventListener("click", function(){
    if(username.value == "snehith" && password.value == "sacversatales"){
       function openfile() {
          var fileUrl = "file:///C:/VERSATALES/html/dashboard.html";
          window.location.href = fileUrl;
       }
       openfile();
       console.log("snehith");
    }
    return false;
});
