const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    //se a tecla clicada estiver dentro das teclas
    //permitidas:
    input.value += ev.key;
    //aqui eu acrescentei o valor de ev.key(tecla clicada) dentro
    //do input.value // OU SEJA, se ela estiver inclusa, ela é válida.
    return;
  }
  if (ev.key === "Backspace") {
    //serve para habilitar a tecla de apagar
    input.value = input.value.slice(0, -1);
    //vai pegar o valor atual, e dar um slice(ele corta um dos itens).
    //(0, -1) -> vai manter do primeiro até o penúltimo valor, e excluir o último.
    //se fosse (0, -2), ele ia pegar até o antepenúltimo, e excluir o último e penúltimo.
  }

  if (ev.key === "Enter") {
    calculate();
  }
});

function calculate() {
  console.log("Calculado");
}
