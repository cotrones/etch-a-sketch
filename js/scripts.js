
const container = document.querySelector('#container');

let createGrid = function(num) {
	
	for (let i = 0; i < (num*num); i++) {
		let gridBox = document.createElement("div");
		let size = (800 - (num*2)) / num;

		gridBox.className = "grid";
		gridBox.style.height = size + "px";
		gridBox.style.width = size + "px";
		gridBox.addEventListener('mouseover', sketch);

		container.appendChild(gridBox);
	}
}

let sketch = function(event) {
	event.target.classList.add('sketched');
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