let button=document.getElementById("submit");
let addtask=document.getElementById("addTask");
let newtask=document.getElementById("newtask");
let donelist=document.getElementById("donelist");

let list=new Array();


submit.addEventListener("click",(event)=>{
    list.push(addtask.value);
   newtask.innerHTML += '<li id="'+(list.length-1)+'"><button onclick="completed('+(list.length-1)+')">'+addtask.value +'</button></li>'
   addtask.value="";
});
function completed(id){
    donelist.innerHTML +='<li>'+ list[id]+  '</li>'
    document.getElementById(id).style.display="none";
}