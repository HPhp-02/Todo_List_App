document.getElementById("but").addEventListener("click", () => {
    let value = document.getElementById("in").value;
    if(value){
    let li = document.createElement("li"); 
    li.innerHTML = `<li class="li"><div class="div">${value}</div><button class="done">Done</button><button class="delete">Delete</button></li>`;
    document.getElementById("content").appendChild(li);
    document.getElementById("in").value="";
    save();
    }
});
document.getElementById("content").addEventListener("click",(e)=>{
  if(e.target.className === "delete")
   {e.target.parentElement.parentElement.remove();save()}
  else if(e.target.className==="done")
  {
   let a=e.target.parentElement.querySelector(".div");
   if(a.style.textDecoration==="line-through")a.style.textDecoration="none";
   else a.style.textDecoration="line-through";
   save();
  }
})
document.getElementById("all").addEventListener("click", () => {
    let choice=confirm("Do you really wants to delete all TODOS");
    if(choice==true){
    localStorage.removeItem("data");
    show();
    }
});
function save(){
    localStorage.setItem("data",document.getElementById("content").innerHTML);
}
function save1(){
    localStorage.setItem("data",'');
}
function show(){
    document.getElementById("content").innerHTML=localStorage.getItem("data");
}
show();