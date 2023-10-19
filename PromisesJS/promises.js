// criação de promessa ↓↓↓↓↓↓
// instanciando a classe em uma variável (para conseguirmos utilizar essa promessa)
// temos como argumento da função anônima, dentro do "Promise", "resolve" e "reject"
const myPromise = new Promise((resolve, reject) => {

    const nome = "Nicole"; // imaginamos que esse nome chegou de uma requisição externa

    if(nome === "Nicole") {
        resolve("Usuário Nicole encontrado!");
    } else {
        reject("O usuário Nicole não foi encontrado");
    }
})

myPromise.then((data) => {
    console.log(data);
})

// como utilizar o then para tirar mais vantagens da promessa e não precisar tratar esse dados em outro lugar

// encadeamento de then's

const myPromise2 = new Promise((resolve, reject) => {

    const nome = "Nicole"; 

    if(nome === "Nicole") {
        resolve("Usuário Nicole encontrado!");
    } else {
        reject("O usuário Nicole não foi encontrado");
    }
})

myPromise2
    .then((data) => {
        return data.toLowerCase();
    })
    .then((stringModificada) => {
        console.log(stringModificada)
    })

// retorno do catch

const myPromise3 = new Promise((resolve, reject) => {

    const nome = "João"; // imaginamos que esse nome chegou de uma requisição externa

    if(nome === "Nicole") {
        resolve("Usuário Nicole encontrado!");
    } else {
        reject("O usuário Nicole não foi encontrado");
    }
})

// aqui cai no reject ↓

// como tratar o reject para não cair no exception, mas sim algo que seja útil para o programador/usuário? Utilizamos a instrução chamada "catch" no "then" para tratar o que recebemos de erro

myPromise3.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log("Aconteceu um erro: " + err);
})

// com o catch podemos utilizar o retorno que é um erro para fazer alguma lógica também, algum fluxo do sistema

// ↓ abaixo iremos tratar do recurso de resolver várias "promessas" de uma vez só

// resolver várias promessas, utilizando o "all" (método que pega várias promessas em um array, tenta executar todas elas e manda uma resposta)

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 ok! Timeout');
    }, 2000);
    
})

// ↓↓↓↓ essas duas abaixo, p2 e p3 , irão esperar dois segundos após a p1 ter sido resolvida para executarem

const p2 = new Promise((resolve, reject) => {
    resolve("P2 ok!");
})

const p3 = new Promise((resolve, reject) => {
    resolve("P3 ok!");
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

// o console abaixo é executado antes de todas as promisses

console.log("Depois do all()");

// várias promessas com "race" -> onde apenas a mais rápida será executada

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P4 ok! Timeout');
    }, 2000);
    
})
const p5 = new Promise((resolve, reject) => {
    resolve("P5 ok!");
})

const p6 = new Promise((resolve, reject) => {
    resolve("P6 ok!");
})

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data)
})

// Fetch request na API do Github
// Fetch API

const userName = "NicoleCarvalh"

// o Fetch retorna uma promessa.

// aqui ele fara a requisição para depois (then) receber alguma coisa

fetch(`https://api.github.com/users/${userName}`, {
    method: "GET",
    headers: {
        Accept: "application/vnd.github.v3+json",
    },
}).then((response) => {
    console.log(typeof response);
    console.log(response);
    return response.json() // utilizamos esse retorno para conseguirmos trabalhar com os dados
}).then((data) => {
    console.log(`O nome do usuário é: ${data.name}`)
}).catch((err) => {
    console.log(`Houve algum erro: ${err}`)
})

