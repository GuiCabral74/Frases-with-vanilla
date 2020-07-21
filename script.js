const dig = document.querySelector(".dig");
const btn = document.querySelector(".btn");
const sec = document.querySelector("#main");
const campo = document.querySelector(".campo");
const frase = document.querySelector(".fraseNova");

let model = [];

dig.addEventListener("change", function (e) {
    model[1] = e.target.value;
    console.log(e.target.value);
});

campo.addEventListener("submit", function (e) {
    e.preventDefault();
});

btn.addEventListener("click", function () {
    const novo = document.createElement("p", model);
    const btn2 = document.createElement("button");
    novo.innerText = model[1];
    btn2.innerText = "Apagar";
    novo.style.width = "100%";
    novo.style.background = "lightBlue";
    novo.style.border = "1px solid black ";
    dig.value = "";

    sec.appendChild(novo);
    sec.appendChild(btn2);

    btn2.addEventListener("click", function () {
        novo.remove();
        btn2.remove();
    });
});

