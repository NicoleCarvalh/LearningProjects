let primeiroValor = prompt("Qual o primeiro valor a ser digitado?");

// // console.log( == NaN);
// console.log(isNaN(primeiroValor / 2));

while (isNaN(primeiroValor / 2)) {
  alert("Você não colocou um número");
  primeiroValor = Number(prompt("Qual o primeiro valor a ser digitado?"));
}

let segundoValor = Number(prompt("Qual o segundo valor?"));

while (isNaN(segundoValor / 2)) {
  alert("Você não colocou um número");
  segundoValor = Number(prompt("Qual o segundo valor a ser digitado?"));
}

let operacaoEscolhida = Number(
  prompt(`Escolha uma das operações abaixo:
  1 - Adição
  2 - Subtração
  3 - Multiplicação
  4 - Divisão
`)
);

while (
  isNaN(operacaoEscolhida / 2) ||
  ![1, 2, 3, 4].includes(operacaoEscolhida)
) {
  alert("Você não colocou uma opção válida");
  operacaoEscolhida = Number(
    prompt(`Escolha uma das operações abaixo:
    1 - Adição
    2 - Subtração
    3 - Multiplicação
    4 - Divisão
  `)
  );
}

let resultado = 0;

switch (operacaoEscolhida) {
  case 1:
    resultado = primeiroValor + segundoValor;
    break;

  case 2:
    resultado = primeiroValor - segundoValor;
    break;

  case 3:
    resultado = primeiroValor * segundoValor;
    break;

  case 4:
    resultado = primeiroValor / segundoValor;
    break;
}

alert(`O resultado da sua operação é ${resultado}`);
