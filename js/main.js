const cartButton = document.querySelector("#cart-button");
const authButton = document.querySelector('.button-auth');
const loginButton = document.querySelector('.button-login');
const loginForm = document.querySelector('#logInForm');
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const modalAuth = document.querySelector('.modal-auth');

authButton.addEventListener("click", toggleModalAuth);
cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

modalAuth.addEventListener('click', function(event){
  if(event.target.classList.contains('is-open')){
    toggleModalAuth()
    clearForm()
  }
  if(event.target.classList.contains('close-auth')){
    toggleModalAuth()
    clearForm()
  }
});

function toggleModal() {
  modal.classList.toggle("is-open");
}


function toggleModalAuth() {
  modalAuth.classList.toggle("is-open");
  if(modalAuth.classList.contains("is-open")){
    disableScroll();
  }
  else{
    enableScroll();
  } 
}

function clearForm(){
  loginForm.reset();
}

function authorizated(){

}

function notAuthorized(){
  alert('Вы не авторизованы!');

}