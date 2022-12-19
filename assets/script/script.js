const formulario = document.querySelector(".box-form");
const pesoRecebido = document.getElementById("meu-peso").value;
const alturaRecebida = document.getElementById("minha-altura").value;

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("aaaa");
  imcResult("vai estudar kkkk");
});

function imcResult(msg) {
  const resultado = document.querySelector(".resultadoImc");
  resultado.innerHTML = msg;
}
