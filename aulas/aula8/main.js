function fazerLogin() {
  let emailInserido = document.getElementById('email').value;
  let senhaInserida = document.getElementById('password').value;

  if (emailInserido == '' || senhaInserida == '') {
    alert('Preencha todos os campos');
    return;
  }

  let boasVindas = document.getElementById('boas-vindas');
  boasVindas.innerText = 'Bem-vindo ' + emailInserido;
  boasVindas.style = "background-color: green; color: white";
}