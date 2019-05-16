function main() {
  addListeners();
}
addEventListener('load',main);
var clique = document.getElementsByClassName('card');
function showInfo(x) {
  removeListeners();

  var modal = document.getElementsByClassName('modal')[x];
      modal.style.display = 'block';
  var close = modal.getElementsByClassName('close')[0];
      close.addEventListener('click',hideInfo);
  document.getElementById('overlay').addEventListener('click',hideInfo);
  tur = 1;
}

function hideInfo() {
  var boxes = document.querySelectorAll('.modal');
  for (var i=0;i<boxes.length;i++) {
    boxes[i].style.display = 'none';
  }
  addListeners();
  stp();
}

function addListeners() {
  var boxes = document.querySelectorAll('.card');
  for (var i=0;i<boxes.length;i++) {
    boxes[i].addEventListener('click',showInfo.bind(boxes[i]));
  }
  handleOverlay('none');
}

function removeListeners() {
  var boxes = document.querySelectorAll('.card');
  for (var i=0;i<boxes.length;i++) {
    boxes[i].removeEventListener('click',showInfo);
  }
  handleOverlay('block');
}

function handleOverlay(status) {
  var overlay = document.getElementById('overlay');
      overlay.style.display = status;
}

  function lect(y){ 
    document.getElementById(y).play();
  }
  function stp(){
    const elm = document.getElementsByTagName('audio');
    for(i=0; i<elm.length ; i++){
      elm[i].stop();
    }
  }