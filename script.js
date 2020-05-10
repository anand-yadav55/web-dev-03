const list=document.querySelector(".contributers ol");
list.innerText="";
let count=1;
let button = document.getElementById("add-contributor");
button.onclick=function(){
	if(count<5){
	let contributerName = prompt("Enter your Name");

	let listItem=document.createElement("li");
	listItem.textContent=contributerName;
	list.appendChild(listItem);
	}
	else
		alert("too many names");
}