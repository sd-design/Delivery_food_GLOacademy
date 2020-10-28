const cartButton = document.querySelector("#cart-button");
const authButton = document.querySelector('.button-auth');
const logoutButton = document.querySelector('.button-out');
const loginButton = document.querySelector('.button-login');
const loginForm = document.querySelector('#logInForm');
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const modalAuth = document.querySelector('.modal-auth');
const userName = document.querySelector(".user-name");

authButton.addEventListener("click", toggleModalAuth);
cartButton.addEventListener("click", toggleModal);
logoutButton.addEventListener("click", logOUT);
loginForm.addEventListener("submit", logIN);
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
function changeStatus(){
  authButton.classList.toggle("hidden");
  logoutButton.classList.toggle("hidden");
  if(userName.classList.contains("hidden")){
    userName.insertAdjacentHTML('beforeend',localStorage.getItem('login'))
    userName.classList.remove('hidden')
  }
  else{
    userName.classList.add('hidden')
  }
}

function clearForm(){
  loginForm.reset();
}

function logIN(event){
  event.preventDefault();
  var login = document.querySelector("#login").value
  var password = document.querySelector("#password").value
  console.log(login+' : '+password)
  if(login && password){
    localStorage.setItem('authorizedToken', 'h2020HELLOgloAcademy')
    localStorage.setItem('login', login)
    toggleModalAuth()
    changeStatus()
    clearForm()
  }
  else{
    notify("Неверно введены данные!");
    clearForm()
  }
}

function logOUT(){
  localStorage.clear()
  changeStatus()
}

function checkAuthorizated(){
if(localStorage.getItem('authorizedToken')){
  if(localStorage.getItem('authorizedToken') === 'h2020HELLOgloAcademy'){
console.log('authorization true')
changeStatus()
  }
}
else{
  console.log('authorization false')
}
}

function notify(text){
  alert(text);

}

document.addEventListener("DOMContentLoaded", function(event) { 
  checkAuthorizated()
});