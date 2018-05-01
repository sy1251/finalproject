var squares = document.querySelectorAll('.poster');
var xBrowserRatio = window.innerWidth / 120;

function mouseMove(e) {
  var xPos = e.clientX;
  updateRotation(xPos);
}

function updateRotation(xPos) {

  var yRotation = (-60 + Math.ceil(xPos / xBrowserRatio));

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.transform = 'rotateY(' + yRotation + 'deg)';
  } 
}

window.addEventListener('mousemove', mouseMove, false);

var loki = document.getElementById('loki');
loki.addEventListener('click', function(){
  window.location = 'loki.html';
})

var lucifer = document.getElementById('lucifer');
lucifer.addEventListener('click', function(){
  window.location = 'lucifer.html';
})

var vindici = document.getElementById('vindici');
vindici.addEventListener('click', function(){
  window.location = 'vindici.html';
})