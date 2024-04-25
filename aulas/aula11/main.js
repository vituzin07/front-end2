function fazerLogin() {
  let emailInserido = document.getElementById('email').value;
  let senhaInserida = document.getElementById('password').value;

  const credenciais = {
    email: emailInserido,
    password: senhaInserida
  };

  fetch('https://reqres.in/api/login', {
    method: 'POST',
    body: JSON.stringify(credenciais),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json())
  .then((json) => {
    let boasVindas = document.getElementById('boas-vindas');

    if(json.token) {
      boasVindas.innerText = 'Bem-vindo ' + emailInserido;
      boasVindas.style = "background-color: green; color: white";
    } else {
      boasVindas.innerText = 'Email ou senha incorreto';
      boasVindas.style = "background-color: red; color: white";
    }
  
  }); 
}

function registro(){
  let emailcadastrado = document.getElementById('email').value;
  let senhacadastrada = document.getElementById('senha').value;

  const credenciaiscadastradas = {
    email: emailcadastrado,
    password: senhacadastrada
  }

  fetch('https://reqres.in/api/register', {
    method: 'POST', 
    body: JSON.stringify(credenciaiscadastradas),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((reponse) => reponse.json())
  .then((json) => {
    let cadastro = document.getElementById("cadastro");
    
    if(json.token){
      cadastro.innerText = "Esse usuário foi cadastrado" + emailcadastrado;
      cadastro.style = "background-color: green; color: white";
    } else{
      cadastro.innerText = "Usuário não cadastrado"
    }

  })
}
