// 1 Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Boas vindas!");

// 2 Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
const nome = "Vinicios";
console.log(`Olá, ${nome}`);

// 3 Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
//const nome2 = "Vinicios";
//alert(`Olá, ${nome2}`);

// 4 Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
//linguagemFavorita = prompt ("Qual a linguagem de programação que você mais gosta?");
//console.log(linguagemFavorita);

// 5 Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
const valor1 = 5;
const valor2 = 10;

const resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// 6 Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
const valor3 = 5;
const valor4 = 10;
const resultado2 = valor1 + valor2;
console.log(`A soma de ${valor3} e ${valor4} é igual a ${resultado2}.`);

// 7 Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
// idade = prompt ('Qual sua idade?');

// if (idade >= 18){
//     console.log('Você é maior de idade!');
// }

// 8 Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
// numero = prompt ("Insira um numero positivo ou negativo");
// if (numero >= 0){
//     alert(`O numero ${numero} é positivo`);
// } else {
//     alert(`O numero ${numero} é negativo`);
// }

// 9 Use um loop while para imprimir os números de 1 a 10 no console.
let contador = 1;
while (contador <= 10){
    console.log(contador);
    contador++;
}

// 10 Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
const nota = 6;
if (nota >= 7){
    console.log("Aprovado!");
} else {
    console.log("Reprovado!");
}

// 11 Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numero = parseInt(Math.random() * 100 + 1);
console.log(numero);

// 12 Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numero2 = parseInt(Math.random() * 10 + 1);
console.log(numero2);

// 13 Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numero3 = parseInt(Math.random() * 1000 + 1);
console.log(numero3);