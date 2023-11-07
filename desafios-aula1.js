// 1 Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
//alert ("Boas vindas ao nosso site");

// 2 Declare uma variável chamada nome e atribua a ela o valor "Lua".
const lua = "Lua";
console.log(lua);

// 3 Crie uma variável chamada idade e atribua a ela o valor 25.
const idade = 25;
console.log(idade);

// 4 Defina uma variável numeroDeVendas e atribua a ela o valor 50.
const numerodeVendas = 50;
console.log(numerodeVendas)

// 5 Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
const saldoDisponivel = 1000;
console.log(saldoDisponivel)

// 6 Exiba um alerta com o texto "Erro! Preencha todos os campos."
//alert('Erro! Preencha todos os campos.');

/* 7 Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos."
Agora exiba um alerta com o valor da variável mensagemDeErro.*/
const mensagemDeErro = "Erro! Preencha todos os campos."
alert("Mensagem: "+ mensagemDeErro);

// 8 Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
const nome = prompt ('Digite seu nome');

// 9 Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
//const idade2 = prompt ('Digite sua idade');

// 10 Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
const idade2 = prompt ('Digite sua idade');

if (idade2 >= 18) {
    alert('Pode tirar a habilitação')
} else {
    alert('Que pena, não pode tirar a habilitação')
}
    


