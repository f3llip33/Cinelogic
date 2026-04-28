const trocar = document.getElementById("claro")

let estado = "branco"

trocar.addEventListener("click", function() {
    if (estado === "branco") {
        black();            
        estado = "preto";    
        trocar.textContent = "Tema Escuro";
    } else {
        white();             
        estado = "branco";
        trocar.textContent = "Tema Claro";
    }
});

function white() {
    let cares = document.querySelector("header")
    let ah = document.querySelector("a")
    let card = document.querySelector(".card-hero")
    let inputi = document.querySelector(".search-input")
    ah.style.color = "black"
    inputi.style.color = "black";
    inputi.style.backgroundColor = "white";
    inputi.style.border = "1px solid red";
    card.style.background = "white"
    card.style.color = "black";
    card.style.border = "1px solid red"
    cares.style.backgroundColor = "white"
    cares.style.border = "1px solid red"
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
}

function black() {
    let cares = document.querySelector("header")
    let ah = document.querySelector("a")
    let card = document.querySelector(".card-hero")
    let inputi = document.querySelector(".search-input")
    ah.style.color = "white";
    inputi.style.color = "black";
    inputi.style.backgroundColor = "#333333";
    cares.style.backgroundColor = "#1e1e1e";
    cares.style.color = "white";
    cares.style.border = "none";
    card.style.border = "none";
    card.style.background = "linear-gradient(135deg, #2b2b2b 0%, #1a1a1a 100%)";
    card.style.color = "white";
    document.body.style.color = "white";
    document.body.style.backgroundColor = "#333333";
}