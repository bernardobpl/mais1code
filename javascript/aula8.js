const cadastro = {
  email: 'bernardo@teste.com',
  senha: '123456',
  cpf: '123.456.789-00',
  nacionalidade: 'brasil',
  idade: '20'
}
console.log(cadastro.email)

const inputEmail = 'mariaclara@teste.com'
const tamanhoDoEmail = inputEmail.length

cadastro.email = ''

for(let contador=0; contador<tamanhoDoEmail; contador++ ){
  let proximaLetra = inputEmail[contador]
  cadastro.email = cadastro.email + proximaLetra 
}

console.log(cadastro.email)