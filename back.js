let story = document.querySelector("textarea");
let button = document.querySelector("button");
let h3 = document.querySelector("h3");
button.addEventListener("click",function(){
    let written = document.createElement("h3");
    written.innerText = story.value;
    h3.appendChild(written);
    let deletebutton = document.createElement("button");
    deletebutton.innerText = "delete";
    deletebutton.classList.add("delete");
    written.appendChild(deletebutton);
    story.value="";
});
h3.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let eventName = event.target.parentElement;
        console.log(eventName);
        eventName.remove();
        console.log("deleted");
    }
});


// let buttons = document.querySelectorAll(".delete");
// for(deletebutton of buttons){
//     deletebutton.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }