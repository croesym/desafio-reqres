const form = document.querySelector("#register");
const button = document.querySelector("#regbutton");
const fullname = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordcheck = document.querySelector("#passwordcheck");
const errorMessage = document.querySelector(".error-message");
var userData = JSON.parse(sessionStorage.getItem("userData")) || [];

const saveUser = (user) => {
  //Salva o usuário no sessionStorage
  userData.push(user);
  sessionStorage.setItem("userData", JSON.stringify(userData));
  alert("Usuário cadastrado com sucesso!");
};

email.addEventListener("keyup", () => {
  //Verifica se o email é válido
  if (validatorEmail(email.value) !== true) {
    errorMessage.textContent = "Insira um email no formato: name@abc.com";
    return false;
  } else {
    errorMessage.textContent = "";
    return true;
  }
});

function validatorEmail(email) {
  let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}

const checkPassword = (password, passwordcheck) => {
  //Verifica se as senhas são iguais
  return password === passwordcheck ? true : false;
};

const checkPasswordLength = (password) => {
  //Verifica se a senha tem pelo menos 8 caracteres
  return password.length >= 6 ? true : false;
};

const existingUser = (email) => {
  //Verifica se o usuário já existe
  return userData.some((user) => user.email === email);
};

const checkEmpty = (fullname, email, password, passwordcheck) => {
  //Verifica se os campos estão vazios
  if (
    fullname === "" ||
    email === "" ||
    password === "" ||
    passwordcheck === ""
  ) {
    return true;
  } else {
    return false;
  }
};

const registerUser = () => {
  //Função que registra o usuário
  if (
    checkEmpty(fullname.value, email.value, password.value, passwordcheck.value)
  ) {
    alert("Preencha todos os campos.");
    return;
  }

  if (validatorEmail(email.value) == true) {
    //Verifica se o email é válido
    errorMessage.textContent = "";
  } else {
    alert("Insira um email no formato: name@abc.com");
    email.value = "";
    email.focus();
    return;
  }

  if (!checkPassword(password.value, passwordcheck.value)) {
    alert("As senhas não coincidem. Tente novamente.");
    passwordcheck.value = "";
    passwordcheck.focus();
    return;
  }

  if (!checkPasswordLength(password.value)) {
    alert("A senha deve ter pelo menos 6 caracteres. Tente novamente.");
    password.value = "";
    password.focus();
    return;
  }
  const user = {
    fullname: fullname.value,
    email: email.value,
    password: password.value,
  };

  if (existingUser(email.value)) {
    alert("Usuário já cadastrado. Tente novamente.");
    email.value = "";
    email.focus();
    return;
  }

  saveUser(user);
  window.location.href = "index.html";
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  registerUser();
});
