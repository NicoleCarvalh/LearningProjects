fetch("https://employees-api-oite.onrender.com/employees", {
  method: "GET",
  headers: {
    "Content-Type": "Application/json",
  },
})
  .then((data) => {
    return data.json();
  })
  .then((json) => {
    list(json);
  });

function list(json) {
  for (let i = 0; i < json.length; i++) {
    let employeeName = json[i].name;
    let employeeEmail = json[i].email;
    let employeeRole = json[i].office;

    let trInfos = document.createElement("tr");

    let tdEmployeeName = document.createElement("td");
    tdEmployeeName.innerText = employeeName;
    tdEmployeeName.classList.add("yellow");

    let tdEmployeeEmail = document.createElement("td");
    tdEmployeeEmail.innerText = employeeEmail;

    let tdEmployeeRole = document.createElement("td");
    tdEmployeeRole.innerText = employeeRole;

    trInfos.appendChild(tdEmployeeName);
    trInfos.appendChild(tdEmployeeEmail);
    trInfos.appendChild(tdEmployeeRole);

    document.getElementById("tbody").appendChild(trInfos);
  }
}
