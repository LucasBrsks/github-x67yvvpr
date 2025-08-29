import React from "react";

function Teste3() {
  function receber_numero() {
    let num1 = parseInt(prompt("Escreve um numero"));
    let num2 = parseInt(prompt("otro"));
    return [num1, num2];
  }

  function calcular(op) {
    let [num1, num2] = receber_numero();
    let res = 0;

    switch (op) {
      case "+":
        res = somar(num1, num2);
        break;
      case "-":
        res = subtrair(num1, num2);
        break
      case "*":
        res = multiplicar(num1, num2);
        break
      case "/":
        res = dividir(num1, num2);
        break
      case "x":
        res = radiciar(num1, num2);
        break
      case "**":
        res = exponenciar(num1, num2);
        break
    }
    alert(`${num1}${op}${num2}=${res}`);
  }

  function somar(num1, num2) {
    let res = num1 + num2;
    return res;
  }
  function subtrair(num1, num2) {
    let res = num1 - num2;
    return res;
  }
  function multiplicar(num1, num2) {
    let res = num1 * num2;
    return res;
  }
  function dividir(num1, num2) {
    let res = num1 / num2;
    return res;
  }
  function radiciar(num1, num2) {
    let res = num1 ** (1/num2);
    return res;
  }
  function exponenciar(num1, num2) {
    let res = num1 ** num2;
    return res;
  }

  return (
    <>
      <button class="btn btn-warning" onClick={() => calcular("+")}>somar</button>
      <button class="btn btn-warning" onClick={() => calcular("-")}>subtrair</button>
      <button class="btn btn-warning" onClick={() => calcular("*")}>multiplicar</button>
      <button class="btn btn-warning" onClick={() => calcular("/")}>dividir</button>
      <button class="btn btn-warning" onClick={() => calcular("x")}>radiciar</button>
      <button class="btn btn-warning" onClick={() => calcular("**")}>exponenciar</button>
    </>
  );
};
export default Teste3;
