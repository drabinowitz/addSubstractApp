window.onload=function(){

	var xInput = document.getElementById("xInput");

	var yInput = document.getElementById("yInput");

	var addButton = document.getElementById("addButton");

	var subtractButton = document.getElementById("subtractButton");

	var result = document.getElementById("result");

	addButton.addEventListener("click", function(){

		if(+xInput.value && +yInput.value){

			result.innerHTML = "X plus Y is " + (+xInput.value + +yInput.value);

		} else {errorDisplay()};

	});

	subtractButton.addEventListener("click", function(){

		if(+xInput.value && +yInput.value){

			result.innerHTML = "X minus Y is " + (+xInput.value - +yInput.value);

		} else {errorDisplay()};

	});

};

function errorDisplay(){

	alert("please input a numeric value for X and Y");

};