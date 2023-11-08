/* 1 Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo",
mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".*

diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}*/

// 2 Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
numero = prompt ('Digite um numero positivo ou negativo:');
if (numero > 0){
    alert('esse numero é positivo');
} else {
    alert('esse numero é negativo');
}

/* 3 Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100,
mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".*/
pontuacao = 105;
if (pontuacao > 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}

/* 4  Crie uma mensagem que informa o usuário sobre o saldo da conta,
usando uma template string para incluir o valor do saldo. */

const saldo = 100;
alert(`Seu saldo da conta é R$ ${saldo}`);

/* 5 Peça ao usuário para inserir seu nome usando prompt.
Em seguida, mostre um alerta de boas-vindas usando esse nome.*/
const nome = prompt ('Por favor informe seu nome:')
alert(`Bem vindo ${nome}`);