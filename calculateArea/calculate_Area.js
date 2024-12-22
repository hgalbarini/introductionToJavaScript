let lenght;
let width;

function calculateArea() {
	lenght = parseFloat(document.getElementById('lenght').value);
	width = parseFloat(docunent.getElementById('width').value);
	
	let area = length * width;
	document.getElementById('result').innerText = 'The area of the rectangle is: ${area}';
}

