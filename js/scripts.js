
const container = document.querySelector('#container');

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
	event.target.classList.add('sketched');
}

createGrid(16);