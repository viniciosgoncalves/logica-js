alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 29;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 30');

if (chute == numeroSecreto) {
    alert (`Isso ai! Você descobiu o número secreto! ${numeroSecreto}`);
} else {
    alert ('Você errou :(');
}