alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 29;
console.log(numeroSecreto);
let numero;
let tentativas = 1;

// While enquanto chute não for igual o numero secreto
while (numero != numeroSecreto) {
    numero = prompt('Escolha um número entre 1 e 30');
    // se chute for igual ao numero secreto
    if (numero == numeroSecreto) {
        alert(`Isso ai! Você descobiu o número secreto! ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (numero > numeroSecreto) {
            alert(`O número secreto é menor que ${numero}`);
        } else {
            alert(`O número secreto é maior que ${numero}`);
        }
        // encrementa mais 1 na variavel tentativas
        tentativas++;
    }
}

