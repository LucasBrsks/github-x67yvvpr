import * as React from "react";
import { useState } from "react";

function Teste5() {
  const [contador, setContador] = useState(0);
  const [numero, setNumero] = useState(0);

  return (
    <>
      <h1>UseState (Estado)</h1>
      <h2>Contador usando State</h2>
      <h3>Contador: {contador}</h3>
      <button onClick={() => setContador(contador + 1)} class="btn btn-dark">
        +
      </button>
      <button onClick={() => setContador(contador - 1)} class="btn btn-dark">
        -
      </button>
      <button onClick={() => setContador(contador * 2)} class="btn btn-dark">
        x2
      </button>
      <button onClick={() => setContador(contador ** 2)} class="btn btn-dark">
        **2
      </button>
      <button onClick={() => setContador(0)} class="btn btn-dark">
        C
      </button>
      <br />
      Add numero <br />
      <input type="number" onChange={(e) => setNumero(Number(e.target.value))} />
      <button onClick={() => setContador(contador + numero)}>add</button>
      {contador > 1000 && <p>Uou, passou de 1000</p>}
    </>
  );
}

export default Teste5;
