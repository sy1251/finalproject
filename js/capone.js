var canvas = document.getElementById('screen');
canvas.width = 1280;
canvas.height = 720;
var context = canvas.getContext('2d');
var confettis = [];
var num = 1000;

function colorGenerator(){
	var colors = ['#EE7571', '#F3BB8A', '#F3F38A', '#93C888', '#88C8B5', '#8890C8', '#AA88C8'];
	var randomNum = Math.floor(Math.random()*colors.length);
	return colors[randomNum];
}

function init(){
	for(var i = confettis.length - 1; 0 <= i; i--){
		let conf = confettis[i];
		if(conf.y > canvas.height){
			confettis.splice(i, 1);
		}
		conf.y += conf.gravity;
		conf.rotation += conf.rotationSpeed;
	}
	setTimeout(init, 1);
}

function draw(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	confettis.forEach(function(sample){
		context.save();
		context.fillStyle = sample.color;
		context.translate(sample.x, sample.y);
		context.rotate(sample.rotation);
		context.fillRect(-sample.size, -sample.size, sample.size, sample.size)
		context.restore();
	})
	requestAnimationFrame(draw);
}

function makeConfetti(x, y){
	this.x = x;
	this.y = y;
	this.size = Math.random() * 15;
	this.gravity = Math.random()* 0.7;
	this.rotation = Math.PI * 2 * Math.random();
	this.rotationSpeed = Math.PI * 2 * Math.random() * 0.006;
	this.color = colorGenerator();
}

while(confettis.length < num){
	var a = Math.random()*canvas.width;
	var b = Math.random()*canvas.height;
	var newPiece = new makeConfetti(a, b);
	confettis.push(newPiece);
}

var balloon = document.getElementById('balloon');
var gun = document.getElementById('gun');

balloon.addEventListener('click', function(){
	balloon.style.visibility = 'hidden';
	gun.style.visibility = 'visible';
	init();
	draw();
})