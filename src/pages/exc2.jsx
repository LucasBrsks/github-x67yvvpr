import * as React from 'react';

function Exc2(){
  const MudarTexto = () => {
    const txt = document.getElementById("texto");
    let novo_texto = document.getElementById("novo_texto");
    txt.textContent = novo_texto.value;
  };
  return (
    <>     
      <h1 id="texto">Esse texto será mudado</h1>
      <input
              class="rounded-pill text-center"
              maxLength="50"
              type="text"
              placeholder="Coloque o novo texto"
              id="novo_texto"
              required
            /><br />
            <button class = "btn btn-success "onClick={MudarTexto}>Mudar testo</button>
    </>
  );
}

export default Exc2;