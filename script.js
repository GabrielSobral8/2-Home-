let email = document.getElementById("email");
let senha = document.getElementById("senha");
let form = document.querySelector("form");
let textForm = document.getElementById("textForm");
let textEmail = document.getElementById("textEmail");
let textSenha = document.getElementById("textSenha");

form.addEventListener("submit", (e) => {
  if (email.value == "" && senha.value == "") {
    textForm.textContent = "Preencha todos campos";
  } else if (
    validatorEmail(email.value) === true &&
    validatorSenha(senha.value) === true
  ) {
    console.log(email.value);
    console.log(senha.value);
    textForm.textContent = "";
    textEmail.textContent = "";
    textSenha.textContent = "";
  }

  e.preventDefault();
});

email.addEventListener("keyup", () => {
  if (validatorEmail(email.value) !== true) {
    textEmail.textContent = "O formato do email deve ser Ex: nome@gmail.com";
  } else {
    textEmail.textContent = "";
  }
});

senha.addEventListener("keyup", () => {
  if (validatorSenha(senha.value) !== true) {
    textSenha.textContent =
      "Senha deve ter no mínimo 6 dígitos, incluindo 1 número e 1 caractere especial ";
  } else {
    textSenha.textContent = "";
  }
});

function validatorEmail(email) {
  let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}

function validatorSenha(senha) {
  let senhaPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return senhaPattern.test(senha);
}

