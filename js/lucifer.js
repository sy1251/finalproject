var canvas = document.getElementById('screen');
var context = canvas.getContext('2d');

var referenceWidth = window.innerWidth * 0.9;
var referenceHeight = window.innerHeight * 0.9;
var pixelratio = window.devicePixelRatio;

var video = document.querySelector('video');
video.addEventListener('loadeddata', init);

function init(){
	canvas.style.width = referenceWidth + 'px';
	canvas.style.height = referenceHeight + 'px';

	canvas.width = referenceWidth * pixelratio;
	canvas.height = referenceHeight * pixelratio;

	context.scale(pixelratio, pixelratio);
	draw();
}

function draw(){
	context.drawImage(video, 0, 0, referenceWidth, referenceHeight);
	var imgdata = context.getImageData(0, 0, canvas.width, canvas.height);
	data = imgdata.data;

	context.clearRect(0, 0, referenceWidth, referenceHeight);

	context.putImageData(imgdata, 0, 0);
	var windows = document.getElementById('window');
	context.drawImage(windows, 0, 0, canvas.width, canvas.height);
	requestAnimationFrame(draw);
}

window.addEventListener('load', init);