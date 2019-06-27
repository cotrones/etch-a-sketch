
const container = document.querySelector('#container');

let sketchStyle = "classic";
const classic = document.querySelector('#classic');
classic.onclick = function() {
	sketchStyle = "classic";
	classic.classList.add("bold");
	colorful.classList.remove("bold");
	brush.classList.remove("bold");
}

const colorful = document.querySelector('#colorful');
colorful.onclick = function() {
	sketchStyle = "colorful";
	classic.classList.remove("bold");
	colorful.classList.add("bold");
	brush.classList.remove("bold");
}

const brush = document.querySelector('#brush');
brush.onclick = function() {
	sketchStyle = "brush";
	classic.classList.remove("bold");
	colorful.classList.remove("bold");
	brush.classList.add("bold");
}

let createGrid = function(num) {
	
	for (let i = 0; i < (num*num); i++) {
		let gridBox = document.createElement("div");
		let size = 800 / num;

		gridBox.className = "grid";
		gridBox.style.height = size + "px";
		gridBox.style.width = size + "px";
		gridBox.addEventListener('mouseover', sketch);

		container.appendChild(gridBox);
	}
}

let sketch = function(event) {
	switch(sketchStyle){
		case "classic":
			event.target.style.background = "black";
			event.target.style.opacity = 1;
			break;
		case "colorful":
			event.target.style.background = randomColor();
			event.target.style.opacity = 1;
			break;
		case "brush":
			if (event.target.style.background != "black" && event.target.style.opacity == 1) {
				event.target.style.opacity = 0;
			}
			event.target.style.background="black";
			let opacity = Number(event.target.style.opacity);
			opacity += 0.1;
			event.target.style.opacity = opacity;
			break;
	}
}

let randomColor = function() {
	return "rgb(" + Math.random()*255 + ", " + Math.random()*255 + ", " + Math.random()*255 + ")";
}

let reset = function() {
	let result = prompt("How many squares per side? (1-100)");

	if (result < 1) {
		reset();
	} else if(result > 100) {
		reset();
	} else if(isNaN(result)) {
		reset();
	} else {
		container.innerHTML = "";
		createGrid(result);
	}
}

createGrid(16);