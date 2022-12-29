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
  const valoresImc = getValoresImc(imc);
  const mensagemFinal = `Seu IMC é ${imc} ${valoresImc}.`;
  imcResult(mensagemFinal, true);
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
  if (imc >= 39.9) {
    return valor[5];
  }
  if (imc >= 34.9) return valor[4];
  if (imc >= 29.9) return valor[3];
  if (imc >= 24.9) return valor[2];
  if (imc >= 18.5) return valor[1];
  if (imc < 18.5) return valor[0];
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

  if (isValid) {
    p.classList.add("resultado-final");
  } else {
    p.classList.add("resultado-negativo");
  }
  p.innerHTML = msg;
  resultado.appendChild(p);
}
