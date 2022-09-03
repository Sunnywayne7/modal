var openBtn = document.getElementById('openBtn');

var closeBtn = document.getElementById('closeBtn');

var modal = document.getElementById('modal');

openBtn.addEventListener('click', modalOpen);
function modalOpen(){
  modal.style.display = 'block';
}

closeBtn.addEventListener('click', modalClose);
function modalClose(){
  modal.style.display = 'none';
}

window.addEventListener('click', outsideClick);
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }

}
