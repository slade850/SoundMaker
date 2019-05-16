var onOff=0;
function mod(){ // fonction lv appeler par onClick permet d'activer ou désactiver la fonction lv2
if(onOff == 0){
  onOff = 1;
}
else{
  onOff = 0;
}

mod2();
}
function mod2() {
    
    var modal = document.getElementsByClassName('modal')[0];
        modal.style.display = 'block';
    var close = modal.getElementsByClassName('close')[0];
        close.addEventListener('click',hideInfo);
    document.getElementById('overlay').addEventListener('click',hideInfo);
  }
  function hideInfo() {
    var boxes = document.querySelectorAll('.modal');
    for (var i=0;i<boxes.length;i++) {
      boxes[i].style.display = 'none';
}}