fetch("https://employees-api-oite.onrender.com/employees", {
    method: "GET",
    headers: {
        "Content-Type": "Application/json",
    }
}).then((data) => {
        return data.json()
});

function list(json) {
    
}



