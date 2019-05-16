function main() {
  addListeners();
}
addEventListener('load',main);

function showInfo() {
  removeListeners();
  
  var modal = this.parentNode.getElementsByClassName('modal');
      modal.style.display = 'block';
  var close = modal.getElementsByClassName('close');
      close.addEventListener('click',hideInfo);
  document.getElementById('overlay').addEventListener('click',hideInfo);
}

function hideInfo() {
  var boxes = document.querySelectorAll('.modal');
  for (var i=0;i<boxes.length;i++) {
    boxes[i].style.display = 'none';
  }
  addListeners();
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
  function lect(){
  document.getElementById("sp").play();
  }