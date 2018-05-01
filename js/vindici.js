var canvas = document.getElementById('screen');
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.9;
var context = canvas.getContext('2d');

function draw(){
	var img = new Image();
	var masks = ['media/mask1.png', 'media/mask2.png', 'media/mask3.png'];
	var rand = Math.floor(Math.random()*masks.length);
	img.src = masks[rand];
	var x = Math.random()* (canvas.width + 200);
	var y = Math.random()* (canvas.height + 270);
	context.drawImage(img, x, y);
	if(num%2 === 0){
		requestAnimationFrame(draw);
	}
}

var mask = document.getElementById('mask');

var num = 1;

mask.addEventListener('click', function(){
	num ++;
	draw();

})