// let usuariosCadastrados = {
//   usuario1: { nome: "Leticia", deveProBanco: "Sim" },
//   usuario2: { nome: "Flavio", deveProBanco: "Não, graças a deus" },
//   usuario3: { nome: "Rogério", deveProBanco: "Apenas um rim" },
// };

let usuariosCadastradosLista = [
  { nome: "Leticia", deveProBanco: "Sim" },
  { nome: "Flavio", deveProBanco: "Não, graças a deus" },
  { nome: "Rogério", deveProBanco: "Apenas um rim" },
];

usuariosCadastradosLista.forEach((element) => {});
//let arrowFunction = () => {}; //atribuição de uma função anônima para uma varável chamada arrowFunction
usuariosCadastradosLista.forEach(function (usuarioAtual) {
  console.log(usuarioAtual.nome);
});
// console.log(usuariosCadastrados.usuario1.nome);
// console.log(usuariosCadastradosLista[0].nome);

// function verificadorDeAcesso(y, x = 0) {
//   if (x == 0 && y.acesso == 1) {
//     alert("Desculpe, você não tem acesso");
//   } else {
//     alert("Yay! Você pode acessar");
//   }
// }

// verificadorDeAcesso({ acesso: 1 });

export { usuariosCadastradosLista };
