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
  //para cada botão (for each button) será executado a função:
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    //se a tecla clicada estiver dentro das teclas
    //permitidas:
    input.value += ev.key;
    //aqui eu acrescentei o valor de ev.key(tecla clicada) dentro
    //do input.value // OU SEJA, se ela estiver inclusa, ela aparece na tela.
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

document.getElementById("equal").addEventListener("click", calculate);

function calculate() {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const resultado = eval(input.value);
  resultInput.value = resultado;
  resultInput.classList.remove("error").value;
}

document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    const button = ev.currentTarget;
    if (button.innerText === "Copy") {
      button.innerText = "Copied!";
      button.classList.add("success");
      navigator.clipboard.writeText(resultInput.value);
    } else {
      button.innerText = "Copy";
      button.classList.remove("success");
    }
  });

document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});
