var buttonInput = document.getElementById("submit-btn");
var boxInput = document.getElementById("input-box");
var listContent = document.getElementById("message-list");
var clearButton = document.getElementById("clear");
var list = [];
// window.addEventListener("unload", populateStorage);
buttonInput.addEventListener("click", onButtonClick);
boxInput.addEventListener("keyup", pressEnter);
clearButton.addEventListener("click", clear);
listContent.addEventListener("click", cross);

function onButtonClick(e) {
	if (boxInput.value == ""){
		alert("Please type something!");
	}
	else {
	list.push(boxInput.value);
	boxInput.value = "";
	render();
	}
}
function pressEnter(e){
	if(event.keyCode === 13){
		if (boxInput.value == ""){
		alert("Please type something!");
		}
		else{
		list.push(boxInput.value);
		boxInput.value="";
		render();
		}
	}
}
function clear(e){
	list = [];
	listContent.innerHTML = "";
}
function render(e){
	// listContent.innerHTML = "";
	for(var i = 0; i<list.length; i++){
		listContent.innerHTML += "<li>" + list[i] + "</li>";
		list = [];
	}
}
function cross(e){
	e.target.style.textDecoration = "line-through"
	e.target.style.fontSize = "15px";
}
// function populateStorage(){
// 	localStorage.setItem("todolist",JSON.stringify(list));

// }
// if(localStorage.getItem("todolist") !== ""){
// 	var restore = JSON.parse(localStorage.getItem("todolist"));
// 	list = restore;
// 	listContent.innerHTML += "Hit Submit to continue.";
// }


