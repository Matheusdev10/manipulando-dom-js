function login(email, senha) {
  const inputEmail = document.getElementById('email');
  inputEmail.value = email;
  const inputSenha = document.getElementById('pass');
  inputSenha.value = senha;
  const btnLogin = document.getElementsByName('login');
  btnLogin[0].click();
}

var pessoa = {
  nome: 'matheus',
  sobrenome: 'campos',
  namorada: 'jessica',
  sobrenome: 'rodrigues',
};

console.log(`${pessoa.nome} namora com ${pessoa.namorada}`);

const nota = 0;

for (let nota = 0; nota <= 10; nota++) {
  const notas = nota;
  if (notas === nota) prompt('tudo bem');
  else {
    console.log('digite outra nota');
  }
}

function dados(usuario, senha) {
  if (usuario === senha) {
    console.log(
      'a senha nao pode ser igual ao nome de usuario, preencha o campo novamente'
    );
  } else {
    console.log('cadastro realizado com sucesso');
  }
}

dados('matheus', '383833');

const populacaoA = 80000;
const taxaCrescimento = 0.03;
const populacaoB = 200000;
const taxaCrescimentoB = 0.015;
