setInterval(function() {
	var h1 = document.getElementById("txt");

	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	h1.style.color = 'rgba(' + r + ',' + g + ',' + b + ',0.3)';
}, 100)


function movemouse(e){

	var dog = document.getElementById('dog');

	var x = event.clientX;
	var y = event.clientY;

	dog.style.left = x + 'px';
	dog.style.top = y + 'px';
}

window.addEventListener('mousemove', movemouse);