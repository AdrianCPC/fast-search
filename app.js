//Linking DOM
const inputSearch = document.getElementById("search");
const cells = document.getElementsByTagName("td");

//Catch API data
let uri = "https://jsonplaceholder.typicode.com/users";
fetch(uri)
    .then((response) => response.json())
    .then((json) => showData(json))
    .catch((e) => console.log(e));

const showData = (data) => {
    //console.log(data)
    let body = "";
    for (let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].name}</td></tr>`;
    }
    document.querySelector(".people").innerHTML = body;
};


//Setting search
inputSearch.addEventListener('keyup', (e) => {
    let text = e.target.value
    // console.log(text);
    let names = new RegExp(text, "i")
    for (let i = 0; i < cells.length; i++) {
        let valor = cells[i]
        // console.log(valor);
        if (names.test(valor.innerText)) {
            valor.classList.remove("hide");
        } else {
            console.log(valor);
            valor.classList.add("hide");
        }
    }

});