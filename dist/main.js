var buttonInput = document.getElementById("submit-btn");
var messageInput = document.getElementById("input-box");
var messageList = document.getElementById("message-list");
var clearButton = document.getElementById("clear");
var list = [];
buttonInput.addEventListener("click", onButtonClick);
// buttonInput.addEventListener("click", render);
messageInput.addEventListener("keyup", pressEnter);
// messageInput.addEventListener("keyup", render);
clearButton.addEventListener("click", clear);

function onButtonClick(e) {
	if (messageInput.value == ""){
		alert("Please type something!");
	}
	else {
	// messageList.innerHTML += "<li>" + messageInput.value + "</li>";
	// messageList += 
	list.push(messageInput.value);
	messageInput.value = "";
	console.log(list);
	render();
	}
}

function pressEnter(e){
	if(event.keyCode === 13){
		if (messageInput.value == ""){
		alert("Please type something!");
		}
		else{
		// messageList.innerHTML += "<li>" + messageInput.value + "</li>";
		// messageList += 
		list.push(messageInput.value);
		messageInput.value="";
		console.log(list);
		render();
		}
	}
	 
}

function clear(e){
	list = [];
	messageList.innerHTML = "";
}

function render(e){
	for(var i = 0; i<list.length; i++){
		console.log(list[i]);
		messageList.innerHTML += "<li>" + list[i] + "</li>";
		list = [];
	}
	console.log(messageList);
	console.log(messageList.innerHTML);
}











