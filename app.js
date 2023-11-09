alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// While enquanto chute não for igual o numero secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 30');
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobiu o número secreto! ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

