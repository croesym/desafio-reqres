const login = document.querySelector("#login");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const errorMessage = document.querySelector(".error-message");
const loginbutton = document.querySelector("#loginbutton");
var userData = JSON.parse(sessionStorage.getItem("userData")) || [];

const checkLogin = (username, password) => {
  //Verifica se o usuário existe
  for (let i = 0; i < userData.length; i++) {
    //Percorre o array de usuários
    if (username === userData[i].email && password === userData[i].password) {
      //Verifica se o usuário e a senha são iguais aos do array
      return true;
    }
  }
  return false;
};

loginbutton.addEventListener("click", (e) => {
  //Verifica se o usuário existe
  e.preventDefault();
  if (checkLogin(username.value, password.value)) {
    alert("Login efetuado com sucesso!");
    window.location.href = "lista-usuarios.html";
  } else {
    errorMessage.textContent = "Usuário ou senha incorretos.";
  }
});
