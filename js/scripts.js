
const container = document.querySelector('#container');

let createGrid = function(num) {
	
	for (let i = 0; i < (num*num); i++) {
		let gridBox = document.createElement("div");
		let size = 800 / num;

		gridBox.className = "grid";
		gridBox.style.height = size + "px";
		gridBox.style.width = size + "px";

		container.appendChild(gridBox);
		console.log('box ' + i + ' added');
	}
}

createGrid(16);