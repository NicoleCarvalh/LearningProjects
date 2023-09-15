let userList = document.getElementsByClassName("userList")[0];

let list = [
    { nome: "Sua BE", idade: 11 },
    { nome: "Sua CE", idade: 12 },
    { nome: "Sua DE", idade: 13 },
    { nome: "Sua EE", idade: 14 },
    { nome: "Sua FE", idade: 15 },
    { nome: "Sua GE", idade: 16 },
    { nome: "Sua HE", idade: 17 },
];

for (let i = 0; i < list.length; i++) {
    let user = document.createElement("li");

    user.textContent = `${list[i].nome} tem ${list[i].idade} anos`

    userList.appendChild(user)
}