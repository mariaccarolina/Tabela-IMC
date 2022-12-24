const formulario = document.querySelector(".box-form");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  const pesoRecebido = e.target.querySelector("#meu-peso");
  const alturaRecebida = e.target.querySelector("#minha-altura");

  const peso = Number(pesoRecebido.value);
  const altura = Number(alturaRecebida.value);

  if (!peso) {
    imcResult("Peso inválido!", false);
    return;
  }

  if (!altura) {
    imcResult("Altura inválida!", false);
    return;
  }

  const imc = getImc(peso, altura);
  console.log(imc);
});

function getValoresImc(imc) {
  const valor = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criarP() {
  const p = document.createElement("p");
  return p;
}

function imcResult(msg, isValid) {
  const resultado = document.querySelector(".resultadoImc");
  resultado.innerHTML = "";

  const p = criarP();
  p.innerHTML = msg;
  resultado.appendChild(p);
}
