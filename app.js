alert('Boas vindas ao jogo do número secreto');
//numeroSecreto gerado aleatoriamente até 100
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let numero;
let tentativas = 1;

// While enquanto chute não for igual o numero secreto
while (numero != numeroSecreto) {
    numero = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao numero secreto
    if (numero == numeroSecreto) {
        //PARA aqui se acertar de primeira
        break;
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
//continua aqui caso tenha acertado de primeira para sair fora do while, se não segue o else comentado abaixo
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobiu o número secreto! ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/* DA PRA FAZER DESSA FORMA TAMBEM ENTRETANTO A FORMA ACIMA É MELHOR
if (tentativas > 1){
    alert(`Isso ai! Você descobiu o número secreto! ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Isso ai! Você descobiu o número secreto! ${numeroSecreto} com ${tentativas} tentativa`);
}
*/


