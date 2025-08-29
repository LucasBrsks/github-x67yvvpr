import * as React from "react";

function Teste4() {
  const MudarTexto = () => {
    const txt = document.getElementById("texto");
    let novo_texto = prompt("Escreve oq vai tar no texto");
    txt.textContent = novo_texto;
  };
  return (
    <>
      <button class = "btn btn-success "onClick={MudarTexto}>Mudar testo</button>
      <h2 id="texto">Esse texto será mudado</h2>
    </>
  );
}
export default Teste4;
