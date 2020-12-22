var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");
var input = document.querySelector("input");

function showColors() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";

	css.textContent = color1.value 
	+ "/" 
	+ color2.value
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";

	css.textContent = color1.value 
	+ "/" 
	+ color2.value
}

function randomColor() {
	var newColor = '#' + 
	(Math.random() * 0xFFFFFF << 0).toString(16);
	return newColor;
}

function randomGradient() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomGradient);

input.addEventListener("click", showColors);




