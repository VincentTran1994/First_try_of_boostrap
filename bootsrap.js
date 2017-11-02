
var button = document.querySelector("h1");

var body = document.querySelector("body");

var isWhite = true;
button.addEventListener("click" , function (){
	if(isWhite){
		body.style.background = "pink";
		isWhite = false;
	}
	else{
		body.style.background = "white";
		isWhite = true;
	}
	
	});

//for(var  i = 0; i < button.length ; i++){
//	button[i].addEventListener("click" , function (){
//	body.style.background = "pink";
//	});
//}