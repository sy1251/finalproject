setInterval(function() {
	var h1 = document.getElementById("txt");

	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	h1.style.color = 'rgba(' + r + ',' + g + ',' + b + ',0.3)';
}, 100)